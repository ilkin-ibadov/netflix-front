import Form from "../common/Form"
import { useNavigate } from "react-router";
import { useStore } from "zustand";
import { themeStore } from "../common/Store";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
    const [formData, setFormData] = useState({})
    const { theme, addAccessToken, addRefreshToken } = useStore(themeStore)
    const navigate = useNavigate()

    const login = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (response.ok) {
                addAccessToken(data.accessToken)
                addRefreshToken(data.refreshToken)
                navigate('/')
            } else {
                toast.error(data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }


        } catch (error) {
            console.error(error)
        }
    }


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
                login()
            }
        },
        {
            title: "Don't have an account?",
            style: "",
            action: () => {
                navigate("/register")
            }
        },
    ]

    return (
        <div className={`w-full h-screen`}>
            <Form setFormData={setFormData} formItems={formItems} formButtons={formButtons} />
        </div>


    )
}

export default Login