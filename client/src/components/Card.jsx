import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import createList from "../utils/createList";
const Card = () => {
  const [listParams, setListParams] = useState({
    title: "",
    description: "",
  });
  const result = useQuery(["create", listParams], createList);

  return (
    <div className="card w-96 bg-base-100 shadow-xl flex items-center flex-col">
      <form
        className="card-body items-center text-center"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            title: formData.get("title") ?? "",
            description: formData.get("description") ?? "",
          };
          setListParams(obj);
        }}
      >
        <p className="card-title">Title:</p>
        <input
          type="text"
          placeholder="Type your title here"
          className="input input-bordered input-error w-full max-w-xs"
          name="title"
        />
        <p className="card-title">Description:</p>
        <textarea
          className="textarea textarea-lg textarea-error"
          placeholder="Type your description here"
          name="description"
        ></textarea>
        <div className="card-actions">
          <button className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Card;
