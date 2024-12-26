import { useNavigate } from "react-router"
import { useState } from "react"

const EmailInput = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  return (
    <div className="flex items-center h-[55px] w-[580px] mx-auto mt-5 gap-2">
      <input value={email} onChange={(e) => {
        setEmail(e.target.value)
      }} className="w-full bg-transparent border-[1px] border-zinc-400 h-full px-4 rounded-[4px] text-white" type="text" placeholder="Enter email" />
      <button onClick={() => {
        navigate("/signup", {state: {email: email}})
      }} className="min-w-[200px] flex items-center justify-center bg-[#e50914] hover:bg-[#ce272ffb] text-white font-semibold text-xl h-full px-4 pr-6 gap-4 rounded-[4px]">Get Started
        <svg className="w-[12px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
      </button>
    </div>
  )
}

export default EmailInput