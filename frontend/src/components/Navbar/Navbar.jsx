import { useDispatch,useSelector } from 'react-redux'
import { logOut } from '../../action/AuthAction'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));



  export default function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate=useNavigate()
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const dispatch=useDispatch()
    const {user} = useSelector((state) => state.authReducer.authData)


    return (
      <AppBar>
        <StyledToolbar>

          <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }} onClick={()=> navigate('/')}>
            Zango
          </Typography>
          <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem  onClick={()=>dispatch(logOut())}>Logout</MenuItem>
          </MenuIcon>
          <Search>
            <InputBase placeholder="search..." />
          </Search>
          <Icons
           onClick={(e) => setOpen(true)}>
            
            <Avatar
              sx={{ width: 30, height: 30 }}
              src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "profile.png"}
             
            />
             <Typography variant="span">{user.firstname}</Typography>
          </Icons>
          <UserBox onClick={(e) => setOpen(true)} sx={{ display: "flex",
  justifyContent: "space-between",}}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "profile.png"}
            />
            <Typography variant="span">{user.firstName}</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          
          <MenuItem  onClick={()=>dispatch(logOut())}>Logout</MenuItem>
        </Menu>
      </AppBar>
    );
  }