import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRoutes = createAsyncThunk(
  'fetchRoutes',
  async (_, { rejectWithValue, getState }) => {
    const { filter } = getState();
    const from_city_id = getState().search.routeFrom.id;
    const to_city_id = getState().search.routeIn.id;

    let url = `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${from_city_id}&to_city_id=${to_city_id}`;
    const { date_start, date_end } = getState().search;

    if (date_start) {
      url += `&date_start=${date_start}`;
    }

    if (date_end) {
      url += `&date_end=${date_end}`;
    }

    let options = '';

    for (const key in filter) {
      if (filter[key] || filter[key] === 0) {
        options += `&${key}=${filter[key]}`;
      }
    }
    
    url += options;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        return rejectWithValue('Server Error');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  routes: [],
  status: null,
  error: null,
  total_count: 0,
};

const routeSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    routesPush: (state, action) => {
      state.routes = action.payload;
    },
    routesClear: (state) => {
      state.routes.length = 0;
    },
  },
  extraReducers: {
    [fetchRoutes.pending]: (state) => {
      state.status = 'pending';
      state.error = null;
    },
    [fetchRoutes.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.routes = action.payload.items;
      state.total_count = action.payload.total_count;
    },
    [fetchRoutes.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const { routesPush, routesClear } = routeSlice.actions;
export default routeSlice.reducer;