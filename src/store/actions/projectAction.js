export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //Post to DB
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const uid = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: uid,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
    }
}