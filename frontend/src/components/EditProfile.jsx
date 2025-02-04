import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";

const EditProfile = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [achievements, setAchievements] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [portfolio, setPortfolio] = useState("");
 
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setProfilePicture(user.profilePicture);
      setGender(user.gender);
      setBio(user.bio);
      setSkills(user.skills);
      setExperience(user.experience);
      setAchievements(user.achievements);
      setGithub(user.socialLinks.github);
      setLinkedin(user.socialLinks.linkedin);
      setTwitter(user.socialLinks.twitter);
      setPortfolio(user.socialLinks.portfolio);
    }
  }, [user]);

  const saveProfile = async () => {
    try {

  
      const res = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/profile/edit`,
        {
          firstName,
          lastName,
          profilePicture,
          gender,
          bio,
          skills,
          experience,
          achievements,
          socialLinks: {
            github,
            linkedin,
            twitter,
            portfolio,
          },
        } ,
        {
        withCredentials: true,
      });
      console.log(res);
  
      dispatch(addUser(res?.data?.data));
      alert("User profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  

  if (!user) return <div><h1>Loading...</h1></div>;

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 gap-6">
        <div className="flex flex-col items-center gap-4 w-1/3">
          <img className="rounded-2xl" src={profilePicture} />
          <input type="url" className="border px-3 py-2 rounded-md" placeholder="profilePhotto URL" value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} />
        </div>
        <div className="flex flex-col w-full gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" className="border px-3 py-2 rounded-md" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" className="border px-3 py-2 rounded-md" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <select className="border px-3 py-2 rounded-md" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
          
          <textarea className="border px-3 py-2 rounded-md" rows="3" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)}></textarea>   
          <input type="text" className="border px-3 py-2 rounded-md" placeholder="Skills (comma separated)" value={skills} onChange={(e) => setSkills(e.target.value)} />
           
          <div className="grid grid-cols-2 gap-4">
            <input type="url" className="border px-3 py-2 rounded-md" placeholder="LinkedIn" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
            <input type="url" className="border px-3 py-2 rounded-md" placeholder="GitHub" value={github} onChange={(e) => setGithub(e.target.value)} />
            <input type="url" className="border px-3 py-2 rounded-md" placeholder="Twitter" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
            <input type="url" className="border px-3 py-2 rounded-md" placeholder="Portfolio" value={portfolio} onChange={(e) => setPortfolio(e.target.value)} />
          </div>
         
          <textarea className="border px-3 py-2 rounded-md" rows="3" placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)}></textarea>
          <textarea className="border px-3 py-2 rounded-md" rows="3" placeholder="Achievements" value={achievements} onChange={(e) => setAchievements(e.target.value)}></textarea>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer" onClick={saveProfile}>Save Profile</button>
         
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
