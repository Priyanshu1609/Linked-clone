import { Avatar } from '@mui/material'
import React from 'react'
import "./headerOption.css"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const Headeroptions = ({ avatar, Icon, title, onClick }) => {
    const user = useSelector(selectUser);
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}

            {avatar && (<Avatar src={user?.url} sx={{ width: 24, height: 24 }}>{user?.displayName[0]}</Avatar>)}
            <h6 className="headerOption__style">{title}</h6>
        </div>
    )
}

export default Headeroptions
