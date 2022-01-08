import React from 'react'

function InputBoxes(props) {
    const {topText, bottomText, handleChange} = props;
    return (
        <form>
        <br/>
          <input
            name="topText"
            type="text"
            value={topText}
            placeholder="Top Text"
            onChange={handleChange} />
        <br />
        <input
            name="bottomText"
            type="text"
            value={bottomText}
            placeholder="Bottom Text"
            onChange={handleChange} />
        <br />
      </form>
    )
}

export default InputBoxes