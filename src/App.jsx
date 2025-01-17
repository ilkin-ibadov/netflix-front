import Landing from "pages/landing/Landing";
import SignUp from "pages/signup/SignUp";
import Login from "pages/login/Login";
import NotFound from "common/NotFound";
import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStore } from "zustand";
import { themeStore } from "common/Store.js"
import Homepage from "./pages/homepage/Homepage";
import Details from "./pages/details/Details";

const App = () => {
  const { token } = useStore(themeStore)

  return (
    <div className="max-w-[1440px] mx-auto h-full min-h-screen w-full transition duration-300 ease-in-out overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          {token &&
            <>
              <Route path="/home" element={<Homepage />} />
              <Route path="/details" element={<Details />} />
            </>
          }
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default App