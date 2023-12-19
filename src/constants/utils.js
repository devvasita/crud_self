const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getItems = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  return response.json();
};

export const getItem = async (id) => {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  return response.json();
};

export const createItem = async (data) => {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: `POST`,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const updateItem = async (id, data) => {
  const response = await fetch(`${BASE_URL}/posts/${id} `, {
    method: `PUT`,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deleteItem = async (id) => {
  const respone = await fetch(`${BASE_URL}/posts/${id}`, {
    method: "DELETE",
  });
  return respone.json();
};
