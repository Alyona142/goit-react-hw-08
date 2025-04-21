import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

const apiRequest = async (url, method, data = null) => {
  try {
    const response = await axios({
      url,
      method,
      data,
    });

    if (response.data.token) {
      setAuthHeader(response.data.token);
    }

    return response.data;
  } catch (error) {
    throw error.message;
  }
};

export const register = createAsyncThunk(
  "auth/register",
  async (registerData, thunkAPI) => {
    try {
      return await apiRequest("/users/signup", "POST", registerData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (loginData, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", loginData);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await apiRequest("/users/logout", "POST");
    clearAuthHeader();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("No token found");
    }

    try {
      setAuthHeader(persistedToken);
      return await apiRequest("/users/current", "GET");
    } catch (error) {
      clearAuthHeader();
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export {
  register as registerThunk,
  login as loginThunk,
  logout as logoutThunk,
  refreshUser as refreshThunk,
};
