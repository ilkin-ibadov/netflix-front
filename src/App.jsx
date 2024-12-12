import Login from "./login/Login"
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./homepage/Homepage"
import Register from "./register/Register";
import FilteredItems from "./homepage/filteredItems/FilteredItems";
import { useStore } from "zustand";
import { themeStore } from "./common/Store";
import NotFound from "./common/NotFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { accessToken, theme } = useStore(themeStore)

  return (
    <div className={`h-full min-h-screen w-full ${theme === "light" ? "bg-white" : "bg-zinc-500"} transition duration-300 ease-in-out`}>
      <BrowserRouter>
        <Routes>
          {accessToken && <Route path="/" >
            <Route index element={<Homepage />} />
            <Route path="filter" element={<FilteredItems />} />
          </Route>}

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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