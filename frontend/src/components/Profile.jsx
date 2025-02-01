import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import ProfileEdit from './ProfileEdit';

const Profile = () => {
  const user = useSelector((store) => store.user);
  return (
    <div>
      <ProfileEdit user={user} />
    </div>
  );
};

export default Profile;
