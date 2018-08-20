"use strict"

function showHideSecondPanelReducers(state={showsecondpanel:[]}, action){
  switch(action.type){
    case "SHOW_SECOND_PANEL":
    return {showsecondpanel:[...state.showsecondpanel, action.payload]}
    break;
		
		  case "HIDE_SECOND_PANEL":
    return {showsecondpanel:state.showsecondpanel.filter(({ tagName }) => tagName !== action.payload)}
    break;
 }
  return state
}


export default showHideSecondPanelReducers;