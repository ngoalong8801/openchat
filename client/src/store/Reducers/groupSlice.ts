import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchAllGroups, Group } from '../../api/groupApiMock'
import  {RootState } from '../store'
import { resolve } from 'path'
import { Action } from '@remix-run/router'

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
    const response = await new Promise((resolve) => {
        setTimeout(() => resolve([
            {
                name: "Group 1",
                description: "fist group"
            },
            {
                name: "Group 2",
                description: "fist group"
            },
            {
                name: "Group 3",
                description: "fist group"
            }] as Group[]), 1000);
    });

    return (response) as Group[]
})


export const addGroup  = createAsyncThunk<Group, Group>('groups/addGroup', async(group) => {
    const response = await new Promise((resolve) => {
        setTimeout(() => resolve(
            {
                name: group.name,
                description: group.description
            }as Group), 1000);
    });

    return (response) as Group
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
    },
  
})


export default groupsSlice.reducer