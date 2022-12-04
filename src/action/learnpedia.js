import { SIGNIN, SIGNOUT } from './action-types'

export const signIn = (userDetails) => {
    console.log(`action ${userDetails}`);
    console.log(userDetails);
    return{
    type: SIGNIN,
    payload: userDetails,
}
}

export const signOut = () => ({
    type: SIGNOUT
})