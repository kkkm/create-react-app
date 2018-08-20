
import React, { Component } from 'react';
	
	import { Switch, Route, Redirect,Router,  IndexRoute, Link,Layout } from 'react-router-dom';
	import {connect} from 'react-redux';
	import {findDOMNode} from 'react-dom';
    import {bindActionCreators} from 'redux';
	import NewFile from '../components/newFile.jsx';
	import NewFolder from '../components/newFolder.jsx';
import {showNewFolder,  showNewFile, getFolderAndFile} from '../actions/postAdsActions.js'


	class HomePage extends React.Component{
    constructor(props) {
    super(props);
   
       this.state = {
		   
        };
    }
	  
	 componentDidMount(){
	  this.props.getFolderAndFile()
  }	
		
		
    render() {
				const handleFolder= () =>{
					this.props.showNewFolder();
				}
	
				const handleFile= () =>{
					this.props.showNewFile();
	            }
			
			
			
 const kkm = this.props.showHide.map(function(ub,idx){return ub.tagName}).join(' ')
 const ffs = this.props.getFnF.map(function(ub,idx){return ub}).join(' ')
 
  return(
			<div className="container">
			<h1>
			<Link to="/">React App</Link>
			</h1>
				<div className="container" >
					<div className="row">
						<div className="col-sm-12 col-md-10 col-lg-12">
						<div className="col-2"></div>
							<div className="col-10 container" style={{paddingLeft:"40px"}}>
								{this.props.getFnF.map(function(ub,idx){
								return (
								<NewFile key={idx}	
								filename = {ub.foldername}	
								fileID = {ub.id}	
								/>
								)
								})}
									{
									kkm === "shownewfolder" ?
									<div className="col-sm-12 col-md-8 col-lg-8">
									<NewFolder />
									</div>    
									:
									("")
									}
							</div>
						</div>
					<div className="col-sm-12 col-md-10 col-lg-12">
					<button className="btn btn-info" onClick={handleFolder}>+</button>
					</div>
					</div>
				</div>
			</div>
	
	   )
    }
    }
    function mapStateToProps(state){
    return {
	getFnF:state.fandf.folderandfile,
	showHide : state.showfolderorfile.show
    }
    }
    function mapDispatchToProps(dispatch){
    return bindActionCreators({
   showNewFolder,
		showNewFile,
		//hideNewFolder,
		getFolderAndFile
    }, dispatch)
    }
    export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

