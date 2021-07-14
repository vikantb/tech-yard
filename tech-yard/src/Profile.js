import React from 'react'
import './Profile.css'
import { selectUser } from './features/userSlice';
import {  useSelector } from 'react-redux' ;

function Profile() {
    const user=useSelector(selectUser) ;

    return (
        <div className="container profile">
            <div className="row profile__photo">
                <div className="col">
                    <img src={user.photo} alt="OOPs !" className="img img-thumbnail"/>
                </div> 
            </div> 
            <div className="profile__name">[{user.displayName}]</div>

        </div>
    )
}

export default Profile
