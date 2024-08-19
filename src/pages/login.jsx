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
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import validator from "validator";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLoginGoogle = async () => {};
  const handleLoginFacebook = async () => {};
  const handleLoginTwitter = async () => {};

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      enqueueSnackbar("Email and password is required!", {
        variant: "error",
      });
      return;
    }

    if (validator.isEmail(email)) {
      enqueueSnackbar("Email is not in correct format!", { variant: "error" });
      return;
    }

    if (password.length < 6) {
      enqueueSnackbar("Password must be at least 6 characters!", {
        variant: "error",
      });
      return;
    }

    try {
      //call api
      if (response.ok) {
        enqueueSnackbar("Login successful!", { variant: "success" });
      } else {
        enqueueSnackbar("Incorrect email or password!!", {
          variant: "error",
        });
      }
    } catch (error) {
      enqueueSnackbar("Connection error! Please try again.", {
        variant: "error",
      });
    }
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
          color: "black",
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <CardHeader
                title="Login into account"
                titleTypographyProps={{
                  variant: "h5",
                  align: "center",
                  style: { color: "#1b4332" },
                }}
              />
              <CardContent>
                <form onSubmit={handleLogin}>
                  <div style={{ marginBottom: "20px" }}>
                    <TextField
                      label="Email"
                      name="email"
                      fullWidth
                      variant="outlined"
                      placeholder="Email Address"
                      sx={{
                        "& label": { color: "#1b4332" },
                      }}
                      InputProps={{
                        style: {
                          backgroundColor: "#d8f3dc",
                          color: "#1b4332",
                          borderRadius: "10px",
                        },
                      }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div style={{ marginBottom: "10px" }}>
                    <TextField
                      label="Password"
                      name="password"
                      fullWidth
                      variant="outlined"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      sx={{
                        "& label": { color: "#1b4332" },
                      }}
                      InputProps={{
                        style: {
                          backgroundColor: "#d8f3dc",
                          color: "#1b4332",
                          borderRadius: "10px",
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Remember me"
                    style={{ marginBottom: "10px" }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    style={{
                      marginBottom: "10px",
                      backgroundColor: "#40916c",
                      color: "#fff",
                      borderRadius: "10px",
                      minHeight: "40px",
                    }}
                  >
                    Login
                  </Button>

                  <Typography
                    variant="body2"
                    align="right"
                    style={{
                      marginTop: "10px",
                      fontSize: "16px",
                    }}
                  >
                    <a
                      href="/forgot-password"
                      style={{ textDecoration: "none", color: "#007bff" }}
                    >
                      Forgot Password?
                    </a>
                  </Typography>

                  <Typography
                    variant="body2"
                    align="center"
                    style={{
                      margin: "20px 0",
                      fontSize: "18px",
                    }}
                  >
                    or login with
                  </Typography>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#4267B2",
                        color: "#fff",
                        flex: 1,
                        marginRight: "10px",
                      }}
                      onClick={handleLoginFacebook}
                    >
                      Facebook
                    </Button>

                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#DB4437",
                        color: "#fff",
                        flex: 1,
                        marginRight: "10px",
                      }}
                      onClick={handleLoginGoogle}
                    >
                      Google
                    </Button>

                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#1DA1F2",
                        color: "#fff",
                        flex: 1,
                      }}
                      onClick={handleLoginTwitter}
                    >
                      Twitter
                    </Button>
                  </div>

                  <Divider style={{ margin: "20px 0" }} />

                  <Typography
                    variant="body2"
                    align="center"
                    style={{ fontSize: "16px" }}
                  >
                    Don’t have an account?{" "}
                    <a
                      href="/register"
                      style={{ textDecoration: "none", color: "#007bff" }}
                    >
                      Register here
                    </a>
                  </Typography>
                </form>
              </CardContent>
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default LoginPage;
