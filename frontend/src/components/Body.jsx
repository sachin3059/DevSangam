import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect, useState } from "react";

import HeroSection from "./HeroSection";
import FAQAccordion from "./FaqAccordian";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation(); // Get current route

    const userData = useSelector((store) => store.user);
    const [showHero, setShowHero] = useState(true);

    const fetchUser = async () => {
        if (userData) return;
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/profile/view`, { withCredentials: true });
            dispatch(addUser(res?.data?.data));
            console.log(res?.data?.data);
        } catch (error) {
            if (error.response?.status === 401) {
                navigate("/");
            } else {
                console.log("Something went wrong!");
            }
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div>
            <Navbar />

            {location.pathname === "/" && (
                <>
                    {!userData && showHero && <HeroSection onHideHero={() => setShowHero(false)} />}
                    <FAQAccordion />
                </>
            )}

            <Outlet />
            <Footer />
        </div>
    );
};

export default Body;
