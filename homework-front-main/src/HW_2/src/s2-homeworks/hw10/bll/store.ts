import { loadingReducer } from './loadingReducer'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { themeReducer } from '../../hw12/bll/themeReducer'
import { useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
  loading: loadingReducer, // hw10
  theme: themeReducer, // hw12
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export const selectIsLoading = (state: RootState): boolean => state.loading.isLoading

// @ts-ignore
window.store = store // for dev // для того чтобы автотесты видели состояние данных
