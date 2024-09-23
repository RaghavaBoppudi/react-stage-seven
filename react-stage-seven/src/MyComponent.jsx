import React,{useState} from "react" // importing React and useState modules from react for use

function MyComponent(){
  
  const [name, setName] = useState("Guest"); // using array destructuring to destructure the two elements name and setName. You can also pass in an initial state in the useState() using "" like above. This sets the initial state to the value Guest until the button is clicked triggering the updateName function

  const [age, setAge] = useState(0);
  const [isEmployed, setisEmployed] = useState(false);

  const updateName = () => {
    setName("Raghav");
    // this function uses the setName setter function of the stateful variable to pass in a new value
  }

  const incrementAge = () => {
    setAge(age + 1);
    // this function uses the setAge setter function of the stateful variable to pass in the new value. In this case, increments the age value by 1 each time the button is clicked
  }

  const updateEmployment = () => {
    setisEmployed(!isEmployed);
  }

  //onclick attribute calls the function updateName.
  return(
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={updateEmployment}>Toggle Status</button>
    </div>
  )
}

export default MyComponent