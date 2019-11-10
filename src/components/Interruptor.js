import React from 'react';

export default class Interruptor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {
                ...{
                    width: '100%',
                    height: '100%', 
                    border: '4px #CCC solid',
                    cursor: 'pointer'
                },
                ...props.style
            },
            turnedOn: true
        }
        this.toggle = this.toggle.bind(this);
        console.log('style =>> ', this.state.style);
    }

    toggle() {
        this.setState((state, props) => {
            return {
                turnedOn: !state.turnedOn
            }
        });
        this.props.onClick();
    }

    render() {
        const styleButtonOn = {
            width: '100%',
            height: '50%',
            backgroundColor: 'black',
            textAlign: 'center',
            lineHeight: '100%',
            verticalAlign: 'middle'
        };
        const styleButtonOff = {
            width: '100%',
            height: '50%',
            backgroundColor: '#333',
            textAlign: 'center',
            lineHeight: '100%',
            verticalAlign: 'middle'
        };
        return (
            <div style={this.state.style} onClick={this.toggle}>
                <div style={styleButtonOn}>
                    <span style={{color: 'white', display: (this.state.turnedOn) ? 'inline' : 'none'}}>ON</span>
                </div>
                <div style={styleButtonOff}>
                <span style={{color: 'white', display: (!this.state.turnedOn) ? 'inline' : 'none'}}>OFF</span>
                </div>
            </div>
        )
    }
}