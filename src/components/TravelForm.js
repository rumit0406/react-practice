import React from 'react'

//question: https://coursework.vschool.io/travel-form/

function TravelForm(props) {
    // console.log(props)
    const {firstName, lastName, age, gender, location, vegetarian, kosher, lactoseFree} = props.data;
    const {handleChange, handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input
            name="age"
            type="number"
            value={age}
            onChange={handleChange} />
        </label>
        <br />
        <label>
            <input 
                type="radio" 
                name="gender" 
                value="male" 
                checked={gender === 'male'} 
                onChange={handleChange}/>
            Male
        </label>
        <br/>
        <label>
            <input 
                type="radio" 
                name="gender" 
                value="female" 
                checked={gender === 'female'} 
                onChange={handleChange}/>
            Female
        </label>
        <br/>
        <label>
          Destination:
          <select 
            value={location}
            onChange={handleChange} 
            name="location">
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Dubai">Dubai</option>
          </select>
        </label>
        <br/>
        <h3>Please tell us if you have any dietary restrictions</h3>
        <label>
            <input
                type="checkbox"
                name="vegetarian"
                onChange={handleChange}
                checked={vegetarian}
                />
            Vegetarian 
        </label>
        <label>
            <input
                type="checkbox"
                name="kosher"
                onChange={handleChange}
                checked={kosher}
                />
            Kosher 
        </label>
        <label>
            <input
                type="checkbox"
                name="lactoseFree"
                onChange={handleChange}
                checked={lactoseFree}
                />
            Lactose Free 
        </label>
        <br/><br/>
        <button type="submit">Submit</button>
      </form>
    )
}

export default TravelForm