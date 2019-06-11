const initState = {
    projects: [
        {id: '1', title: 'Dummies guide to redux', content: 'you are a dummy'},
        {id: '2', title: 'Dummies guide to react', content: 'you are still a dummy'},
        {id: '3', title: 'Dummies guide to firebase', content: 'you are always dummy'}
    ]

}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project created', action)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Create Project Error', action.err);
            return state;
        default: 
            return state;
    }
    
}


export default projectReducer