//import axios from 'axios';
const appStr = 'application/x-www-form-urlencoded';
const Mul = "multipart/form-data"



export function postFile(book){
  return function(dispatch){
    axios.post("/postsecondfile", book)
      .then(function(response){
        console.log(response.data)
        dispatch({type:"POST_FILE", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"POST_FILE", payload:"there was an error while posting FILE"})
      })
  }
}

export function postThirdFile(book){
  return function(dispatch){
    axios.post("/postthirdfile", book)
      .then(function(response){
        console.log(response.data)
        dispatch({type:"POST_THIRD_FILE", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"POST_THIRD_FILE_ERROR", payload:"there was an error while posting FILE"})
      })
  }
}
export function postNewFolder(book){
  return function(dispatch){
    axios.post("/postfolder", book)
      .then(function(response){
        console.log(response.data)
        dispatch({type:"POST_FOLDER", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"POST_FOLDER_REJECTED", payload:"there was an error while posting FOLDER"})
      })
  }
}


export function getFolderAndFile(){
  return function(dispatch){
    axios.get("/getfolderandfile" )
      .then(function(response){
       
        dispatch({type:"GET_FOLDERANDFILE", payload:response.data.books})
        
      })
      .catch(function(err){
        dispatch({type:"GET_FOLDERANDFILE_REJECTED", payload:err})
      })
  }
}


export function getSecondFiles(parentID){
  return function(dispatch){
    axios.get('/getsecondfiles/'+parentID )
      .then(function(response){
       
        dispatch({type:"GET_SECOND_FILES", payload:response.data.books})
        
      })
      .catch(function(err){
        dispatch({type:"GET_SECOND_FILES_REJECTED", payload:err})
      })
  }
}


export function getThirdFiles(parentID,secondField){
  return function(dispatch){
    axios.get('/getthirdfiles/'+parentID+'/'+secondField )
      .then(function(response){
       
        dispatch({type:"GET_THIRD_FILES", payload:response.data.books})
        
      })
      .catch(function(err){
        dispatch({type:"GET_THIRD_FILES_REJECTED", payload:err})
      })
  }
}


export function showNewFolder(){
   return {
          type:"SHOW_NEW_FOLDER",
          payload:{tagName:"shownewfolder"}
        }
}


export function hideNewFolder(){
   return {
          type:"HIDE_NEW_FOLDER",
          payload:{tagName:""}
        }
}

export function showNewFile(){
   return {
          type:"SHOW_NEW_FILE",
          payload:{tagName:"shownewfile"}
        }
}


export function showSecondBox(CMTID){
   return {
          type:"SHOW_SECOND_BOX",
          payload: {tagName:CMTID}
        }
}

export function hideSecondBox(){
   return {
          type:"HIDE_SECOND_BOX",
          payload: {tagName:""}
        }
}

export function showThirdBox(CMTID){
   return {
          type:"SHOW_THIRD_BOX",
          payload: {tagName:CMTID}
        }
}

export function hideThirdBox(){
   return {
          type:"HIDE_THIRD_BOX",
          payload: {tagName:""}
        }
}

export function showSecondPanel(CMTID){
   return {
          type:"SHOW_SECOND_PANEL",
          payload: {tagName:CMTID}
        }
}

export function hideSecondPanel(CMTID){
   return {
          type:"HIDE_SECOND_PANEL",
          payload: CMTID
        }
}

