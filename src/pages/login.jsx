import React, {useState} from "react";
import {Button, Card, CardContent, CardHeader, TextField, Typography, IconButton, InputAdornment} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {Link} from "react-router-dom";

function LoginPage() {
   const [showPassword, setShowPassword] = useState(false);

   const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
   };

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };

   return (
      <Card
         style={{
            maxWidth: 500,
            margin: "auto",
            padding: "20px",
            marginTop: "200px",
            backgroundColor: "#b7e4c7",
         }}>
         <CardHeader
            title='Login Page'
            titleTypographyProps={{
               variant: "h5",
               align: "center",
               style: {color: "#1b4332"},
            }}
         />
         <CardContent>
            <form>
               <div style={{marginBottom: "20px"}}>
                  <TextField
                     label='User Name'
                     name='username'
                     fullWidth
                     required
                     variant='outlined'
                     placeholder='Enter your username'
                     sx={{
                        "& label": {color: "#1b4332"},
                     }}
                     InputProps={{
                        style: {backgroundColor: "#d8f3dc", color: "#1b4332"},
                     }}
                  />
               </div>
               <div style={{marginBottom: "20px"}}>
                  <TextField
                     label='Password'
                     name='password'
                     fullWidth
                     required
                     variant='outlined'
                     type={showPassword ? "text" : "password"}
                     placeholder='Enter your password'
                     sx={{
                        "& label": {color: "#1b4332"},
                     }}
                     InputProps={{
                        style: {backgroundColor: "#d8f3dc", color: "#1b4332"},
                        endAdornment: (
                           <InputAdornment position='end'>
                              <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                 {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                  />
               </div>

               <Typography variant='body2' align='right'>
                  <Link to='/forgot-password' style={{textDecoration: "none", color: "#1b4332"}}>
                     Forgot Password?
                  </Link>
               </Typography>

               <Button
                  type='submit'
                  variant='contained'
                  fullWidth
                  style={{
                     marginTop: "20px",
                     backgroundColor: "#40916c",
                     color: "#fff",
                  }}>
                  Login
               </Button>
            </form>
         </CardContent>
      </Card>
   );
}

export default LoginPage;
