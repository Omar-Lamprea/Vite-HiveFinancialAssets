import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from 'prop-types';
import { GLOBAL_API } from "../utils/constants";
import { teamData } from "../utils/teamData";

const initialState = {
  URL_API: GLOBAL_API,
  team: []
}

const ContextGlobal = createContext('')

const reducer = (state, action) => {
  switch (action.type){
    case 'setTeam':
      return  {...state, team: [...state.team, ...action.payload]}
    default:
      throw new Error('action type error')
  }
}


const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  


  
  useEffect(() =>{
   const getTeam = async () =>{
    dispatch({type: 'setTeam', payload: teamData})
   }
   getTeam()
  },[])
  
  
  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  )
}

export default ContextProvider
export const useContextGlobal = () => useContext(ContextGlobal)

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}