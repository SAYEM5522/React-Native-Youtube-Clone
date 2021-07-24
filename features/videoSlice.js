import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    video:null,
}

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
  setVideo:(state,action)=>{
    state.video=action.payload;
  },
  resetVideo:(state)=>{
    state.video=null
  }
  }
});

export const {setVideo,resetVideo } = videoSlice.actions
export const selectVideo=state=>state.video.video
export default videoSlice.reducer