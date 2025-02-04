import { useSelector } from "react-redux";
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const Profile = () => {
    const user = useSelector((store) => store.user);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <div className="w-80 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                {/* Profile Picture - Covers Top Half */}
                <img 
                    className="w-full h-56 object-cover"
                    src={user?.profilePicture || "https://i.pinimg.com/736x/8d/ff/49/8dff49985d0d8afa53751d9ba8907aed.jpg"} 
                    alt="profile" 
                />

                <div className="p-6 text-center">
                    {/* Name & Bio */}
                    <h2 className="font-bold text-xl">{user?.firstName} {user?.lastName}</h2>
                    <p className="text-gray-600 text-sm mt-2">{user?.bio || "No bio available."}</p>

                    {/* Skills */}
                    <div className="mt-4">
                        <h3 className="text-sm font-semibold text-gray-700">Skills</h3>
                        <div className="flex flex-wrap justify-center mt-2">
                            {user?.skills?.length > 0 ? (
                                user.skills.map((skill, index) => (
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
                    <div className="flex justify-center gap-4 mt-6 text-gray-600">
                        {user?.socialLinks?.github && (
                            <a href={user?.socialLinks?.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-2xl hover:text-black transition" />
                            </a>
                        )}
                        {user?.socialLinks?.linkedin && (
                            <a href={user?.socialLinks?.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl hover:text-blue-600 transition" />
                            </a>
                        )}
                        {user?.socialLinks?.twitter && (
                            <a href={user?.socialLinks?.twitter} target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-2xl hover:text-blue-400 transition" />
                            </a>
                        )}
                        {user?.socialLinks?.portfolio && (
                            <a href={user?.socialLinks?.portfolio} target="_blank" rel="noopener noreferrer">
                                <FaGlobe className="text-2xl hover:text-green-600 transition" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
