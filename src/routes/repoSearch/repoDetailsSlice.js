import { createSlice } from '@reduxjs/toolkit'
import { getRepoDetails } from '../../api'

const initialState = {
    openIssuesCount: -1,
    error: null
  }

const repoDetails = createSlice({
  name: 'repoDetails',
  initialState,
  reducers: {
    getRepoDetailsSuccess(state, action) {
      state.openIssuesCount = action.payload.open_issues_count
      state.error = null
    },
    getRepoDetailsFailed(state, action) {
      state.openIssuesCount = -1
      state.error = action.payload
    }
  }
})

export const {
  getRepoDetailsSuccess,
  getRepoDetailsFailed
} = repoDetails.actions

export default repoDetails.reducer

export const fetchIssuesCount = (
  org,
  repo
) => async dispatch => {
  try {
    const repoDetails = await getRepoDetails(org, repo)
    dispatch(getRepoDetailsSuccess(repoDetails))
  } catch (err) {
    dispatch(getRepoDetailsFailed(err.toString()))
  }
}