import React from 'react';
import "./ChatMessage.scss";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ChatMessage() {
  return (
    <div className='message'>
        <AccountCircleIcon/>
        <div className="messageInfo">
            <h4>
                川島ちゃんねる
                <span className='messageTimestamp'>2024/1/13</span>
            </h4>
            <p>メッセージ本文</p>
        </div>
    </div>
  )
}

export default ChatMessage