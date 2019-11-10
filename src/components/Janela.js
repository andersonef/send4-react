import React from 'react';

export default class Janela extends React.Component {

    constructor(props) {
        super(props);
        const lightOn = (props.lightOn === undefined) ? true : props.lightOn;
        this.state = {
            lightOn: lightOn,

            style: {...{
                backgroundColor: 'darkgray',
                cursor: 'pointer',
                display: 'grid',
                gridTemplateColumns: '2fr 2fr',
                gridTemplateRows: '2fr 2fr',
                gridGap: 2
            }, ...this.props.style},

            styleVidro: {
                
            }
        };
        
        this.toggleLight = this.toggleLight.bind(this);
        this.turnLightOff = this.turnLightOff.bind(this);
        this.turnLightOn = this.turnLightOn.bind(this);
    }

    turnLightOff() {
        this.setState((state, props) => {
            return {
                lightOn: false
            }
        })
    }

    turnLightOn() {
        this.setState((state, props) => {
            return {
                lightOn: true
            }
        });
    }

    toggleLight() {
        this.setState((state, props) => {
            return {
                lightOn: !state.lightOn
            }
        })
    }



    render() {
        const styleVidro = {
            backgroundColor : (this.state.lightOn) ? 'yellow' : '#333'
        };

        return (
            <div style={this.state.style} onClick={this.toggleLight}>
                <div style={styleVidro}></div>
                <div style={styleVidro}></div>
                <div style={styleVidro}></div>
                <div style={styleVidro}></div>
            </div>
        )
    }
}