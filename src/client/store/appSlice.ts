import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from './store';

interface AppState {
  value: number;
}

const initialState: AppState = {
  value: 0,
};

export const incrementAsync = createAsyncThunk(
  'app/incrementAsync',
  async () => {
    const response = await new Promise<{ data: number }>((resolve) => {
      setTimeout(() => {
        resolve({
          data: 1,
        });
      }, 100);
    });
    return response.data;
  }
);

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.value += action.payload;
    });
  },
});

export const appReducer = appSlice.reducer;

export const { increment, decrement, incrementByAmount } = appSlice.actions;

export const selectAppValue = (state: RootState) => state.app.value;
