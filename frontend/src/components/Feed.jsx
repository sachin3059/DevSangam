import axios from "axios";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";

const Feed = () => {
    const dispatch = useDispatch();
    const feed = useSelector((store) => store.feed);

    const fetchFeed = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/feed`, { withCredentials: true });
            dispatch(addFeed(res?.data?.data));
            console.log(res?.data?.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchFeed();
    }, []);

    if (!feed || feed.length === 0) 
        return <div className="text-center text-lg font-semibold mt-6">No feed Present</div>;

    return (
        <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
            {feed.map((user, index) => (
                <div
                    key={user._id || index}
                    className="h-screen flex justify-center items-center snap-center px-4 py-2"
                >
                    <Card user={user} />
                </div>
            ))}
        </div>
    );
};

export default Feed;
