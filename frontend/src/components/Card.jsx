import axios from "axios";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const Card = ({ user }) => {
    const { firstName, lastName, profilePicture, _id, bio, skills, socialLinks } = user;
    const dispatch = useDispatch();

    const handleSendRequest = async (status, userId) => {
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/request/send/${status}/${userId}`,
                {},
                { withCredentials: true }
            );
            console.log(res);
            dispatch(removeFeed(userId));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-80 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                {/* Profile Picture - Covers Top */}
                <img 
                    className="w-full h-56 object-cover"
                    src={profilePicture || "https://i.pinimg.com/736x/8d/ff/49/8dff49985d0d8afa53751d9ba8907aed.jpg"} 
                    alt="photo" 
                />

                <div className="p-6 text-center">
                    {/* Name & Bio */}
                    <h2 className="font-bold text-xl">{firstName} {lastName}</h2>
                    <p className="text-gray-600 text-sm">{bio || "No bio available."}</p>

                    {/* Skills */}
                    <div className="mt-4">
                        <h3 className="text-sm font-semibold text-gray-700">Skills</h3>
                        <div className="flex flex-wrap justify-center mt-2">
                            {skills?.length > 0 ? (
                                skills.map((skill, index) => (
                                    <span key={index} className="bg-gray-200 text-xs text-gray-700 px-2 py-1 m-1 rounded-md">
                                        {skill}
                                    </span>
                                ))
                            ) : (
                                <p className="text-gray-500 text-xs">No skills added.</p>
                            )}
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-4 mt-4 text-gray-600">
                        {socialLinks?.github && (
                            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-2xl hover:text-black transition" />
                            </a>
                        )}
                        {socialLinks?.linkedin && (
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl hover:text-blue-600 transition" />
                            </a>
                        )}
                        {socialLinks?.twitter && (
                            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-2xl hover:text-blue-400 transition" />
                            </a>
                        )}
                        {socialLinks?.portfolio && (
                            <a href={socialLinks.portfolio} target="_blank" rel="noopener noreferrer">
                                <FaGlobe className="text-2xl hover:text-green-600 transition" />
                            </a>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between mt-6">
                        <button 
                            className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition cursor-pointer"
                            onClick={() => handleSendRequest("interested", _id)}
                        >
                            Interested
                        </button>
                        <button 
                            className="px-4 py-2 rounded-md bg-gray-500 text-white font-medium shadow-md hover:bg-gray-600 transition cursor-pointer"
                            onClick={() => handleSendRequest("ignored", _id)}
                        >
                            Ignore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
