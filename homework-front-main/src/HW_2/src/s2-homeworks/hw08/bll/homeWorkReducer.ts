import type { UserType } from '../HW8';

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType,
): UserType[] => {
  switch (action.type) {
    case 'sort': {
      // by name
      if (action.payload === 'up') {
        return [...state.sort((a, b) => (a.name > b.name ? 1 : -1))];
      }

      if (action.payload === 'down') {
        return [...state.sort((a, b) => (b.name > a.name ? 1 : -1))];
      }

      return state;
    }
    case 'check': {
      return state.filter((s) => s.age >= 18);
    }
    default:
      return state;
  }
};
