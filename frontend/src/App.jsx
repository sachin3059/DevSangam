import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import ProfileEdit from "./components/ProfileEdit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/profile/edit" element={<ProfileEdit/>} />
          <Route path="/logout" element={<Logout/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
