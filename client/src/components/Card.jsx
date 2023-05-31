const Card = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl flex items-center">
      <div className="card-body items-center text-center">
        <p className="card-title">Title:</p>
        <input
          type="text"
          placeholder="Type your title here"
          className="input input-bordered input-error w-full max-w-xs"
        />
        <p className="card-title">Description:</p>
        <textarea
          className="textarea textarea-lg textarea-error"
          placeholder="Type your description here"
        ></textarea>
        <div className="card-actions">
          <button className="btn btn-primary">Create</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
