import React, { createContext, useContext } from 'react'


import '../styles/App.css';
import { UserProfile } from './UserProfile';

const UserContext = createContext();
const App = () => {

  return (
    <div id="main">
      <UserContext.Provider value={{ name: "Newton", age: 3 }}>
        <UserProfile />

      </UserContext.Provider>

    </div>
  )
}


export default App;
export { UserContext };