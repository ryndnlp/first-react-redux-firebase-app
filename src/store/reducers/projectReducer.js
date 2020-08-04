const initState = {
    
}

const projectReducer = (state = initState, action) => {
    if(action.type === 'CREATE_PROJECT'){
        //console.log('Created', action.project);
    }else if(action.type === 'CREATE_PROJECT_ERROR'){
        //console.log('Error', action.err);
    }
    return state;
}
export default projectReducer;