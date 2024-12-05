import Form from "../common/Form"


const Register = () => {

    const formItems = [
        {
            name: "firstname",
            label: "Firstname",
            type: "text",
            placeholder: "Enter your firstname"
        },
        {
            name: "lastname",
            label: "Lastname",
            type: "text",
            placeholder: "Enter your lastname"
        },
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
            title: "Register",
            style: "bg-blue-600 text-white py-3 rounded-md",
            action: () => {}
        },
        {
            title: "Already have an account?",
            style: "",
            action: () => {}
        },
    ]

    return (
        <Form formItems={formItems} buttons={buttons}/>
    )
}

export default Register