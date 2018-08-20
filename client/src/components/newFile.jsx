
import React, { Component } from 'react';
	
	import { Switch, Route, Redirect,Router,  IndexRoute, Link,Layout } from 'react-router-dom';
	import {connect} from 'react-redux';
	import {findDOMNode} from 'react-dom';
    import {bindActionCreators} from 'redux';
    import {postFile,showNewFile,showSecondBox,showThirdBox,getSecondFiles,getThirdFiles,showSecondPanel,hideSecondPanel} from '../actions/postAdsActions.js'
import NewFileSubmit from '../components/newFileSubmit.jsx';
import NewThirdFileSubmit from '../components/newThirdFileSubmit.jsx';
import GetThirdFiles from '../components/getThirdFile.jsx';
    class NewFile extends React.Component{
    constructor(props) {
    super(props);
   
       this.state = {
		   
        };
    }
		

    render() {
		
		
			const handleSubmit= () =>{
		
			const book={
				"post_title" : findDOMNode(this.refs.title).value,
				"post_detail" : findDOMNode(this.refs.detail).value,
				"post_time" : new Date()
						}
		this.props.postFile(book);
		}
		
		
		const handleFile= () =>{
			this.props.showSecondFile();
		}
				
	const hoho = this.props.fileID			
	const koko = this.props.secondFiles.filter((item,index, a) =>a.findIndex((s2)=>s2.Id === item.Id) === index && item.firstId===hoho).map(function(ub,idx){ return  ub.secondFileName})				
	const haha  =this.props.secondFiles.map(function(ub,idx){return ub.firstId}).join(' ')
	const kkm = this.props.showSecond.map(function(ub,idx){return ub.tagName}).join(' ')
		
		const handleSecondBox = (event) => {
		this.props.showSecondBox(event);
	}
     const handleThirdBox = (event) => {
		this.props.showThirdBox(event);
	}   
		const handleSecondFiles = (event) => {
		this.props.showSecondPanel(event);
		this.props.getSecondFiles(event);
	}
		
		const handleHideSecondFiles = (event) => {
		this.props.hideSecondPanel(event);
	}
		
		const fieldID = this.props.fileID
		const fileName = this.props.filename
		const showThirdBox = this.props.showthirdBox.map(function(ub,idx){return ub.tagName}).join(' ')
		const handleThirdFiles = (event) => {
		this.props.getThirdFiles(fieldID,event,);
	}
		
	
	return( 

	<div className="container" style={{padding:"40px"}}>

	<button className="btn btn-danger" onClick={(event) => handleSecondFiles(this.props.fileID,event)} >>></button>{fileName}

		<div className="container" style={{paddingLeft:"100px"}}>
		{this.props.secondFiles.filter((item,index, a) =>a.findIndex((s2)=>s2.Id === item.Id) === index && item.firstId===hoho).map(function(ub,idx){ return <div key={idx} className="container"> 
			<div style={{padding:"20px"}}>		  
			<button className="btn btn-success" onClick={(event) => handleThirdFiles(ub.Id,event)} >+++</button>		
			{ub.secondFileName}
			<GetThirdFiles 
			secondfileId = {ub.Id} 
			/>
			{
			showThirdBox === ub.Id ?
			<NewThirdFileSubmit 
			firstFileId = {ub.firstId}
			secondfileId = {ub.Id}
			fileId = {fieldID }
			/>
			:
			("")
			} 
			<div className="col-sm-12 col-md-10 col-lg-12" style={{marginTop:"20px"}}>
			<button className="btn btn-success" onClick={(event) => handleThirdBox(ub.Id,event)} >+</button>
			</div>
			</div></div>})}
		{
			kkm === this.props.fileID ?
			<NewFileSubmit 
			fileId = {this.props.fileID}
			/>
			:
			("")
		}
		</div>

	<div className="col-sm-12 col-md-10 col-lg-12" style={{marginTop:"20px"}}>
	<button className="btn btn-danger" onClick={(event) => handleSecondBox(this.props.fileID,event)} >+</button>

	</div>
	</div>



	)
}
}
    function mapStateToProps(state){
    return {
	showHide : state.showfolderorfile.show,
	showSecond : state.showSecondFile.showsecond,
	secondFiles :state.getSecondFiles.secondfiles,
	showthirdBox:state.showHideThirdBox.showthird,
	thirdFiles:state.getThirdFiles.thirdfiles,
	showHideSecondPanel:state.showHideSecondPanel.showsecondpanel,
    }
    }
    function mapDispatchToProps(dispatch){
    return bindActionCreators({
   postFile:postFile,
		showNewFile:showNewFile,
		showSecondBox:showSecondBox,
		getSecondFiles:getSecondFiles,
		showThirdBox:showThirdBox,
		getThirdFiles:getThirdFiles,
		showSecondPanel:showSecondPanel,
		hideSecondPanel:hideSecondPanel,
    }, dispatch)
    }
    export default connect(mapStateToProps, mapDispatchToProps)(NewFile);