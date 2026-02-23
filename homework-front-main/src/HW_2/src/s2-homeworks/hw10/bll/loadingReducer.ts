const initState: LoadingState = {
  isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): LoadingState => { // fix any
  switch (action.type) {
    // пишет студент  // need to fix
    case 'CHANGE_LOADING': {
      return { isLoading: action.isLoading }
    }
    default:
      return state
  }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
  type: 'CHANGE_LOADING',
  isLoading,
})

export type LoadingState = {
  isLoading: boolean
}

type LoadingActionType = {
  type: 'CHANGE_LOADING'
  isLoading: boolean
}
