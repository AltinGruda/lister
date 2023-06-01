import axios from "axios";
async function createList({ queryKey }) {
  const { title, description } = queryKey[1];

  const res = await axios.post(`http://localhost:5000/createList`, {
    title,
    description,
  });

  if (!res.ok) {
    throw new Error("Error posting data in createList.js");
  }

  return res.json();
}

export default createList;
