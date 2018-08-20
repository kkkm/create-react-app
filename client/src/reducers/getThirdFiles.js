"use strict"

function getThirdFilesReducers(state={thirdfiles:[]}, action){
  switch(action.type){
    case "GET_THIRD_FILES":
    return { thirdfiles:[...state.thirdfiles, ...action.payload]}
    break;
	 
 	
	
  }
  return state
}


export default getThirdFilesReducers;