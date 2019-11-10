import React from 'react';

export default class Interruptor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {
                width: '100%',
                height: '100%',
                borderRadius: '100%',
                backgroundColor: 'black'
            },
            turnedOn: true
        }
    }

    render() {
        return (
            <div style={this.state.style}></div>
        )
    }
}