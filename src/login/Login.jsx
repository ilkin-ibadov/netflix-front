import Form from "../common/Form"
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { useStore } from "zustand";
import { themeStore } from "../common/Store";


const Login = () => {
    // const {theme, setTheme} = useContext(ThemeContext)
    const navigate = useNavigate()
    const { theme, toggle } = useStore(themeStore)


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
            action: () => {
                navigate('/')
            }
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
            action: () => { }
        },
    ]

    return (
        <div className={`w-full h-screen ${theme === "light" ? "bg-white" : "bg-zinc-500"}`}>
            <Form formItems={formItems} formButtons={formButtons} />

        </div>

    )
}

export default Login