import React from 'react'

class Joke extends React.Component {
    render() {
        return (
            <div style = {{border: '5px solid'}}>
                {'ques' in this.props.joke ? <h2>{this.props.joke.ques}</h2> : null}
                <h3>{this.props.joke.punchline}</h3>
            </div>
        )
    }
}

export default Joke
