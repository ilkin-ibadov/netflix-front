import Form from "../common/Form"
import { useNavigate } from "react-router"

const Login = () => {
    const navigate = useNavigate()
 

    const formItems = [
        {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Enter your email"
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            placeholder: "Enter a password"
        },
    ]

    const formButtons = [
        {
            title: "Login",
            style: "bg-green-700 text-white py-3",
            action: () => {}
        },
        {
            title: "Don't have an account?",
            style: "",
            action: () => {
                navigate("/register")
            }
        },
        {
            title: "Forgot password?",
            style: "text-red-600",
            action: () => {}
        },
    ]

    return (
        <Form formItems={formItems} formButtons={formButtons}/>
    )
}

export default Login