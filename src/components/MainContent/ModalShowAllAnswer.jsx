import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import {Box} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction='up' ref={ref} {...props} />;
});

export default function FullScreenDialog({isOpen, onClose, listAnswers}) {
   if (!isOpen) {
      return null;
   }
   return (
      <React.Fragment>
         <Dialog
            fullScreen
            open={isOpen}
            onClose={onClose}
            TransitionComponent={Transition}
            sx={{backgroundColor: "#383C49"}}>
            <AppBar sx={{position: "sticky", backgroundColor: "#232736", top: "0px"}}>
               <Toolbar>
                  <Box sx={{flexGrow: 1, padding: "10px"}}>
                     <Box
                        sx={{
                           display: "flex",
                           padding: "10px",
                           flexWrap: "nowrap",
                           alignItems: "center",
                           gap: "10px",
                        }}>
                        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' sx={{width: 56, height: 56}} />
                        <Typography sx={{ml: 2, flex: 1}} variant='h6' component='div'>
                           UserName: {listAnswers.question.creator.user_name}
                           <br />
                           Email: {listAnswers.question.creator.user_email}
                        </Typography>
                     </Box>
                     <Box
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                           alignContent: "center",
                           gap: "5px",
                        }}>
                        <Typography sx={{ml: 2, flex: 1}} variant='h6' component='div'>
                           Question: {listAnswers.question.question_title}
                        </Typography>
                        <Typography sx={{ml: 2, flex: 1}} variant='h6' component='div'>
                           {listAnswers.question.question_description}
                        </Typography>
                        <Typography sx={{ml: 2, flex: 1, color: "red"}} variant='h6' component='div'>
                           Có tất cả {listAnswers.totalAnswers} câu trả lời.
                        </Typography>
                     </Box>
                  </Box>
                  <IconButton edge='start' color='inherit' onClick={onClose} aria-label='close'>
                     <CloseIcon />
                  </IconButton>
               </Toolbar>
            </AppBar>
            <List sx={{backgroundColor: "#383C49", height: "100vh"}}>
               {listAnswers.answers.map((answer, index) => (
                  <React.Fragment key={index}>
                     <ListItemButton>
                        <ListItemText primary={"Admin: " + answer.responder.user_name} secondary={"Nội dung: "+ answer.answer_content} />
                        <Button sx={{color: "green"}}>
                           <ModeEditIcon />
                        </Button>
                        <Button sx={{color: "#F24237"}}>
                           <DeleteOutlineIcon />
                        </Button>
                     </ListItemButton>
                  </React.Fragment>
               ))}
            </List>
         </Dialog>
      </React.Fragment>
   );
}
