import Box from "@mui/material/Box";
import React, {useEffect} from "react";
import ListCardQuestion from "../components/MainContent/listCardQuestion";
import mockData from "../data/mockData.js";
import QuestionService from "../services/quesionsService.js";

const Main = () => {
   useEffect(() => {
      const fetchQuestions = async () => {
         try {
            const data = await QuestionService.getAll();
            console.log(data.response);
         } catch (err) {

         }
      };
      fetchQuestions();
   }, []);
   return (
      <>
         <Box
            sx={{
               backgroundColor: (theme) =>
                  theme.mode === "dark" ? theme.colorSchemes.dark.bg.body : theme.colorSchemes.light.bg.secondary,
               width: "100%",
               overflow: "hidden",
               height: "max-content",
               padding: "10px",
               paddingLeft: "50px",
               paddingRight: "50px",
               margin: "0 auto",
            }}>
            <ListCardQuestion listQuestions={mockData?.listsQuestion} />
         </Box>
      </>
   );
};
export default Main;
