import React, {useState} from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { login } from '../../api';
import "./index.css"


const Login = (
    {
        handleShowMessage,
        handleClearMessage
}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");;
    const [password, setPassword] = useState("");


    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = async () => {
        try {
            if (email !== "" && password !== "") {
                const data = await login(email, password);
                handleShowMessage("Succesfully logged in", "success");
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error);
            handleShowMessage(error.message, "error");
        }
    }


    return (
        <FormControl id="form-container">
            <h2>Login</h2>
            <TextField id="standard-basic" label="Email" variant="standard" value={email} onChange={onChangeEmail}/>
            <TextField id="standard-basic" label="Password" variant="standard" type="password" onChange={onChangePassword} value={password} />
            <Button onClick={handleLogin}>Login</Button>
        </FormControl>
    )
}

export default Login;