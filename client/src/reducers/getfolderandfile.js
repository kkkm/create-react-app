"use strict"

function getfolderandfileReducers(state={folderandfile:[]}, action){
  switch(action.type){
    case "GET_FOLDERANDFILE":
    return { folderandfile:[...state.folderandfile, ...action.payload]}
    break;
	 
 	
	
  }
  return state
}


export default getfolderandfileReducers;