import { Modal, useMantineTheme } from '@mantine/core';
// import './ProfileModal'
import PostShare from '../../components/PostShare/PostShare'

function ShareModal({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();
const modalStyle = {display: "flex",
alignItems: "center",
justifyContent: "center",}
  return (
    <Modal style={modalStyle}
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size = '45%'
      opened ={modalOpened}
      onClose ={()=> setModalOpened(false)}
    >
     <PostShare/>
    </Modal>
  );
}

export default ShareModal;