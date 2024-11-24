import React, { useEffect, useState } from "react";
import axios from "axios";

const MusicGrid = () => {
  const [musics, setMusics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMusics = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/musics"); // Replace with your API endpoint
        setMusics(response.data.musics || []); // Assuming the response contains 'musics' array
        setLoading(false);
      } catch (error) {
        console.error("Error fetching musics:", error);
        setLoading(false);
      }
    };

    fetchMusics();
  }, []);

  if (loading) {
    return <div className="text-center mt-5 text-lg font-medium">Loading music...</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Available Music Tracks</h1>
      {musics.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {musics.map((music, index) => (
            <div
              key={index}
              className="music-item p-4 bg-gray-100 border border-gray-200 rounded-md shadow-sm hover:shadow-md"
            >
              <a href={`http://localhost:3000${music}`} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://picsum.photos/seed/cool/150" // Placeholder image for now
                  alt={`Track ${index + 1}`}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h4 className="text-lg font-medium mt-2">{music.split("/").pop().replace(".mp3", "")}</h4>
              </a>

              {/* Music Player */}
              <div className="mt-3">
                <audio controls className="w-full mt-2">
                  <source src={`http://localhost:3000${music}`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg mt-5">No music available</div>
      )}
    </div>
  );
};

export default MusicGrid;
