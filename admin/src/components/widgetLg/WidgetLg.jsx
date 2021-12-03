import './widgetLg.css';
import React, { useState, useEffect } from 'react';

import { userRequest } from '../../requestMethods';
import { format } from 'timeago.js';

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get('orders');
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  return (
    <div className="widgetLg">
      {console.log(orders)}
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Order ID</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((order) => (
          <tr key={order._id} className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">{order._id}</span>
            </td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">${order.amount}</td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
