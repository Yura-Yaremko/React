import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css';
import userPhoto from '../../../assets/images/user(blue).png'
// import userPhoto from '../../assets/images/user(blue).png'


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        // <div className={style.dialog}>
        //     <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png" />
        //     <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        // </div>

        <NavLink to={path} className={style.dialog} activeClassName={style.active}>
            {/* <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png" /> */}
            <img src={userPhoto} />

            <span>{props.name}</span>
        </NavLink>
    )
}

export default DialogItem;