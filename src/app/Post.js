import { Avatar } from '@mui/material'
import React,{forwardRef} from 'react'
import './post.css'
import InputOptions from './InputOptions';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const Post = forwardRef( ({ name, description, message, url },ref) => {
    const user = useSelector(selectUser)
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={user.url}>{user.displayName[0]}</Avatar>
                <div className="post__info">
                    <h2>
                        {name}
                    </h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOptions Icon={ThumbUpIcon} title="Like" color="gray" />
                <InputOptions Icon={ChatIcon} title="Comment" color="gray" />
                <InputOptions Icon={ShareIcon} title="Share" color="gray" />
                <InputOptions Icon={SendIcon} title="Send" color="gray" />
            </div>
        </div>
    )
})

export default Post
