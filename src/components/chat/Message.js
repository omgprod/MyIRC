import React from 'react';

const Message = (props) => {
    return (
        <div className="message">
            <div className="username">

                <b>{props.message.username}</b>
                <b> le </b>
                <b>
                    {new Intl.DateTimeFormat('fr-FR', {
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit'
                    }).format()}
                </b> :
            </div>

            <div className="data">
                {props.message.message.type === 'message' ? (
                    <div className="text">
                        {props.message.message.text}
                    </div>
                ) : (
                    <div className="image">
                        <img src={props.message.message.url} alt=""/>
                    </div>
                )}
            </div>

        </div>
    )
};

export default Message;