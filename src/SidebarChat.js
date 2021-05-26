import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';

function SidebarChat({ addNewChat}) {
    const [seed, setseed] = useState('');

    useEffect(() => {
      setseed (Math.floor(Math.random() *5000))
    }, [])

    const createChat = () => {
        const roomName= prompt ("Please Enter  name for chat");

        if (roomName) {
            //do some  database stuff
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
       <div className="sidebarChat" 
        onclick= {createChat} >
        <h2> Add New Chat</h2>
       </div>
    );
}

export default SidebarChat