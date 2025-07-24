import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";

const loggerMiddleware = storeAPI => next => action => {
  console.log('Dispatching action:', action);
  const result = next(action);
  console.log('Next state:', storeAPI.getState());
  return result;
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
  // devTools: false,
});
