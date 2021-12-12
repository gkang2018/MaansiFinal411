import React, {useState} from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { registration } from '../../api';
import { useNavigate } from 'react-router';
import "./index.css"


const Signup = (
    {
        handleShowMessage,
        handleClearMessage
}) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");;
    const [email, setEmail] = useState("");;
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSignup = async () => {
        try {
            if (name !== "" && email !== "" && password !== "" && confirmPassword !== "") {
                const data = await registration(name, email, password);
                handleShowMessage("Successfully signed up", "success");
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error);
            handleShowMessage(error.message, "error");
        }
    }
    return (
        <FormControl id="form-container">
            <h2>Register</h2>
            <TextField id="standard-basic" label="Name" variant="standard" value={name} onChange={onChangeName}/>
            <TextField id="standard-basic" label="Email" variant="standard" value={email} onChange={onChangeEmail}/>
            <TextField id="standard-basic" label="Password" variant="standard" type="password" onChange={onChangePassword} value={password} />
            <TextField id="standard-basic" label="Confirm Password" variant="standard" type="password" onChange={onChangeConfirmPassword} value={confirmPassword} />
            <Button style={{"float": "left"}} onClick={handleSignup}>Register</Button>
        </FormControl>
    )
}

export default Signup