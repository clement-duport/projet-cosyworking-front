export const initialState = {
  openConfimModal: false,
  description: '',
  bookigIdforUpdate: 0,
  alertSuccess: false,
  hostrequests: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_HOST_REQUESTS':
      return {
        ...state,
        hostrequests: action.hostrequests,
      };
    case 'OPEN_CONFIRM_MODAL':
      return {
        ...state,
        openConfimModal: true,
        description: action.description,
        bookigIdforUpdate: action.bookigIdforUpdate,
      };
    case 'CLOSE_CONFIRM_MODAL':
      return {
        ...state,
        openConfimModal: false,
        description: '',
        bookigIdforUpdate: 0,
      };
    case 'OPEN_ALERT':
      return {
        ...state,
        alertSuccess: true,
      };
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertSuccess: false,
      };
    default:
      return state;
  }
};

export default reducer;
