import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const ShowParts = ({ part }) => {
  const { name, minQuantity, img, description, availableQuantity, price } =
    part;
  return (
    <div class="card w-lg-max shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div class="card-body p-4">
        <h2 class="card-title text-center text-secondary flex align-center justify-center">
          {name}
        </h2>
        <p class="text-secondary">{description}</p>
        <br />
        <div class="card-actions justify-center">
          <PrimaryButton>Purchase</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ShowParts;
