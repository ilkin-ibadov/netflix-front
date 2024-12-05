import FormInput from "../common/FormInput"
import { useEffect, useState } from "react"

const Form = ({ formItems, buttons }) => {
    const [formData, setFormData] = useState({})

    const handleInputChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])


    return (
        <form className="flex flex-col gap-5 max-w-[400px] mx-auto border p-5 mt-12 rounded-md" action="">
            {
                formItems.map(item => <FormInput handleInputChange={handleInputChange} name={item.name} label={item.label} type={item.type} placeholder={item.placeholder} />)
            }

            {
                buttons.map(button => <button onClick={button.action} className={button.style}>{button.title}</button>)
            }
        </form>
    )
}

export default Form