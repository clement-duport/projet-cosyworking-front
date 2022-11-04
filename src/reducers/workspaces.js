/* eslint-disable max-len */
import { SAVE_CURRENT_WORKSPACE } from '../actions/workspaces';

export const initialState = {
  currentWorkspace: null,
  submitStatus: null,
  workspaceToEdit: null,
  equipmentsList: null,
  // workspaceEquipmentsList: null,
  mainImage: null,
  otherImages: null,
  workspaceIsLoading: true,
  imagesAreLoading: true,
  imagesModalIsOpen: false,
  creationRequestStatus: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CURRENT_WORKSPACE:
      return {
        ...state,
        currentWorkspace: action.data[0].workspace_details,
      };

    case 'BOOKING_SUBMIT_STATUS':
      return {
        ...state,
        submitStatus: action.submitStatus,
      };
    case 'SAVE_EQUIPMENTS_LIST':
      return {
        ...state,
        equipmentsList: action.equipmentsList,
      };
    case 'SAVE_WORKSPACE_TO_EDIT':
      return {
        ...state,
        workspaceToEdit: action.workspaceToEdit,
        workspaceIsLoading: false,
        imagesAreLoading: false,
      };
    case 'SAVE_WORKSPACE_EQUIPMENTS_LIST':
      return {
        ...state,
        workspaceEquipmentsList: action.workspaceEquipmentsList,
      };
    case 'SET_IMAGES_MODAL_STATUS':
      return {
        ...state,
        imagesModalIsOpen: action.isOpen,
      };
    // case 'SAVE_WORKSPACE_OTHER_IMAGES':
    //   return {
    //     ...state,
    //     otherImages: action.otherImages,
    //   };
    case 'SAVE_WORKSPACE_IMAGES':
      return {
        ...state,
        otherImages: action.payload.otherImages,
        mainImage: action.payload.mainImage,
        imagesAreLoading: false,
        imagesModalIsOpen: false,
      };
    case 'SET_IMAGES_LOADING_STATUS':
      return {
        ...state,
        imagesAreLoading: true,
      };
    case 'SET_WORKSPACE_LOADING_STATUS':
      return {
        ...state,
        workspaceIsLoading: true,
      };
    // case 'SET_WORKSPACE_EQUIPMENTS_LIST':
    //   return {
    //     ...state,
    //     workspaceEquipmentsList: action.workspaceEquipmentsList,
    //   };
    case 'SET_WORKSPACE_EQUIPMENTS_LIST':
      return {
        ...state,
        workspaceToEdit: {
          ...state.workspaceToEdit,
          equipments_list: action.workspaceEquipmentsList,
        },
      };
    case 'SET_TITLE':
      return {
        ...state,
        workspaceToEdit: {
          ...state.workspaceToEdit,
          workspace: {
            ...state.workspaceToEdit.workspace,
            title: action.payload,
          },

        },
      };
    case 'SET_ADDRESS':
      return {
        ...state,
        workspaceToEdit: {
          ...state.workspaceToEdit,
          workspace: {
            ...state.workspaceToEdit.workspace,
            address: action.payload,
          },

        },
      };
    case 'SET_ZIP_CODE':
      return {
        ...state,
        workspaceToEdit: {
          ...state.workspaceToEdit,
          workspace: {
            ...state.workspaceToEdit.workspace,
            zip_code: action.payload,
          },

        },
      };
    case 'SET_CITY':
      return {
        ...state,
        workspaceToEdit: {
          ...state.workspaceToEdit,
          workspace: {
            ...state.workspaceToEdit.workspace,
            city: action.payload,
          },

        },
      };
    case 'SET_HALF_DAY_PRICE':
      return {
        ...state,
        workspaceToEdit: {
          ...state.workspaceToEdit,
          workspace: {
            ...state.workspaceToEdit.workspace,
            half_day_price: action.payload,
          },

        },
      };
    case 'SET_DAY_PRICE':
      return {
        ...state,
        workspaceToEdit: {
          ...state.workspaceToEdit,
          workspace: {
            ...state.workspaceToEdit.workspace,
            day_price: action.payload,
          },

        },
      };
    case 'SET_DESCRIPTION':
      return {
        ...state,
        workspaceToEdit: {
          ...state.workspaceToEdit,
          workspace: {
            ...state.workspaceToEdit.workspace,
            description: action.payload,
          },

        },
      };
    case 'SET_CREATION_REQUEST_STATUS':
      return {
        ...state,
        creationRequestStatus: action.creationRequestStatus,
      };

    default:
      return state;
  }
};

export default reducer;

