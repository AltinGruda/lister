const List = ({ list }) => {
  return (
    <div className="flex items-center justify-center">
      {list?.map((item) => (
        <div key={item._id}>
          <div className="card w-96 bg-neutral shadow-xl">
            <div className="card-body flex items-center">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
