import Form from "../common/Form"
import { useNavigate } from "react-router"

const Register = () => {
    const navigate = useNavigate()

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
            label: "Phone",
            name: "phone",
            type: "tel",
            placeholder: "Enter your phone number"
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
            style: "bg-violet-700 text-white py-3 rounded-md",
            action: () => { }
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
        <Form formItems={formItems} formButtons={formButtons} />
    )
}

export default Register