import GET_IMAGES from "../constants";
import ImagesURL from "../Routes";
import axios from "axios";
import { toast } from "react-toastify";

const getImage = (imageID) => async (dispatch) => {
  dispatch({ type: GET_IMAGES.PENDING });
  axios
    .get(`${ImagesURL}/${imageID}`)
    .then((response) => {
      dispatch({
        type: GET_IMAGES.SUCCESS,
        payload: response.data,
      });
      toast.success("Fetched Image Successfully", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_IMAGES.ERROR,
        payload: err,
      });
      console.log("err", err);
      toast.error("Problem While Fetching Image");
    });
};

export default getImage;
