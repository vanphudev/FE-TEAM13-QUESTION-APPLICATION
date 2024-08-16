import Box from "@mui/material/Box";
import ListCardQuestion from "../components/MainContent/listCardQuestion";
import mockData from "../data/mockData.js";

const Main = () => {
   return (
      <>
         <Box
            sx={{
               backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#ffffff" : "#55A630"),
               width: "100%",
               height: "max-content",
               padding: "10px 0",
            }}>
            <ListCardQuestion listQuestions={mockData?.listsQuestion} />
         </Box>
      </>
   );
};
export default Main;
