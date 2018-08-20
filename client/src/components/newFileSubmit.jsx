
import React, { Component } from 'react';
	
	import { Switch, Route, Redirect,Router,  IndexRoute, Link,Layout } from 'react-router-dom';
	import {connect} from 'react-redux';
	import {findDOMNode} from 'react-dom';
    import {bindActionCreators} from 'redux';
    import {postFile,showNewFile,hideSecondBox,getSecondFiles} from '../actions/postAdsActions.js'

    class NewFileSubmit extends React.Component{
    constructor(props) {
    super(props);
   
       this.state = {
		   
        };
    }

    render() {
		
		
			const handleSubmit= () =>{
		    const firstFileId = this.props.fileId
			const book={
				"secondFileName" : findDOMNode(this.refs.title).value,
				"fFolderId" : this.props.fileId,
				"post_time" : new Date()
						}
		this.props.postFile(book);
		this.props.hideSecondBox();
		this.props.getSecondFiles(firstFileId);
		//resetForm();
	}
		
		
				const handleFile= () =>{
		
		this.props.showNewFile();
		//resetForm();
	}
			
			
			
const kkm = this.props.showHide.map(function(ub,idx){return ub.tagName}).join(' ')
		
		
		
  return(
	  <div className="container">
	  <div className="container" style={{marginTOp:"30px"}}>
	  	  <div className="form-inline">

			  
			  
<div className="form-group mx-sm-3 mb-2" >
						
							<input
							className="form-control form-control-success"
							type="text"
							placeholder="New Second File Name"
							ref="title" />
					</div>
  
  <button type="submit" className="btn btn-danger mb-2" onClick={handleSubmit}>OK</button>
</div>
	  
		  </div>
	  
	 
	  
	  
	  </div>
	  

	   )
    }
    }
    function mapStateToProps(state){
    return {
	showHide : state.showfolderorfile.show
    }
    }
    function mapDispatchToProps(dispatch){
    return bindActionCreators({
   postFile:postFile,
		showNewFile:showNewFile,
		hideSecondBox:hideSecondBox,
		getSecondFiles:getSecondFiles,
    }, dispatch)
    }
    export default connect(mapStateToProps, mapDispatchToProps)(NewFileSubmit);