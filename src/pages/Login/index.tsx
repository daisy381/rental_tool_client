//library
import React, {FC, useState} from 'react'
import {useNavigate} from "react-router-dom";

//mui components
import {Box, Button, Checkbox, FormControlLabel, TextField} from "@mui/material";

//services
import {authenticationService} from "../../services/authentication";
import {getCookie, setCookie} from "../../helpers/util";


//style
import {
    Main
} from "./style";

const Login: FC = () => {
    const token = getCookie('token');
    const navigate = useNavigate();

    if (token) navigate('/');


    const handleSubmit =  async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();

            const data:any = new FormData(event.currentTarget);

            const email:any = data.get('email');
            const password:any = data.get('password');

            await authenticationService.signIn(email,password)
                .then(data => {
                    const date = new Date();

                    setCookie(
                        'token', data.token,
                        { expires: date.setDate(date.getDate() + 1) });
                    navigate('/');
                });
        }
        catch (error){
            console.error(error);
        }
    };

    return (
        <Main>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
            />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
            </Box>

        </Main>
    )
}
export default Login;