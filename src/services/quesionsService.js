import api from "../apis";

const QuestionService = {
   getAll: async () => {
      try {
         const response = await api.get("/questions/get-all");
         return response;
      } catch (error) {
         throw error;
      }
   },
};

export default QuestionService;
