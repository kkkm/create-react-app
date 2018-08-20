
import React, { Component } from 'react';
	
	import { Switch, Route, Redirect,Router,  IndexRoute, Link,Layout } from 'react-router-dom';
	import {connect} from 'react-redux';
	import {findDOMNode} from 'react-dom';
    import {bindActionCreators} from 'redux';
    //import postFolder from '../actions/postAdsActions.js';
	import {postNewFolder, hideNewFolder, getFolderAndFile} from '../actions/postAdsActions.js'
    class NewFolder extends React.Component{
    constructor(props) {
    super(props);
   
       this.state = {
		   
        };
    }
		
    render() {
			const handleSubmit= () =>{
			const book={
				"folder_name" : findDOMNode(this.refs.folder).value,
				"post_time" : new Date()
						}
		this.props.postFolder(book);
		this.props.hideNewFolder();
	    this.props.getFolderAndFile();
	}

  return(
	  <div className="form-inline">
				<div className="form-group mx-sm-3 mb-2">

						<input
						className="form-control form-control-success"
						type="text"
						placeholder="New File Name"
						ref="folder" />
				</div>
  
  			<button type="submit" className="btn btn-info mb-2" onClick={handleSubmit}>OK</button>
	  </div>
	   )
    }
    }
    function mapStateToProps(state){
    return {
	
	//profileData : state.profileData.profile
    }
    }
    function mapDispatchToProps(dispatch){
    return bindActionCreators({
   postFolder : postNewFolder,
   hideNewFolder:hideNewFolder,
   getFolderAndFile:getFolderAndFile,
    }, dispatch)
    }
    export default connect(mapStateToProps, mapDispatchToProps)(NewFolder);