import React from 'react'
import Form from '../common/Form'

const Login = () => {

    const formItems = [
        {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email"
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter a password"
        },

    ]

    const buttons = [
        {
            title: "Login",
            style: "bg-blue-600 text-white py-3 rounded-md",
            action: () => {}
        },
        {
            title: "Don't have an account?",
            style: "",
            action: () => {}
        },
        {
            title: "Forgot password?",
            style: "text-red-600",
            action: () => {}
        },
    ]

    return (
        <Form formItems={formItems} buttons={buttons}/>
    )
}

export default Login