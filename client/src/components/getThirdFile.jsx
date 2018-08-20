
import React, { Component } from 'react';
	
	import { Switch, Route, Redirect,Router,  IndexRoute, Link,Layout } from 'react-router-dom';
	import {connect} from 'react-redux';
	import {findDOMNode} from 'react-dom';
    import {bindActionCreators} from 'redux';
    import {getThirdFiles} from '../actions/postAdsActions.js'

    class GetThirdFiles extends React.Component{
    constructor(props) {
    super(props);
   
       this.state = {
		   
        };
    }
		

    render() {
		const secondFILEId = this.props.secondfileId
	
  return( 
	  <div className="container" style={{padding:"40px"}}>
        {this.props.thirdFiles.filter((item,index, a) =>a.findIndex((s2)=>s2.Id === item.Id) === index && item.secondFileId===secondFILEId).map(function(ub,idx){ return <div key={idx} className="container"> {ub.thirdFileName}</div>})}
	 </div>
	   )
    }
    }
    function mapStateToProps(state){
    return {
	
	thirdFiles:state.getThirdFiles.thirdfiles,
    }
    }
    function mapDispatchToProps(dispatch){
    return bindActionCreators({
   
		
		getThirdFiles:getThirdFiles,
    }, dispatch)
    }
    export default connect(mapStateToProps, mapDispatchToProps)(GetThirdFiles);