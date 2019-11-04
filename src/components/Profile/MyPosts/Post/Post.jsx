import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  

    return (
    
        <div className={s.item}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQniRmXweR-COfLlNYhxx_DC6XrF6WAP3fbqVCwKBfIM6POmJXE"></img> 
          {props.message}
            <div>
              <span><span className="like">{props.like}</span> like</span>
            </div>
        </div>         
    );
}

export default Post;