import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import fetchListVideos from "../utils/fetchListVideos";
import { useQuery } from "@tanstack/react-query";
import Modal from "react-modal";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";
dayjs.extend(relativeTime);

Modal.setAppElement("#root"); // Specify the root element for accessibility

const ListItem = () => {
  const { id } = useParams();
  console.log(id);
  const { isLoading, isError, data, error } = useQuery(
    ["videos", id],
    fetchListVideos
  );

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };

  if (isLoading) return <div>Loading Videos...</div>;
  if (isError) return <div>{error.message}</div>;
  console.log(data);
  return (
    <div>
      <Navbar />
      {/* {data.map((video, index) => (
        <div key={`${video.videoId} ${index}`}>{video.title}</div>
      ))} */}
      <h2>List Item Name</h2>
      <p>List Item Description</p>
      <div className="grid xl:gap-5 xl:grid-cols-5 lg:gap-6 lg:grid-cols-4 md:gap-1 md:grid-cols-3 sm:grid-cols-2 items-center place-items-center">
        {/* method 2 */}
        {data.map((video, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div
            key={`${video.videoId} ${index}`}
            className="card w-64 bg-base-100 shadow-xl"
            onClick={() => openModal(video)} // Open modal on click
          >
            <img src={video.videoThumbnail} alt="" />
            <div className="card overflow-hidden p-4">
              <header>
                <div className="flex gap-2">
                  <div>
                    <div className="font-bold">{video.channelName}</div>
                    <div>{video.title}</div>
                    <div>{dayjs(video.publishedAt).fromNow()}</div>
                  </div>
                </div>
              </header>
              <footer className="card-footer mt-4 flex justify-end"></footer>
            </div>
          </div>
        ))}

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Video Modal"
        >
          {selectedVideo && (
            <iframe
              width="95%" // Set the width of the iframe to 100%
              height="95%" // Set the height of the iframe to 100%
              src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
              title={selectedVideo.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    </div>
  );
};

export default ListItem;
