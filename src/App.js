import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  return (
      <Box>
        <Container component='main' maxWidth='xs'>
          <Box mt={"25%"}>
            <Paper elevation={24} sx={{ p: 2, borderRadius: "0.5rem" }}>
              <Box
                  sx={{
                    backgroundColor: "#075e54",
                    borderRadius: "0.5rem",
                    marginTop: 0,
                    color: "white",
                    boxShadow: 12,
                    padding: 4,
                  }}
              >
                <Typography align='center' variant='h4' gutterBottom>
                  <b>Iniciar Sesión</b>
                </Typography>
                <Typography align='center' gutterBottom>
                  Introduce tus datos para iniciar sesión
                </Typography>
              </Box>
              <Box
                  component='form'
                  onSubmit={null}
                  mt={1}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
              >
                <TextField
                    margin='normal'
                    variant='filled'
                    required
                    fullWidth
                    name='email'
                    id='email'
                    label='Correo electrónico'
                    autoComplete='email'
                />
                <TextField
                    margin='normal'
                    variant='filled'
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                />
                <FormControlLabel
                    control={<Checkbox value='remember' color='primary' />}
                    label='Recordar usuario'
                />
                <Button
                    type='submit'
                    variant='contained'
                    sx={{ mt: 3, mb: 4, mx: "auto" }}
                    onClick={() => { history.push('/home') }}
                >
                  Iniciar Sesión
                </Button>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
  );
};

export default Login;
