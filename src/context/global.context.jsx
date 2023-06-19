import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from 'prop-types';
import { GLOBAL_API } from "../utils/constants";

const initialState = {
  URL_API: GLOBAL_API
}

const ContextGlobal = createContext('')

const reducer = (state, action) => {
  switch (action.type){
    case 'APIdata':
      return  {}

    default:
      throw new Error('action type error')
  }
}


const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  


  
  useEffect(() =>{
   
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