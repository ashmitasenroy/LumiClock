



/*import React, { useState } from 'react';

function MyComponent() {
  const [task, setTask] = useState(["Eat Breakfast", "Go to Gym", "Read Book"]);
  const [NewTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    if (NewTask.trim() !== "") {
      setTask(task => [...task, NewTask]);
      setNewTask(""); // Clear input after adding
    } else {
      alert("Please enter a valid task.");
    }
  }

  function handleRemoveTask(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }

  function handleMoveUp(index) {
    if (index > 0) {
      const updatedTasks = [...task];
      [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
      setTask(updatedTasks);
    }
  }

  function handleMoveDown(index) {
    if (index < task.length - 1) {
      const updatedTasks = [...task];
      [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
      setTask(updatedTasks);
    }
  }

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type='text'
        value={NewTask}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {task.map((t, index) => (
          <li key={index}>
            <span>{t} </span>
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
            <button onClick={() => handleMoveUp(index)} disabled={index === 0}>Up</button>
            <button onClick={() => handleMoveDown(index)} disabled={index === task.length - 1}>Down</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;


/*import React, { useState } from 'react';

function MyComponent() {
    const [car, setCar] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };
        setCar([...car, newCar]);

        // Clear the input fields
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        setCar(car.filter((_, i) => i !== index));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return (
        <div>
            <h2>List of Cars</h2>
            <ul>
                {car.map((c, index) => (
                    <li key={index}>
                        {c.year} {c.make} {c.model}{" "}
                        <button onClick={() => handleRemoveCar(index)}>Remove</button>
                    </li>
                ))}
            </ul>

            <input
                type="text"
                value={carYear}
                onChange={handleYearChange}
                placeholder="Year"
            />
            <input
                type="text"
                value={carMake}
                onChange={handleMakeChange}
                placeholder="Make"
            />
            <input
                type="text"
                value={carModel}
                onChange={handleModelChange}
                placeholder="Model"
            />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default MyComponent;



/*import React, { useState } from 'react';

function MyComponent(){
    const [food , setFood]=useState(["Appple", "Banana", "Orange"]);

    function handleAddFood(event){
        const newFood= document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        setFood(f=>[...f, newFood]);
    }
    function handleRemoveFood(index){
        setFood(food.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2>List of Foods</h2>
            <ul>
               { food.map((food,index) =>
                 <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                    </li>)}
               </ul>
            <input type="text" id="foodInput" placeholder="Add food item" />
            <button onClick={handleAddFood}>Add Food</button>

        </div>

    );
}
export default MyComponent


import React , { useState } from 'react';

function MyComponent(){
    const [car, setCar] = useState({ year:2024,
                                                      make:"Tesla",
                                                      model:"Model S" });
function handleYearChange(event){
    setCar(c => ({...c, year: event.target.value}));
}
function handleMakeChange(event){
    setCar(c => ({...c, make: event.target.value}));

}
function handleModelChange(event){
    setCar(c => ({...c, model: event.target.value}));

}
    return(
        <div>
            <p>Your fav Car is {car.year} {car.make} {car.model}</p>
            <input type ="text" value={car.year} onChange={handleYearChange} />
            <input type ="text" value={car.make} onChange={handleMakeChange} />
            <input type ="text" value={car.model} onChange={handleModelChange}/>
        </div>
        
    );

}


export default MyComponent*/
