import React, { useEffect, useState } from "react";
import { createItem } from "../constants/utils";
import { useNavigate } from "react-router-dom";

const CreateList = () => {
  const [data, setData] = useState({
    id: new Date().getTime().toString(),
    title: "",
    body: "",
  });

  const navigate = useNavigate(); // Add the useNavigate hook

  const createPost = async () => {
    if (data.title.trim() === "" || data.body.trim() === "") {
      alert("Title and Body cannot be empty");
      return; // Don't proceed if validation fails
    }

    try {
      const response = await createItem(data);
      console.log("Create Item Response:", response);

      // Optionally, you can reset the form after a successful submission
      setData({
        id: new Date().getTime().toString(),
        title: "",
        body: "",
      });

      // Navigate to "/" after successful item creation
      alert("Item created successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error creating item:", error);
      // Handle error if necessary
    }
  };

  // useEffect(() => {}, [data]);

  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Body</label>
            <input
              type="text"
              className="form-control"
              id="body"
              onChange={(e) => setData({ ...data, body: e.target.value })}
            />
          </div>

          <button
            type="button"
            onClick={createPost}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateList;
