import { useEffect, useState } from "react"
import FormInput from "./FormInput"

const Form = ({ formItems, formButtons }) => {
    const [formData, setFormData] = useState({})

    const handleInputChange = (name, value) => {
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])

    return (
        <form className="flex flex-col gap-5 max-w-[400px] mx-auto mt-12">
            {
                formItems.map(item => <FormInput label={item.label} name={item.name} type={item.type} placeholder={item.placeholder} handleInputChange={handleInputChange} />)
            }

            {
                formButtons.map(button => <button onClick={button.action} className={button.style}>{button.title}</button>)
            }
        </form>
    )
}

export default Form