import AddCardIcon from "@mui/icons-material/AddCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";

function CardQuestion({card}) {
   return (
      <Box
         sx={{
            minWidth: "300px",
            maxWidth: "300px",
            backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#80B918" : "#ebecf0"),
            ml: 2,
            borderRadius: "6px",
            height: "fit-content",
            mb: 2,
         }}>
         <Box
            sx={{
               padding: 2,
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
            }}>
            <Typography
               variant='h6'
               sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
               }}>
               {card?.descriptionQuestion}
               <Tooltip title='Edit'>
                  <EditIcon sx={{color: "#95a5a6", cursor: "pointer", fontSize: "large", ml: 1}} />
               </Tooltip>
            </Typography>
            <Box>
               <Tooltip title='Delete'>
                  <DeleteOutlineIcon
                     sx={{color: "text.primary", cursor: "pointer"}}
                     id='basic-card-dropdown'
                     aria-controls={open ? "basic-menu-card-dropdown" : undefined}
                     aria-haspopup='true'
                     aria-expanded={open ? "true" : undefined}
                  />
               </Tooltip>
            </Box>
         </Box>
         <Box sx={{padding: 2}}>
            {card?.listsAnswers.length > 0 ? (
               card.listsAnswers.map((answer, index) => (
                  <Typography key={index} sx={{mb: 1}}>
                     <strong>{answer.userName}:</strong> {answer.descriptionAnswer}
                  </Typography>
               ))
            ) : (
               <Typography sx={{mb: 1, fontStyle: "italic", color: "gray"}}>Không có câu trả lời</Typography>
            )}
         </Box>
         <Box
            sx={{
               padding: 2,
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
            }}>
            <Button style={{backgroundColor: "#ffffff"}} startIcon={<AddCardIcon />}>
               Thêm mới câu trả lời
            </Button>
            <Box sx={{display: "flex", alignItems: "center"}}>
               {card?.numberLikes > 0 ? (
                  <>
                     <FavoriteIcon color='error' />
                     <Typography sx={{ml: 0}}>{card?.numberLikes}</Typography>
                  </>
               ) : (
                  <>
                     <FavoriteIcon />
                     <Typography sx={{ml: 0}}>{card?.numberLikes}</Typography>
                  </>
               )}
            </Box>
         </Box>
      </Box>
   );
}

export default CardQuestion;
