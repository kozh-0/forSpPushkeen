export const ADD_USERS = "ADD_USERS";

const addUsers = (users) => ({
    type: ADD_USERS,
    users
});


export const loadUsersThunk = () => (dispatch, _, axios) => {
    axios("https://jsonplaceholder.typicode.com/users")
        .then(({data}) => data.map(el => ({
                id: el.id,
                name: el.name,
                city: el.address.city,
                email: el.email,
                phone: el.phone,
                website: el.website,
                company: {
                    name: el.company.name,
                    bs: el.company.bs
                }
            })))
        .then(users => dispatch(addUsers(users)))
}