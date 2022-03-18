import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfil } from '../redux/actions';

const Profile = () => {
    const {user,loading}=useSelector(state=>state)
    console.log(user)
    const dispatch=useDispatch();
    useEffect(() => {
     dispatch(getProfil())
    }, [])
    
  return (
    <div>{
        loading?<h1>Loading ...</h1>:<div>{user&&<h1>{user.fullName}</h1>}</div>}</div>
  )
}

export default Profile