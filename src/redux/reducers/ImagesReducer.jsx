import GET_IMAGES from "../constants";
const imagesInitialState = {
  images: [],
  loading: false,
  error: false,
};

const ImagesReducer = (state = imagesInitialState, action) => {
  const { type } = action;

  switch (type) {
    case GET_IMAGES.PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_IMAGES.SUCCESS:
      console.log("action payload", action.payload);
      return {
        ...state,
        images: [...state.images, action.payload],
        loading: false,
      };
    case GET_IMAGES.ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default ImagesReducer;
