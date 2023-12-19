import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItem } from "../constants/utils";

const SingleList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  console.log(id);

  const getSinglePost = async () => {
    const response = await getItem(id);
    console.log(response);
    setData(response);
  };

  useEffect(() => {
    getSinglePost();
  }, []);

  return (
    <div>
      <div className="container mt-4">
        <button
          onClick={() => navigate(-1)}
          style={{ float: "right" }}
          className="btn btn-info"
        >
          Back
        </button>
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">{data.title}</h5>
            <p class="card-text">{data.body}</p>
            {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleList;
