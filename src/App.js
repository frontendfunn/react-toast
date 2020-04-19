import React from "react";
import ImageCard from "./components/ImageCard";
import { useDispatch } from "react-redux";
import ImageActions from "./redux/actions/ImageActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let ImageId = 1;
function App() {
  const dispatch = useDispatch();

  return (
    <div className="App container mt-2">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">React Toastify using Redux</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(ImageActions(++ImageId))}
          >
            Load New Image
          </button>
        </div>
      </div>
      <div>
        <ImageCard />
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
