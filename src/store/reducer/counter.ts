import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface State {
  count: number
}

const slice = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    setCount: (state: State, action: PayloadAction<number>) => {
      state.count = action.payload
    }
  }
})

export const { setCount } = slice.actions

export default slice.reducer
