import React from 'react';

function Form(props) {
    return (
        <div className="Main">
          <main>
            <form>
              <input 
                type="text"
                value={props.data.firstName} 
                placeholder="First name"
                onChange={props.handleChange}
                name="firstName"
                 /> <br/>
              <input
                type="text"
                value={props.data.lastName} 
                placeholder="Last name"
                onChange={props.handleChange}
                name="lastName"
                /> <br/>
              <input
                type="number"
                value={props.data.age} 
                placeholder="Age"
                onChange={props.handleChange}
                name="age"
                /> <br/>
                <label>
              <input
                type="radio"
                value="female"
                checked={props.data.gender === "female"}
                onChange={props.handleChange}
                name="gender"
                /> Female
                </label> <br/>
                <label> 
                 <input
                type="radio"
                value="male"
                checked={props.data.gender === "male"}
                onChange={props.handleChange}
                name="gender"
                />Male
                </label> <br/>
                <label>Select your destination: 
                  <select value={props.data.destination} onChange={props.handleChange} name="destination">
                    <option value="">Select a destination</option>
                    <option value="California">California</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Chicago">Chicago</option>
                  </select>
                </label> <br/> 
                <label>Dietary restrictions
                <input
                type="checkbox"
                value={props.data.vegetarian}
                checked={props.data.vegetarian}
                onChange={props.handleChange}
                name="vegetarian"
                />Vegeterian
                </label>
                <label>
                <input
                type="checkbox"
                value={props.data.dairyFree}
                checked={props.data.dairyFree}
                onChange={props.handleChange}
                name="dairyFree"
                />Dairy Free
                </label> 
                <label>
                <input
                type="checkbox"
                value={props.data.nutFree}
                checked={props.data.nutFree}
                onChange={props.handleChange}
                name="nutFree"
                />Nut Free
                </label> 
                <label>
                <input
                type="checkbox"
                value={props.data.glutenFree}
                checked={props.data.glutenFree}
                onChange={props.handleChange}
                name="glutenFree"
                />Gluten Free
                </label> <br />
                <button>Submit</button>
            </form>
          </main>
        </div>
      );
    }
export default Form;
