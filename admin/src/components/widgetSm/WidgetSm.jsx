import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import { useEffect } from 'react';
import React, { useState } from 'react';
import { userRequest } from '../../requestMethods';

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get('/users/?new=true');
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Users</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li key={user._id} className="widgetSmListItem">
            <img
              src="https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">
                {user.firstName + ' ' + user.lastName}
              </span>
              <span className="widgetSmUserTitle">{user.email}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
