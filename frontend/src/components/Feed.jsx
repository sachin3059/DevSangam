import React, { useEffect } from 'react'
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice';
import UserCard from './userCard';

const Feed = () => {
  const feed = useSelector( (store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if(feed) return ;
    try {
      const res = await axios.get( BASE_URL + "/feed", {withCredentials: true});
      dispatch(addFeed(res.data));
      //console.log(res?.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect( () => {
    getFeed();
  }, []);


  return feed && (
    <div>
      <UserCard user={feed?.data[0]} />
    </div>
  )
}

export default Feed
