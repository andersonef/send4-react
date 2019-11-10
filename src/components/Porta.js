import React from 'react';

export default class Porta extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {
                ...{backgroundColor: 'white',
                    display: 'grid',
                    gridTemplateColumns: '2fr 2fr',
                    gridGap: 2
                },
                ...props.style
            },
            stylePorta: {
                backgroundColor: 'brown'
            }
        };
    }


    render() {
        return (
            <div style={this.state.style}>
                <div style={this.state.stylePorta}></div>
                <div style={this.state.stylePorta}></div>
            </div>
        );
    }
}