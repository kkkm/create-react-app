import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import showFolderOrFileReducers from "./showfolderorfile"
import getfolderandfileReducers from "./getfolderandfile"
import showSecondFileReducers from "./showSecondFile"
import getSecondFilesReducers from "./getSecondFiles"
import getThirdFilesReducers from "./getThirdFiles"
import showHideThirdBoxReducers from "./showHideThirdBox"
import showHideSecondPanelReducers from "./showHideSecondPanel"

const rootReducer = combineReducers({
	fandf:getfolderandfileReducers,
	showSecondFile:showSecondFileReducers,
	getSecondFiles:getSecondFilesReducers,
	getThirdFiles:getThirdFilesReducers,
	showfolderorfile:showFolderOrFileReducers,
	showHideThirdBox:showHideThirdBoxReducers,
	showHideSecondPanel:showHideSecondPanelReducers,
    routing: routerReducer });

export default rootReducer;
