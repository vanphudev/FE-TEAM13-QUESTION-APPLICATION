import axios from "axios";
import Cookie from "js-cookie";

const api = axios.create({
   baseURL: "http://localhost:8899/api/v1",
   headers: {
      "Content-type": "application/json",
      accessToken: Cookie.get("accessToken") || "",
   },
});

export default api;
