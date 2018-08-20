"use strict"

function getSecondFilesReducers(state={secondfiles:[]}, action){
  switch(action.type){
    case "GET_SECOND_FILES":
    return { secondfiles:[...state.secondfiles, ...action.payload]}
    break;
	 
 	
	
  }
  return state
}


export default getSecondFilesReducers;