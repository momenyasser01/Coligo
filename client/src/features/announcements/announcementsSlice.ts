import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Announcement {
  id: string
  title: string
  body: string
}

interface AnnouncementsState {
  items: Announcement[]
}

const initialState: AnnouncementsState = {
  items: [],
}

const announcementsSlice = createSlice({
  name: 'announcements',
  initialState,
  reducers: {
    setAnnouncements: (state, action: PayloadAction<Announcement[]>) => {
      state.items = action.payload
    },
  },
})

export const { setAnnouncements } = announcementsSlice.actions

export default announcementsSlice.reducer
