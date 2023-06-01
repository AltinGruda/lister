import { Link } from "react-router-dom";
const List = ({ list }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-2">
      {list?.map((item) => (
        <div key={item._id}>
          <Link to={`/list/${item._id}`}>
            <div className="card w-96 bg-neutral shadow-xl transition duration-300 ease-in-out hover:scale-110">
              <div className="card-body flex items-center">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default List;
