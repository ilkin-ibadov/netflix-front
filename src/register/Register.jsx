import Form from "../common/Form"
import { useNavigate } from "react-router"
import { useState } from "react"
import { toast } from "react-toastify"

const Register = () => {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    const register = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (response.ok) {
                toast.success(data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                navigate('/login')
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
            label: "Firstname",
            name: "firstname",
            type: "text",
            placeholder: "Enter your firstname"
        },
        {
            label: "Lastname",
            name: "lastname",
            type: "text",
            placeholder: "Enter your lastname"
        },
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
            title: "Register",
            style: "bg-green-700 text-white py-3",
            action: () => { register()}
        },
        {
            title: "Already have an account?",
            style: "text-sm",
            action: () => {
                navigate("/login")
            }
        },
    ]

    return (
        <Form setFormData={setFormData} formItems={formItems} formButtons={formButtons} />
    )
}

export default Register