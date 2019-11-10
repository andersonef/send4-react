import React from 'react';
import Janela from './Janela';
import Porta from './Porta';
import Interruptor from './Interruptor';

export default class Predio extends React.Component {

    qtdJanelas = 9;

    constructor(props) {
        super(props);

        this.state = {
            style: {
                ...{
                    backgroundColor: 'white',
                    display: 'grid',
                    gridTemplateColumns: '3fr 3fr 3fr',
                    gridTemplateRows: '4fr 4fr 4fr 4fr',
                    padding: 30,
                    paddingBottom: 0,
                    gridGap: '10px 30px'
                }, 
                ...this.props.style
            },
            stylePorta: {
                gridColumn: '2'
            },
            allLightsOn: true,
            janelas: []
        }

        
        for(let i = 0; i < this.qtdJanelas; i++) {
            const ref = React.createRef();
            this.state.janelas.push(<Janela ref={ref} lightOn={this.state.allLightsOn} />);
        }
        this.togglAllLights = this.togglAllLights.bind(this);
    }

    togglAllLights() {
        this.state.janelas.forEach(janela => {
            if (this.state.allLightsOn) {
                janela.ref.current.turnLightOff();
                return;
            }
            janela.ref.current.turnLightOn();
        });
        this.setState((state, props) => {
            return {
                allLightsOn: !state.allLightsOn
            }
        });
    }


    render() {

        return(
            <div style={this.state.style}>
                
                {this.state.janelas}

                <Porta style={this.state.stylePorta}/>

                <Interruptor onClick={this.togglAllLights} style={{width: '25%', height: '33%', marginTop: '4vh', marginLeft: '7vw'}} />
            </div>
        );
    }
}