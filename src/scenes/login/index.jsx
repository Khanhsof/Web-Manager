import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import PropTypes from "prop-types";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Login({ setToken }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {};
  return (
    <Grid display="flex" alignItem="center" justifyContent="center">
      <Paper
        sx={{ mt: "80px", p: "20px", height: "70vh", width: "400px" }}
        elevation={10}
      >
        <Grid align="center">
          <Avatar sx={{ backgroundColor: "#1bbd7e" }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign in</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ pb: "20px" }}
            onChange={(e) => setUserName(e.target.value)}
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
          />
          <TextField
            sx={{ pb: "20px" }}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            error={true}
            helperText="Please enter the password"
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            sx={{ margin: "20px 0" }}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            Sign in
          </Button>
        </form>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
