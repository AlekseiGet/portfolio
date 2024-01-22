import { Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Galery from "../Pages/Galery";
import About from "../Pages/About";
import Error from "../Pages/Error";
import Contraindications from "../Pages/Contraindications";
import Cost from "../Pages/Cost";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Reviews from "../Pages/Reviews";
import Application from "../Pages/Application";

export const publicRoutes = [
    { exact: true, path: "/react_test", element: <Home />, key: "0.1"}, 
    { exact: true, path: "", element: <Home/>, key: "1" },
    { exact: true, path: "/galery", element: <Galery/>, key: "2" },
    { exact: true, path: "/about", element: <About/>, key: "3" },
    { exact: true, path: "/error", element: <Error/>, key: "4" },
    { exact: true, path: "/application", element: <Application/> , key: "5" },
    { exact: true, path: "/home", element: <Home />, key: "6" },
    { exact: true, path: "/privacypolicy", element: <PrivacyPolicy/> , key: "7" },
    { exact: true, path: "/reviews", element: <Reviews />, key: "8" },
    { exact: true, path: "/cost", element: <Cost/> , key: "9" },
    { exact: true, path: "/contraindications", element: <Contraindications/> , key: "10" }, 
    { exact: true, path: "*", element: <Navigate to="/error" replace />, key: "end" }   
]
    
