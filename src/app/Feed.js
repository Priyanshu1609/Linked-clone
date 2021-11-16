import CreateIcon from '@mui/icons-material/Create';
import React, { useState, useEffect } from 'react'
import "./feed.css"
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './Firebase'
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import FlipMove from 'react-flip-move';

const Feed = () => {
    const user = useSelector(selectUser)
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')


    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(
                doc => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                )
            ))
        ))
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            url: user.url || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("");
    }


    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title='Photo' color='#70b5f9' />
                    <InputOptions Icon={SubscriptionsIcon} title='Video' color='#7fc15e' />
                    <InputOptions Icon={EventNoteIcon} title='Event' color='#e7a33e' />
                    <InputOptions Icon={CalendarViewDayIcon} title='Write Article' color='#fc9295' />

                </div>
            </div>
            {/* Posts */}
            <FlipMove>
                {posts.map(
                    ({ id, data: { name, description, message, url } }) => (
                        <Post
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            url={url}
                        />
                    ))}
            </FlipMove>
        </div>
    )
}

export default Feed
