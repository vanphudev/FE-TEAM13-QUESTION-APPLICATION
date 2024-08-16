import Box from "@mui/material/Box";
import CardQuestion from "./cardQuestion";

function ListCard({listQuestions}) {
   const listQuestionsNew = [];
   for (let i = 0; i < listQuestions?.length; i += 2) {
      listQuestionsNew.push(listQuestions.slice(i, i + 2));
   }
   return (
      <Box
         sx={{
            backgroundColor: "inherit",
            width: "100%",
            height: "100%",
            display: "flex",
            overflowX: "auto",
            overflowY: "hidden",
            "&::-webkit-scrollbar-track": {margin: 2},
         }}>
         {listQuestionsNew?.map((card, index) => (
            <Box
               key={index}
               sx={{display: "flex", flexDirection: "column", minWidth: "300px", maxWidth: "200px", mx: 2}}>
               {card.map((items) => (
                  <CardQuestion key={items.id} card={items} />
               ))}
            </Box>
         ))}
      </Box>
   );
}

export default ListCard;
