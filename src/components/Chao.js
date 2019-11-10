import React from 'react';

export default class Chao extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {
                ...{backgroundColor: 'yellowgreen'},
                ...props.style
            }
        }
    }

    render() {
        console.log('style chao: ', this.state.style);
        return (
            <div style={this.state.style}></div>
        );
    }
}