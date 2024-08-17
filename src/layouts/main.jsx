import Box from "@mui/material/Box";
import ListCardQuestion from "../components/MainContent/listCardQuestion";
import mockData from "../data/mockData.js";

const Main = () => {
   return (
      <>
         <Box
            sx={{
               backgroundColor: (theme) =>
                  theme.mode === "dark" ? theme.colorSchemes.dark.bg.secondary : theme.colorSchemes.light.bg.secondary,
               width: "100%",
               overflow: "hidden",
               height: "max-content",
               padding: "10px",
               margin: "0 auto",
            }}>
            <ListCardQuestion listQuestions={mockData?.listsQuestion} />
         </Box>
      </>
   );
};
export default Main;
