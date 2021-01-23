import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'

const Navbar = (props) => {

    // let navElements = props.state.items.map(n => <NavLink to={n.path} className={style.item} activeClassName={style.active}>
    //     <span>{n.title}</span>
    // </NavLink>)

    return (
        <nav className={style.nav}>
            {/* <div className={`${style.item} ${style.active}`}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
            </div> */}


            <NavLink to='/profile' className={style.item} activeClassName={style.active}>
                <span>Profile</span>
            </NavLink>
            <NavLink to='/dialogs' className={style.item} activeClassName={style.active}>
                <span>Messages</span>
            </NavLink>
            <NavLink to='/users' className={style.item} activeClassName={style.active}>
                <span>Users</span>
            </NavLink>
            <NavLink to='/news' className={style.item} activeClassName={style.active}>
                <span>News</span>
            </NavLink>
            <NavLink to='/music' className={style.item} activeClassName={style.active}>
                <span>Music</span>
            </NavLink>
            <NavLink to='/settings' className={style.item} activeClassName={style.active}>
                <span>Settings</span>
            </NavLink>


            {/* {navElements} */}


            {/* <div className={style.friends}>
                <div className={style.friendText}>
                    <span>Friends</span>
                </div>
                <div className={style.friend}>
                    <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png" />
                    <span>Andrey</span>
                </div>
                <div className={style.friend}>
                    <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png" />
                    <span>Sveta</span>
                </div>
                <div className={style.friend}>
                    <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png" />
                    <span>Sasha</span>
                </div>
            </div> */}
        </nav>
    )
}


export default Navbar;