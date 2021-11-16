import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from './Firebase';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
const Header = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const logoutApp = () =>{
        dispatch(logout({

        }))
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__left">
            <img src="https://img.icons8.com/fluency/40/000000/linkedin.png"/>

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" name="search" id="" />
                </div>

            </div>
            <div className="header__right">
                <Headeroptions title="Home" Icon = {HomeIcon}/>
                <Headeroptions title = "Network" Icon = {SupervisorAccountIcon}/>
                <Headeroptions title="Jobs" Icon = {BusinessCenterIcon}/>
                <Headeroptions title="Chat" Icon = {ChatIcon}/>
                <Headeroptions title="Notifications" Icon = {NotificationsIcon}/>
                <Headeroptions onClick = {logoutApp} title="Logout" avatar={true} />
            </div>

        </div>
    )
}

export default Header
