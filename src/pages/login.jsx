import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0fff1",
      }}
    >
      <Card
        style={{
          width: "1000px",
          height: "600px",
          backgroundColor: "#b7e4c7",
          borderRadius: "30px",
        }}
      >
        <Grid container spacing={0} style={{ height: "100%" }}>
          <Grid item xs={5}>
            <img
              src="https://plus.unsplash.com/premium_photo-1679870686665-a1b0b6ca56a9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Login Illustration"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid item xs={7}>
            <CardHeader
              title="Login Page"
              titleTypographyProps={{
                variant: "h5",
                align: "center",
                style: { color: "#1b4332" },
              }}
            />
            <CardContent>
              <form>
                <div style={{ marginBottom: "20px" }}>
                  <TextField
                    label="User Name"
                    name="username"
                    fullWidth
                    required
                    variant="outlined"
                    placeholder="Enter your username"
                    sx={{
                      "& label": { color: "#1b4332" },
                    }}
                    InputProps={{
                      style: { backgroundColor: "#d8f3dc", color: "#1b4332" },
                    }}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <TextField
                    label="Password"
                    name="password"
                    fullWidth
                    required
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    sx={{
                      "& label": { color: "#1b4332" },
                    }}
                    InputProps={{
                      style: { backgroundColor: "#d8f3dc", color: "#1b4332" },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <Typography variant="body2" align="right">
                  <Link
                    to="/forgot-password"
                    style={{ textDecoration: "none", color: "#1b4332" }}
                  >
                    Forgot Password?
                  </Link>
                </Typography>

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  style={{
                    marginTop: "20px",
                    backgroundColor: "#40916c",
                    color: "#fff",
                  }}
                >
                  Login
                </Button>
              </form>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default LoginPage;
