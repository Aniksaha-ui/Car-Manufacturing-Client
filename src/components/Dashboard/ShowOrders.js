import React from "react";

const ShowOrders = ({ purchase, refetch, setOrderDelete }) => {
  const {
    _id,
    name,
    quantity,
    username,
    phone,
    email,
    price,
    address,
    paid,
    transactionId,
  } = purchase;

  const handleUpdateStatus = () => {
    console.log("Update");
  };
  // console.log(purchase);

  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{quantity * price}</td>
      <td>
        {price && !paid && (
          <>
            <label
              onClick={() => setOrderDelete(purchase)}
              for="delete-confirm-modal"
              class="btn btn-xs btn-error"
            >
              Delete
            </label>

            <button
              className="btn btn-xs btn-error"
              onClick={handleUpdateStatus}
            >
              Update
            </button>
          </>
        )}
        {price && paid && (
          <div>
            <p>
              Transaction id:{" "}
              <span className="text-success">{transactionId}</span>
              (paid)
            </p>
          </div>
        )}
      </td>
    </tr>
  );
};

export default ShowOrders;
