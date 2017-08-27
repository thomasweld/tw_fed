// Actions
const OPEN = 'Ticketwin/Navigation/OPEN';
const CLOSE = 'Ticketwin/Navigation/CLOSE';

const initialState = {
  drawerOpen: false,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        drawerOpen: true,
      };
    case CLOSE:
      return {
        ...state,
        drawerOpen: false,
      };
    default:
      return state;
  }
}

// Action Creators
export const navigationOpenDrawer = () => ({ type: OPEN });
export const navigationCloseDrawer = () => ({ type: CLOSE });
