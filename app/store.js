import { configureStore } from '@reduxjs/toolkit';
import videoReducer from "../features/videoSlice";
export default configureStore({
  reducer: {
    video:videoReducer,
  },
});