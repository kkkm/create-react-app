"use strict"

function showFolderOrFileReducers(state={show:[]}, action){
  switch(action.type){
    case "SHOW_NEW_FOLDER":
    return {show:[action.payload]}
    break;
		
		  case "HIDE_NEW_FOLDER":
    return {show:[action.payload]}
    break;
		  
     case "SHOW_NEW_FILE":
    return {show:[action.payload]}
    break;
   
  }
  return state
}


export default showFolderOrFileReducers;