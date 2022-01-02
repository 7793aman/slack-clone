import React, { useEffect, useState } from "react";
import './Chat.css'
import { useParams } from 'react-router-dom'
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import { db } from "./firebase";
import Message from './Message.js'
import ChatInput from "./ChatInput";
import "./ChatInput.css"


function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMesssages, setRoomMessages] = useState();


    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(
                snapshot => (setRoomDetails(snapshot.data())));

            db.collection('rooms').doc(roomId).collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot(
                    (snapshot) => (
                        setRoomMessages(
                            snapshot.docs.map(doc => (
                                doc.data()
                            ))
                        )
                    )
                )
        }

    }, [roomId]);

    return (

        <div className="chat">
            {/* <h2>You are in the {roomId} room</h2> */}
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>

                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
                {
                    roomMesssages?.map(message => (
                        <Message
                            message={message?.message}
                            timestap={message?.timestamp}
                            user={message?.user}
                            userImage={message?.userImage}
                        />
                    ))
                }
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat;