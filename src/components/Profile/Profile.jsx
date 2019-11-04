import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
      <div className={s.content}>
        <div>
          <img className="main-photo" src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="img"></img>
        </div>
        <div>
          ava + description
        </div>
        <MyPosts />
      </div>
    );
}

export default Profile;