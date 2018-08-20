
import React, { Component } from 'react';
	
	import { Switch, Route, Redirect,Router,  IndexRoute, Link,Layout } from 'react-router-dom';
	import {connect} from 'react-redux';
	import {findDOMNode} from 'react-dom';
    import {bindActionCreators} from 'redux';
    import {postFile,showNewFile,hideSecondBox,getSecondFiles,getThirdFiles,hideThirdBox,postThirdFile} from '../actions/postAdsActions.js'

    class NewThirdFileSubmit extends React.Component{
    constructor(props) {
    super(props);
   
       this.state = {
		   
        };
    }

    render() {
		
			const handleSubmit= () =>{
		    const firstFileId = this.props.firstFileId
		    const secondFileId = this.props.secondfileId
			const book={
				"thirdFileName" : findDOMNode(this.refs.title).value,
				"secondFileId" : this.props.secondfileId,
				"fFolderId" : this.props.fileId,
				"post_time" : new Date()
						}
			this.props.postThirdFile(book);
			this.props.hideThirdBox();
			this.props.getThirdFiles(firstFileId,secondFileId);
			}
		
		
				const handleFile= () =>{
					this.props.showNewFile();
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
								placeholder="New Third File Name"
								ref="title" />
							</div>
						<button type="submit" className="btn btn-success mb-2" onClick={handleSubmit}>OK</button>
						</div>
					</div>
				</div>
				   )
    }
    }
    function mapStateToProps(state){
    return {
	showHide : state.showfolderorfile.show
	//profileData : state.profileData.profile
    }
    }
    function mapDispatchToProps(dispatch){
    return bindActionCreators({
   postFile:postFile,
		showNewFile:showNewFile,
		hideSecondBox:hideSecondBox,
		getSecondFiles:getSecondFiles,
		getThirdFiles:getThirdFiles,
		hideThirdBox:hideThirdBox,
		postThirdFile:postThirdFile,
    }, dispatch)
    }
    export default connect(mapStateToProps, mapDispatchToProps)(NewThirdFileSubmit);