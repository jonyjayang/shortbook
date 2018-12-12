const defaultState={
    focused:false
};

export default (state=defaultState,action)=>{
    const NewState=JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'search_focus':
            NewState.focused=true;
            return NewState;
        case 'search_blur':
            NewState.focused=false;
            return NewState; 
        default:
            break;
            

    }
    return state;   
}