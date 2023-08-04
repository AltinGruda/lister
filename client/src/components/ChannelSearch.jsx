import { useState } from "react";
import fetchChannels from "../utils/fetchChannels";
import { useQuery } from "@tanstack/react-query";

const ChannelSearch = ({ selectedItems, setSelectedItems }) => {
  const [searchChannelValue, setSearchChannelValue] = useState("");
  const [sendingValue, setSendingValue] = useState();

  const { isLoading, isError, data, error } = useQuery(
    ["channels", sendingValue],
    () => fetchChannels(sendingValue),
    {
      enabled: !!sendingValue, // Only fetch data when sendingValue is truthy
    }
  );

  // Function to move an item from the original list to the selected list
  const handleAddItem = (id, title) => {
    setSelectedItems((prevItems) => [...prevItems, { id, title }]);
  };

  // If there is an error, display the error message
  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <label htmlFor="search">Channel Search</label>
      <div className="w-full">
        <input
          type="text"
          name="search"
          placeholder="Search a youtube channel"
          className="input input-bordered input-error w-full max-w-lg"
          value={searchChannelValue}
          onChange={(e) => setSearchChannelValue(e.target.value)}
        />
        <input
          className="btn btn-info"
          onClick={() => setSendingValue(searchChannelValue)}
          type="button"
          value="search"
        />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data && !isError && <p>Select a channel:</p>}
            <ul>
              {data?.ids.map((id, index) => (
                <li key={id} id={id}>
                  {data.titles[index]}
                  <input
                    type="button"
                    onClick={() => handleAddItem(id, data.titles[index])}
                    value="Add"
                  />
                </li>
              ))}
            </ul>
          </>
        )}

        <ul>
          <h3>Selected:</h3>
          {selectedItems.map((item) => (
            <li key={item.id} id={item.id}>
              {item.title} (ID: {item.id})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ChannelSearch;
