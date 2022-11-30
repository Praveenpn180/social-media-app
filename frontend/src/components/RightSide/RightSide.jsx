import React,{useState} from 'react'
import './RightSide.css'
import Homee from '../../img/home.png'
import ShareModal from '../ShareModal/ShareModal'
import {
  Fab ,
  Tooltip,

} from "@mui/material";
import {
  AccountBox,
  Article,
  Home,
  Person,
  Add as AddIcon,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  
} from "@mui/material";

const RightSide = () => {
  const [modalOpened,setModalOpened] = useState(false)

  return (
    <div className="RightSide">
          <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
    <Box position="fixed" marginTop={8}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/chat">
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItemButton >
        </ListItem>
      
        <ListItem disablePadding>
       
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/friends">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
       
        <ListItem disablePadding>
          <ListItemButton component="a" href="/profile">
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        {/* <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
          </ListItemButton>
        </ListItem> */}
      </List>
      <Tooltip
       onClick={()=> setModalOpened(true)}
        title="New Post"
        sx={{
          position: "fixed",
          bottom: "250px",
          left: { xs: "calc(50% - 25px)", md:"100px" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
     
  <ShareModal modalOpened ={modalOpened} setModalOpened ={setModalOpened}/>

    </Box>
  </Box>

  
  
    </div>
  )
}

export default RightSide