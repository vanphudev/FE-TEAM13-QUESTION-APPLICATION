import Box from "@mui/material/Box";
import CardQuestion from "./cardQuestion";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function ListCard({listQuestions}) {
   return (
      <Box sx={{width: "100%", margin: "0 auto", height: "85vh", position: "relative"}}>
         {listQuestions && listQuestions.length > 0 ? (
            <Box
               sx={{
                  backgroundColor: "inherit",
                  width: "100%",
                  height: "calc(100% - 50px)",
                  display: "flex",
                  overflowY: "auto",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "10px",
                  "&::-webkit-scrollbar-track": {margin: 2},
               }}>
               {listQuestions?.map((items, index) => (
                  <CardQuestion key={index} card={items} />
               ))}
            </Box>
         ) : (
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
               }}>
               <h1>There are no questions</h1>
            </Box>
         )}
         <Box sx={{margin: "10px", position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)"}}>
            <Stack spacing={2}>
               <Pagination count={10} variant='outlined' shape='rounded' size='large' />
            </Stack>
         </Box>
      </Box>
   );
}

export default ListCard;
