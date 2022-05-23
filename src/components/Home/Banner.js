import React from "react";
import banner from "../../assets/banner/banner.jpg";
import PrimaryButton from "../Shared/PrimaryButton";
const Banner = () => {
  return (
    <div className="hero lg:bg-light">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          width="350"
          src={banner}
          className=" rounded-lg shadow-2xl mt-3"
          alt=""
        />
        <div>
          <h1 className="text-2xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
            commodi?
          </h1>
          <p className="py-6 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ad cum
            quod eos ipsam impedit, hic fugit doloremque, provident distinctio
            autem quo nam nisi fugiat unde sint! Consequuntur nemo asperiores
            harum doloremque magni cupiditate, sed voluptatibus? Harum amet
            fugiat ex, cumque ratione quod adipisci, odit consectetur asperiores
            minus pariatur ipsum.
          </p>
          <PrimaryButton>Get Ready</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
