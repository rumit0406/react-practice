import React from 'react';
import InputBoxes from './InputBoxes'

class MemeGenerator extends React.Component {
    state = {
        topText: 'Top Text',
        bottomText: 'Bottom Text',
        randomImg: 'https://i.imgflip.com/43a45p.png',
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        // console.log(name, value)
        this.setState({
          [name]: value
        });
      }
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => {
            // console.log(data.data.memes)
            const {memes} = data.data, idx = Math.floor(Math.random() * memes.length);
            this.setState({
                randomImg: memes[idx].url
            })
        })
    }
    render() {
        const styling = {
            padding: 10,
            textAlign: 'center',
        };
        return (
            <div>
                <InputBoxes
                    topText = {this.state.topText}
                    bottomText = {this.state.bottomText}
                    handleChange = {this.handleChange}/>
                <div style={styling}>
                    <h3>{this.state.topText}</h3>
                    <img src={this.state.randomImg} alt={"try refreshing"}/>
                    <h3>{this.state.bottomText}</h3>
                </div>
            </div>
        )
    }
}

export default MemeGenerator