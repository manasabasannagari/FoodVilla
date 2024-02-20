import {createContext} from 'react';

const UserContext = createContext({
    // Default values
    name:"Dummy Name",
    email:"dummy@gmail.com"
});
export default UserContext;