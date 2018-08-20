"use strict"

function showSecondFileReducers(state={showsecond:[]}, action){
  switch(action.type){
    case "SHOW_SECOND_BOX":
    return {showsecond:[action.payload]}
    break;
		
		  case "HIDE_SECOND_BOX":
    return {showsecond:[action.payload]}
    break;
		  
    
   
  }
  return state
}


export default showSecondFileReducers;