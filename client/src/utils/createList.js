import axios from "axios";
import toast from "react-hot-toast";
async function createList(data) {
  const { title, description } = data;

  const res = axios.post(`http://localhost:5000/createList`, {
    title,
    description,
  });

  toast.promise(res, {
    loading: "Loading...",
    success: "Everything went smoothly.",
    error: "Uh oh, there was an error!",
  });
  // the reason im not doing await on line 6 where i call axios.post is to make toast work
  await res;
}

export default createList;
