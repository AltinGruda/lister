import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import ytLogo from "../assets/yt-logo.avif";
// not named well, shouldn't be list item, this is the playlist itself
const ListItem = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Navbar />
      <h2>List Item Name</h2>
      <p>List Item Description</p>
      <div className="grid xl:gap-5 xl:grid-cols-5 lg:gap-6 lg:grid-cols-4 md:gap-1 md:grid-cols-3 sm:grid-cols-2 items-center place-items-center">
        {/* method 2 */}
        <div className="card w-64 bg-base-100 shadow-xl">
          <img src={ytLogo} alt="" />
          <div className="card overflow-hidden p-4">
            <header>
              <div className="flex gap-2">
                <div>
                  <div className="font-bold">Channel Name</div>
                  <div>Video name - could be custom url</div>
                  <div>15k subscribers</div>
                </div>
              </div>
            </header>
            <footer className="card-footer mt-4 flex justify-end"></footer>
          </div>
        </div>
        {/* method 2 */}
        <div className="card w-64 bg-base-100 shadow-xl">
          <img src={ytLogo} alt="" />
          <div className="card overflow-hidden p-4">
            <header>
              <div className="flex gap-2">
                <div>
                  <div className="font-bold">Channel Name</div>
                  <div>Video name - could be custom url</div>
                  <div>15k subscribers</div>
                </div>
              </div>
            </header>
            <footer className="card-footer mt-4 flex justify-end"></footer>
          </div>
        </div>
        {/* method 2 */}
        <div className="card w-64 bg-base-100 shadow-xl">
          <img src={ytLogo} alt="" />
          <div className="card overflow-hidden p-4">
            <header>
              <div className="flex gap-2">
                <div>
                  <div className="font-bold">Channel Name</div>
                  <div>Video name - could be custom url</div>
                  <div>15k subscribers</div>
                </div>
              </div>
            </header>
            <footer className="card-footer mt-4 flex justify-end"></footer>
          </div>
        </div>
        {/* method 2 */}
        <div className="card w-64 bg-base-100 shadow-xl">
          <img src={ytLogo} alt="" />
          <div className="card overflow-hidden p-4">
            <header>
              <div className="flex gap-2">
                <div>
                  <div className="font-bold">Channel Name</div>
                  <div>Video name - could be custom url</div>
                  <div>15k subscribers</div>
                </div>
              </div>
            </header>
            <footer className="card-footer mt-4 flex justify-end"></footer>
          </div>
        </div>
        {/* method 2 */}
        <div className="card w-64 bg-base-100 shadow-xl">
          <img src={ytLogo} alt="" />
          <div className="card overflow-hidden p-4">
            <header>
              <div className="flex gap-2">
                <div>
                  <div className="font-bold">Channel Name</div>
                  <div>Video name - could be custom url</div>
                  <div>15k subscribers</div>
                </div>
              </div>
            </header>
            <footer className="card-footer mt-4 flex justify-end"></footer>
          </div>
        </div>
        {/* method 2 */}
        <div className="card w-64 bg-base-100 shadow-xl">
          <img src={ytLogo} alt="" />
          <div className="card overflow-hidden p-4">
            <header>
              <div className="flex gap-2">
                <div>
                  <div className="font-bold">Channel Name</div>
                  <div>Video name - could be custom url</div>
                  <div>15k subscribers</div>
                </div>
              </div>
            </header>
            <footer className="card-footer mt-4 flex justify-end"></footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
