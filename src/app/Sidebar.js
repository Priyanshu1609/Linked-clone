import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import "./sidebar.css"

const Sidebar = () => {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar" >
            <div className="sidebar__top">
                <img src="https://i.pinimg.com/564x/a3/af/35/a3af356c5d57a46a1abdf37421ce3ac3.jpg" alt="" />
                <Avatar className="sidebar__avatar" src={user.url}>
                    {user.displayName[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed You</p>
                    <p className="sidebar__statNumber">2456</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2165</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                
                {recentItem("reactjs")}
                {recentItem('mongo db')}
                {recentItem('express js')}
                {recentItem('node js')}
                {recentItem('mern stack')}
            </div>
        </div>
    )
}

export default Sidebar
