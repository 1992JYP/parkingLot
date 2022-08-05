import { configureStore } from "@reduxjs/toolkit";
import getSearchName from "./getSearchName";
import getLatitude from "./getLatitude";
import getLongitude from "./getLongitude";


export default configureStore({
  reducer: {
    keyword: getSearchName,
    latitude: getLatitude,
    longitude: getLongitude,
  },
});