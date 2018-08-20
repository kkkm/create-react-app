"use strict"

function showHideThirdBoxReducers(state={showthird:[]}, action){
  switch(action.type){
    case "SHOW_THIRD_BOX":
    return {showthird:[action.payload]}
    break;
		
		  case "HIDE_THIRD_BOX":
    return {showthird:[action.payload]}
    break;
		  
    
   
  }
  return state
}


export default showHideThirdBoxReducers;