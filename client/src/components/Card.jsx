import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import createList from "../utils/createList";
import ChannelSearch from "./ChannelSearch";

const Card = () => {
  const [listParams, setListParams] = useState({
    title: "",
    description: "",
  });
  const [selectedItems, setSelectedItems] = useState([]);
  const { mutate, isLoading } = useMutation(createList, listParams);
  console.log("selected items:", selectedItems);
  return (
    // <div className="card w-96 bg-base-100 shadow-xl flex items-center flex-col">
    <form
      className="card-body items-center text-center w-1/3"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {
          title: formData.get("title") ?? "",
          description: formData.get("description") ?? "",
          channel: selectedItems,
        };
        setListParams(obj);
        mutate(obj);
      }}
    >
      <p className="card-title">Title:</p>
      <input
        type="text"
        placeholder="Type your title here"
        className="input input-bordered input-error w-full max-w-lg"
        name="title"
      />
      <p>Description:</p>
      <textarea
        className="textarea textarea-lg textarea-error w-full max-w-lg resize-none"
        placeholder="Type your description here"
        name="description"
      ></textarea>

      {/* Channels cards shown */}
      {/* <select name="channelIds" multiple bind:value={channelIdList} class="hidden">
        {#each channelIdList as channelId}
          <option value={channelId}>{channelId}</option>
        {/each}
      </select> */}

      {/* Search channels */}
      <ChannelSearch
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />

      <div className="card-actions">
        <button className="btn btn-success" disabled={isLoading}>
          Create
        </button>
      </div>
    </form>
    // </div>
  );
};

export default Card;
