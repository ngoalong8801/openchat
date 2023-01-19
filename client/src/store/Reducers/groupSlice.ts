import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import  {RootState } from '../store'
import { resolve } from 'path'
import { Action } from '@remix-run/router'
import groupApi from '../../api/groupApi'
import { group } from 'console'

export interface Group {
    id: number,
    name: string,
    description: string,
    image: string
}

interface GroupState {
    groups: Group[],
    status: string,
    error: string | null
}
const initialState: GroupState = {
    groups: [],
    status: 'idle',
    error: null
}


export const fetchGroups = createAsyncThunk('groups/fetchGroups', async() => {
    const response = await groupApi.get('/groups/all')
    return (response.data) as Group[]
})


export const addGroup  = createAsyncThunk<Group, Group>('groups/addGroup', async(group) => {
    const response = await groupApi.post('/groups/add', group)
    return (response.data) as Group
})


export const deleteGroup  = createAsyncThunk<number, number>('groups/deleteGroup', async(id: number) => {
    const response = await groupApi.post('/groups/delete', id)
    return response.data as number
})




export const selectAllGroups = (state: RootState) => state.groups.groups
export const groupStatus = (state: RootState) => state.groups.status
const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
       
    },
    extraReducers(builder){
        builder.addCase(fetchGroups.fulfilled, (state, action) => {
            state.groups = action.payload
        });

        builder.addCase(addGroup.fulfilled, (state, action) => {
            state.groups.push(action.payload)
        });

        builder.addCase(deleteGroup.fulfilled, (state, action) => {
            state.groups = state.groups.filter(group => group.id != action.payload)
        });
    },
  
})


export default groupsSlice.reducer