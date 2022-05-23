export const ADD_USERS = "ADD_USERS";
export const RESET_USERS = "RESET_USERS";

const addUsers = (users) => ({
    type: ADD_USERS,
    users
})
export const resetUsers = { type: RESET_USERS }


export const loadUsersThunk = () => (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => data.map(el => {
            return {
                id: el.id,
                name: el.name,
                city: el.address.city,
                email: el.email,
                phone: el.phone,

            }
        }))
        .then(data => dispatch(addUsers(data)))
}