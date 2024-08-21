import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {red} from "@mui/material/colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";
import "../../styles/CardQuestion/card.scss";
import TextTruncate from "react-text-truncate";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {useTheme} from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {formatDateString, isValidDate} from "../../utils/func";
import axiosInstance from "../../apis";
import {useSnackbar} from "notistack";

const CardQuestion = ({card, size, setListQuestions}) => {
   const widthCard = size.width / size.size;
   const widthCard_new = widthCard - 10;
   const [openDelete, setOpenDelete] = React.useState(false);
   const [openEdit, setOpenEdit] = React.useState(false);
   const [openReply, setOpenReply] = React.useState(false);
   const {enqueueSnackbar} = useSnackbar();
   const handleClickOpenReply = () => {
      setOpenReply(true);
   };

   const handleCloseReply = () => {
      setOpenReply(false);
   };

   const handleClickOpenEdit = () => {
      setOpenEdit(true);
   };

   const handleCloseEdit = () => {
      setOpenEdit(false);
   };

   const handleClickOpenDelete = () => {
      setOpenDelete(true);
   };

   const handleCloseDelete = () => {
      setOpenDelete(false);
   };

   const handleDelete = async (itemId) => {
      try {
         const response = await axiosInstance.delete(`/questions/delete/${itemId}`);
         if (response.status === 200) {
            enqueueSnackbar("Delete item successfully", itemId, {variant: "success"});
            setListQuestions((prev) => prev.filter((item) => item.question_id !== itemId));
         }
      } catch (error) {
         enqueueSnackbar("Delete item failed", {variant: "error"});
      }
      setOpenDelete(false);
   };

   const [themeMode, setThemeMode] = React.useState(
      useTheme().mode === "light" ? useTheme().colorSchemes.light : useTheme().colorSchemes.dark
   );

   return (
      <>
         <React.Fragment>
            <Dialog
               open={openReply}
               onClose={handleCloseReply}
               aria-labelledby='alert-dialog-title'
               aria-describedby='alert-dialog-description'>
               <DialogTitle id='alert-dialog-title'>Reply to {card?.titleQuestion}</DialogTitle>
               <DialogContent>
                  <DialogContentText id='alert-dialog-description'>
                     Reply Content {card?.titleQuestion}
                  </DialogContentText>
               </DialogContent>
               <DialogActions>
                  <Button onClick={handleCloseReply}>Disagree</Button>
                  <Button onClick={handleCloseReply} autoFocus sx={{color: "red"}}>
                     Agree
                  </Button>
               </DialogActions>
            </Dialog>
         </React.Fragment>
         <React.Fragment>
            <Dialog
               open={openEdit}
               onClose={handleCloseEdit}
               aria-labelledby='alert-dialog-title'
               aria-describedby='alert-dialog-description'>
               <DialogTitle id='alert-dialog-title'>Cập nhật nội dung {card?.question_title}</DialogTitle>
               <DialogContent>
                  <DialogContentText id='alert-dialog-description'>
                     Nội dung câu hỏi: {card?.question_description}
                  </DialogContentText>
               </DialogContent>
               <DialogActions>
                  <Button onClick={handleCloseEdit}>Disagree</Button>
                  <Button onClick={handleCloseEdit} autoFocus sx={{color: "red"}}>
                     Agree
                  </Button>
               </DialogActions>
            </Dialog>
         </React.Fragment>
         <React.Fragment>
            <Dialog
               open={openDelete}
               onClose={handleCloseDelete}
               aria-labelledby='alert-dialog-title'
               aria-describedby='alert-dialog-description'>
               <DialogTitle id='alert-dialog-title'>Bạn có chắc chắn muốn xóa câu hỏi này không?</DialogTitle>
               <DialogContent>
                  <DialogContentText id='alert-dialog-description'>
                     Nội dung câu hỏi: {card?.question_description}
                  </DialogContentText>
               </DialogContent>
               <DialogActions>
                  <Button onClick={handleCloseDelete}>Disagree</Button>
                  <Button onClick={() => handleDelete(card?.question_id)} sx={{color: "red"}}>
                     Agree
                  </Button>
               </DialogActions>
            </Dialog>
         </React.Fragment>
         <Card
            sx={{
               width: widthCard_new,
               height: "max-content",
               backgroundColor: card?.isQuestionByAdmin ? "#202433" : "rgba(255, 255, 255, .05)",
               webkitBackdropFilter: "blur(15px)",
               backdropFilter: "blur(2px)",
               borderRadius: "10px",
               boxSizing: "border-box",
               border: `2px solid ` + themeMode.border.secondary,
               ":hover": {
                  border: "2px solid " + themeMode.border.hover,
               },
               color: themeMode.text.primary,
               cursor: "pointer",
            }}>
            <CardHeader
               sx={{padding: "10px"}}
               avatar={<Avatar sx={{bgcolor: red[500]}}>R</Avatar>}
               action={[
                  <>
                     <IconButton onClick={handleClickOpenEdit}>
                        <ModeEditIcon sx={{color: "green"}} />
                     </IconButton>
                     <IconButton onClick={() => handleClickOpenDelete(card?.question_id)}>
                        <DeleteOutlineIcon sx={{color: "red"}} />
                     </IconButton>
                  </>,
               ]}
               title={<TextTruncate line={1} element='span' truncateText='…' text={card?.asker.user_name} />}
               subheader={
                  <Typography>
                     <span
                        style={{
                           color: themeMode.text.title,
                        }}>
                        Question at
                     </span>{" "}
                     {formatDateString(card?.created_at)}
                  </Typography>
               }
            />
            <CardContent
               sx={{
                  padding: "0px 10px",
                  height: "88px",
                  color: themeMode.text.primary,
               }}>
               <Typography
                  variant='h6'
                  component='div'
                  sx={{
                     color: themeMode.text.title,
                  }}>
                  {<TextTruncate line={1} element='span' truncateText='…' text={card?.question_title} />}
               </Typography>
               <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{
                     color: themeMode.text.primary,
                  }}>
                  {<TextTruncate line={1} element='span' truncateText='…' text={card?.question_description} />}
               </Typography>
            </CardContent>
            <CardContent
               sx={{
                  height: "128px",
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "start",
                  padding: "2px 30px",
               }}>
               {card?.Answers && card?.Answers.length > 0 ? (
                  card.Answers.map(
                     (item, index) =>
                        index < 2 && (
                           <CardHeader
                              key={item.answer_id || index} // Sử dụng `item.id` nếu có, nếu không có thì dùng `index`
                              sx={{
                                 padding: "5px",
                                 marginBottom: "7px",
                                 borderRadius: "10px",
                                 backgroundColor: "rgba(255, 255, 255, .015)",
                                 ":hover": {
                                    backgroundColor: themeMode.hover,
                                 },
                              }}
                              avatar={<QuickreplyIcon />}
                              action={
                                 <IconButton>
                                    <ArrowOutwardIcon sx={{color: themeMode.text.title}} />
                                 </IconButton>
                              }
                              title={
                                 <TextTruncate line={1} element='span' truncateText='…' text={item?.User?.user_name} />
                              }
                              subheader={
                                 <Typography>
                                    <span style={{color: themeMode.text.title}}>Reply at </span>{" "}
                                    {formatDateString(card?.createdAt)}
                                 </Typography>
                              }
                           />
                        )
                  )
               ) : (
                  <Typography variant='h6' component='div' sx={{color: "red", textAlign: "center"}}>
                     <TextTruncate line={1} element='span' truncateText='…' text='No reply yet' />
                  </Typography>
               )}
            </CardContent>
            <CardActions disableSpacing>
               <AvatarGroup total={card?.answerers.length} sx={{float: "left", marginRight: "3px"}}>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
               </AvatarGroup>
               <Button size='small'>Show All</Button>
               <div style={{flex: "1 1 auto"}}></div>
               <IconButton>
                  <FavoriteBorderIcon
                     sx={{
                        color: "pink",
                        ":hover": {
                           color: "red",
                        },
                     }}
                  />
               </IconButton>
               <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{
                     marginRight: "10px",
                     color: themeMode.text.primary,
                  }}>
                  {card?.numberLikes}
               </Typography>
               <Button
                  sx={{float: "right", borderRadius: "10px"}}
                  startIcon={<ReplyIcon />}
                  onClick={handleClickOpenReply}>
                  Reply
               </Button>
            </CardActions>
         </Card>
      </>
   );
};

export default CardQuestion;
