import { createBrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import EditProfile from "./components/EditProfile";
import Requests from "./components/Requests";
import Connections from "./components/Connections";
import Premium from "./components/Premium";
import Chat from "./components/Chat";
import Error from "./components/Error";
import HeroSection from "./components/HeroSection";
import Blogs from "./components/Blogs";
import Events from "./components/Events";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "profile",
        element: < Profile />
      },
      {
        path: "feed",
        element: < Feed />
      },
      {
        path: "profile/edit",
        element: < EditProfile />
      },
      {
        path: "connections",
        element: < Connections />
      },
      {
        path: "requests",
        element: < Requests />
      },
      {
        path: "blogs",
        element: < Blogs />
      },
      {
        path: "events",
        element: < Events />
      },
      {
        path: "premium",
        element: < Premium />
      },
      {
        path: "chat/:targetUserId",
        element: < Chat />
      },
    ],
  },
  {
    path: '/error',
    element: <Error />
  },
  {
    path: '/hero',
    element: < HeroSection />
  }
]);


export default router;