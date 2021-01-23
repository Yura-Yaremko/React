import React from 'react';
import style from './Post.module.css'
import userPhoto from '../../../../assets/images/user(blue).png'


const Post = (props) => {
    return (
        <div className={style.item}>
            <div className={style.post}>
                <img src={userPhoto} />

                <div className={style.postText}>
                    {props.message}
                </div>
            </div>
            <div className={style.postLikes}>
                <span>Like: {props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post;