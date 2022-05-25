import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { signOut } from "firebase/auth";

const Purchase = () => {
  const param = useParams();
  const id = param.id;
  const [user] = useAuthState(auth);
  const [parts, setParts] = useState({});
  const navigate = useNavigate();
  const nameRef = useRef("");
  const quantity = useRef("");

  useEffect(() => {
    const getParts = async () => {
      const email = user.email;
      const url = `http://localhost:4000/parts/${id}?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        setParts(data);
      } catch (error) {
        // console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };

    getParts();
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div class="flex justify-center mt-20">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
          <h2 class="card-title">
            Are You want to purchase <br /> {parts.name}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="form-control w-96 max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={parts.name}
                placeholder=""
                className="input input-bordered w-full max-w-xs"
                disabled="true"
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
                min={parts.minQuantity}
              />
            </div>

            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="Sign Up"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
