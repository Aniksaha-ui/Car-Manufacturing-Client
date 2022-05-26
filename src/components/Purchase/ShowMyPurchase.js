import React from "react";

const ShowMyPurchase = () => {
  return (
    <tr key={order._id}>
      <th>{index + 1}</th>
      <td>{order.username}</td>
      <td>{order.name}</td>
      <td>{order.quantity}</td>
      <td>{order.price}</td>
      <td>{order.quantity * order.price}</td>
      <td>{order.phone}</td>
      <td>
        {order.price && !order.paid && (
          <Link to={`/dashboard/payment/${order._id}`}>
            <button className="btn btn-xs btn-success">payment</button>
          </Link>
        )}
        {order.price && order.paid && (
          <div>
            <p>
              Transaction id:{" "}
              <span className="text-success">{order.transactionId}</span>
              (paid)
            </p>
          </div>
        )}
      </td>
    </tr>
  );
};

export default ShowMyPurchase;
