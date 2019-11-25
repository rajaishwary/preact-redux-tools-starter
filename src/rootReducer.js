import { combineReducers } from '@reduxjs/toolkit'
import repoDetailsReducer from './routes/repoSearch/repoDetailsSlice'

const rootReducer = combineReducers({
  repoDetails: repoDetailsReducer
})

export default rootReducer