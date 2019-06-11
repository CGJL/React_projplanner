import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
    const {notifications} = props
    return (
        <div className="section">
            <div className="card white z-depth-0">
                <div className="card-content yellow lighten-4 card-panel hoverable">
                    <span className="card-title"><b><blockquote>Notifications</blockquote></b></span>
                    <ul className="notifications">
                        {notifications && notifications.map(notif => {
                            return (
                                <li key={notif.id}>
                                    <span className="red-text">{notif.user} </span>
                                    <span>{notif.content}</span>
                                    <div className="black-text note-date">
                                        {moment(notif.time.toDate()).fromNow()}
                                    </div>
                                     </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;