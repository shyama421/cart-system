import { Button, PasswordInput, TextInput } from "@mantine/core"
import { useNavigate } from "react-router"

function Login() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1>Login Page</h1>
                <div>
                    <TextInput
                        label="Email"
                        placeholder="Enter Email" className="w-96"
                    />
                </div>
                <div>
                    <PasswordInput
                        label="Password"
                        placeholder="Enter Password" className="w-96"
                    />
                </div>

                <Button onClick={() => { navigate('/home') }} variant="filled" className="mt-1" >Login</Button>

            </div>
        </>
    )
}
export default Login