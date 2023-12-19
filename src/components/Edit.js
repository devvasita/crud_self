import React, { useEffect, useState } from "react";
import { updateItem } from "../constants/utils";
import { useNavigate, useParams } from "react-router-dom";
import { getItem } from "../constants/utils";

const EditList = () => {
  const [data, setData] = useState({
    id: new Date().getTime().toString(),
    title: "",
    body: "",
  });

  const navigate = useNavigate(); // Add the useNavigate hook

  const { id } = useParams();

  const editPost = async () => {
    if (data.title.trim() === "" || data.body.trim() === "") {
      alert("Title and Body cannot be empty");
      return; // Don't proceed if validation fails
    }

    try {
      const response = await updateItem(id, data);
      console.log("Create Item Response:", response);

      // Optionally, you can reset the form after a successful submission
      setData({
        id: new Date().getTime().toString(),
        title: "",
        body: "",
      });

      // Navigate to "/" after successful item creation
      alert("Item updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error creating item:", error);
      // Handle error if necessary
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getItem(id);
        if (response && response.title && response.body) {
          setData((prevData) => ({
            ...prevData,
            title: response.title,
            body: response.body,
          }));
          console.log(response);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [id]);

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
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Body</label>
            <textarea
              className="form-control"
              id="body"
              value={data.body}
              onChange={(e) => setData({ ...data, body: e.target.value })}
              rows={4}
            />
          </div>

          <button type="button" onClick={editPost} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default EditList;
