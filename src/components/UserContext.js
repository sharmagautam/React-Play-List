import React from 'react';

const UserContext = React.createContext('default name'); //  if you pass any param to it, it will become default param

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer};
export default UserContext;  // for another way of passing context 