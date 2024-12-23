import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SinginFormType, Tokens, StaredUserType } from "../../types/types";
import { fetchTokens, LoginApi } from "@/api/api";


export const getUser = createAsyncThunk(
    "user/getUser",
    async ({ email, password }: SinginFormType) => {
      const user = await LoginApi({ email, password });
      return user;
    }
  );
  
  export const getTokens = createAsyncThunk(
    "user/getTokens",
    async ({ email, password }: SinginFormType) => {
      const tokens = await fetchTokens({ email, password });
      return tokens;
    }
  );
  
  type AuthStateType = {
    user: StaredUserType | null;
    tokens: Tokens;
    errors: string | null;
  };
  
  const initialState: AuthStateType = {
    user: null,
    errors : null,
  tokens: {
    access: null,
    refresh: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    quitUser: (state) => {
        state.user = null;
        state.tokens.access = null;
        state.tokens.refresh = null;
      },
    },
    extraReducers(builder) {
      builder.addCase(
        getUser.fulfilled,
        (state, action: PayloadAction<StaredUserType>) => {
          state.user = action.payload;
        }
      );
      builder.addCase(
        getTokens.fulfilled,
        (state, action: PayloadAction<Tokens>) => {
          state.tokens.access = action.payload.access;
          state.tokens.refresh = action.payload.refresh;
        }
      );
      builder.addCase( getTokens.rejected, (state, action) => {
        if (action.error.message) {
          state.errors = action.error.message;
        }
      })
      .addCase(getUser.rejected, (state, action) => {
        if (action.error.message) {
          state.errors = action.error.message;
        }
      })
    },
  });

  export const {quitUser} = authSlice.actions;
export const authReducer = authSlice.reducer;