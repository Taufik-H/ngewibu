import "./App.css";
// import Button from "./components/button";
import { useState } from "react";
import Img from "./components/images/1.gif";
import api from "./helpers/api";
import ReactLoading from "react-loading";

function App() {
  const [anime, setAnime] = useState([]);
  const [isFind, setIsFind] = useState(false);
  const [isFinding, setIsFinding] = useState(false);

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  async function handleAnime() {
    // return console.log(random(0, 10000));
    try {
      setIsFinding(true);
      const data = await api.get(`${random(1, 10000)}`);
      setAnime(data.data.data);
      console.log(data.data.data);
      setIsFind(true);
      setIsFinding(false);
    } catch (error) {
      setIsFinding(false);
      handleAnime();
    }
  }

  return (
    <div className="App">
      <div className="w-80 border rounded-lg h-80 shadow-md mx-auto p-2 mt-32">
        <div className="w-full h-full border-4 border-blue-400 rounded-lg border-dotted">
          {isFinding ? (
            <ReactLoading
              type={"spin"}
              color={"black"}
              height={"20%"}
              width={"20%"}
            />
          ) : !isFind ? (
            <div>
              <div className="font-semibold text-gray-700 mt-5">
                Klik button di bawah untuk menjadi wibu 🤩
              </div>
              <div className="p-2 rounded-lg">
                <img src={Img} alt="aizen" className="rounded-lg " />
              </div>
            </div>
          ) : (
            <div className="p-2 rounded-lg">
              <img
                src={anime?.images.jpg.image_url}
                alt=""
                className="rounded-lg "
              />
              <p>{anime?.title}</p>
              <p>{anime?.rating}</p>
              <p>{anime?.status}</p>
            </div>
          )}
        </div>
      </div>
      <div className="p-5">
        <button
          className="w-80 bg-blue-500 rounded-lg font-semibold text-white py-3"
          onClick={handleAnime}
        >
          KUY
        </button>
      </div>{" "}
      {/* <Button /> */}
    </div>
  );
}

export default App;
