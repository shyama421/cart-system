import { Button, PasswordInput, TextInput } from "@mantine/core"
import { useState } from "react";
import { useNavigate } from "react-router"

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (!email || !password) {
            alert("Email and Password are required!");
            return
        }
        navigate("/home"); 
    }

    return (

        <div className="flex flex-col justify-center items-center">
            <h1>Login Page</h1>
            <div>
                <TextInput
                    label="Email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-96"

                />
            </div>
            <div>
                <PasswordInput
                    label="Password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-96"
                />
            </div>

            <Button onClick={ handleLogin } variant="filled" className="mt-1">
            Login
        </Button>


        </div >

    )
}
export default Login