import {
   Experimental_CssVarsProvider as CssVarsProvider,
   experimental_extendTheme as extendTheme,
} from "@mui/material/styles";

const theme = extendTheme({
   colorSchemes: {
      light: {
         bg: {
            primary: "#FFFFFF",
            secondary: "#F8F9FA",
            none: "transparent",
         },
         text: {
            primary: "#000000",
            secondary: "#000000",
            title: "#000000",
         },
         border: {
            primary: "#CED4DA",
            secondary: "#E9ECEF",
            hover: "#18181B",
         },
         hover: "#CED4DA",
      },
      dark: {
         bg: {
            primary: "#18181B",
            secondary: "#1E1E1E",
            none: "transparent",
         },
         text: {
            primary: "#CED4DA",
            secondary: "#E9ECEF",
            title: "#FFFFFF",
         },
         border: {
            primary: "#CED4DA",
            secondary: "#E9ECEF",
            hover: "#FFFFFF",
         },
         hover: "rgba(255, 255, 255, .3)",
      },
   },
   mode: "dark",
});

export default theme;
