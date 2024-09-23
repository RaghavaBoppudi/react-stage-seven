// React hook - special function that allows functional components to use react features without writing class components.
// (useState, useEffect,), useContext, useReducer, useCallback, and more...)

// useState() - A React hook that allows the creation of a stateful variable AND a setter function to update its value in the Vitrual DOM
// useState() returns [name, setName]. We use array destructuring to create a stateful name variable, and setName to update the variable

import MyComponent from "./MyComponent"

function App() {
  return(
    <MyComponent/>
  )
}

export default App