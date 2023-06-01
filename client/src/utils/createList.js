import axios from "axios";
async function createList(data) {
  const { title, description } = data;

  await axios.post(`http://localhost:5000/createList`, {
    title,
    description,
  });
}

export default createList;
