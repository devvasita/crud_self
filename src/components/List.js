import React, { useEffect, useState } from "react";
import { deleteItem, getItems } from "../constants/utils";
import { Link, useNavigate } from "react-router-dom";

const ListF = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getPosts = async () => {
    const response = await getItems();
    setData(response);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you Sure")) {
      await deleteItem(id);

      setData((prevData) => prevData.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <div className="container mt-4">
        <Link to="/create">
          <button className="btn btn-primary  float-end">Create</button>
        </Link>
        <div
          className="row"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          {data.length > 0 ? (
            data.map((item) => (
              <div className="col-4 p-2" key={item.id}>
                <div className="card" style={{ width: "100%", height: "100%" }}>
                  <div className="card-body" style={{ height: "100%" }}>
                    <h5 className="card-title">{item.title.slice(0, 20)}</h5>
                    <p className="card-text">{item.body.slice(0, 100)}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      margin: 10,
                    }}
                  >
                    <button
                      className="btn btn-danger "
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>

                    <button
                      className="btn btn-info  "
                      onClick={() => navigate(`/view/${item.id}`)}
                    >
                      View
                    </button>

                    <button
                      className="btn btn-info primary "
                      onClick={() => navigate(`/edit/${item.id}`)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">No Posts Found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ListF;
