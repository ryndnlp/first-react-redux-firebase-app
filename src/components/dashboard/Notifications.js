import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
    const renderNotifications = props.notifications && props.notifications.map(notif => 
        <li key={notif.id}>
            <span className="purple-text">{notif.user}</span>
            <span> {notif.content}</span>
            <div className="grey-text note-date">
                {moment(notif.time.toDate()).fromNow()}
            </div>
        </li>
    )
    return(
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        {renderNotifications}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Notifications;