const Card = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl flex items-center">
      <figure className="px-10 pt-10">
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-error w-full max-w-xs"
        />
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
