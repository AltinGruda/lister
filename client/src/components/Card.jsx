import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import createList from "../utils/createList";
const Card = () => {
  const [listParams, setListParams] = useState({
    title: "",
    description: "",
  });
  const { mutate, isLoading, isError, isSuccess } = useMutation(
    createList,
    listParams
  );

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
          mutate(obj);
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
          <button className="btn btn-primary" disabled={isLoading}>
            Create
          </button>
        </div>
      </form>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error occurred</div>}
      {isSuccess && <div>Success!</div>}
    </div>
  );
};

export default Card;
