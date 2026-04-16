const initState = {
  themeId: 1,
}

export const themeReducer = (state: ThemeState = initState, action: ChangeThemeIdActionType): ThemeState => { // fix any
  switch (action.type) {
    // дописать
    case 'SET_THEME_ID': {
      return { themeId: action.id }
    }
    default:
      return state
  }
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any

type ThemeState = { themeId: number }

type ChangeThemeIdActionType = {
  type: 'SET_THEME_ID', id: number
}
