import * as actions from '../actionTypes';
//Redux
//in Redux reducers has to be pure functions
 
const initialState = {
  recipients: [],
  cards:[],
  users: {},
  rates: [],
  error : ''

}

export default function fetchReducer ( state = initialState, action ) {
    
    switch (action.type){

        case actions.Fetch_Recipient_Success:
            const { payload: { recipients } } = action
            return { ...state, recipients, isAuthenticated: true  }
        case actions.Fetch_Recipient_Failure:
            const { payload: { error }} = action
            return { ...state, error}


        case actions.Fetch_Card_Success:
            const { payload: {cards} } = action
            return { ...state, cards, isAuthenticated: true  }
        case actions.Fetch_Card_Failure:
            return { 
                ...state, 
                error: action.payload.error,
            }


        case actions.Fetch_User_Success:
            const { payload: {users} } = action
            return { ...state, users , isAuthenticated: true }
        case actions.Fetch_User_Failure:
            return {
                ...state,
                error: action.payload.error,
            }

        case actions.Fetch_Rate_Success:
            const { payload: {rates} } = action
            return { ...state, rates, isAuthenticated: true }
        case actions.Fetch_Rate_Failure:
            return {
                ...state,
                error: action.payload.error,
            }


        default:
            return state;

    }
}