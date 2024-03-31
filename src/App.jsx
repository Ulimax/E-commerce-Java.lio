import { useState } from "react"
import { useRoutes, BrowserRouter } from "react-router-dom";
import { BackpackProvider } from "./context/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbarr } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { ContactForm } from "./components/contact_form/ContactForm";
import { NotFound } from "./components/not_found/NotFound";
import "./App.css"

const Routes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/contact-form", element: <ContactForm /> },
    { path: "/*", element: <NotFound /> }
  ])
}

const App = () => {
  return (
    <>
     <BackpackProvider>
      <BrowserRouter>
        <Navbarr />
        <Routes />
      </BrowserRouter>
     </BackpackProvider>
    </>
  )
}

export default App
