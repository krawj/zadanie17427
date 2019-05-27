import React, { Component } from 'react';
import ButtonsPanel from './ButtonsPanel1';
import Step from './Step';
import './Counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);

        let initValue = 0;

        if ( !isNaN(this.props.initValue) ) {
            initValue = parseInt(this.props.initValue);
        }
 
        this.state = {
            counterValue: initValue,
            step: 1,
        }
    }

    /* ES7
    state = {
        counterValue: 0,
    } */

    changeValue = () => {
        this.setState( (prevValue) => {
            return({
                counterValue: prevValue.counterValue + this.state.step,
            })
        })
    }

    resetCounter = (resetCounter) => {
        let initValue = 0;

        if (!resetCounter) {
            if ( !isNaN(this.props.initValue) ) {
                initValue = parseInt(this.props.initValue);
            }
        }

        this.setState({
            counterValue: initValue
        })
    }

    handleChange = (e) => {
        this.setState({
            step: parseInt(e.target.value),
        })
    }

    render() {
        return(
            <div className="counter">
                Licznik:
                <span className="value">
                    {this.state.counterValue}
                </span>
                <ButtonsPanel changeCounterValue={this.changeValue} resetCounterValue={this.resetCounter} selectedStepCount={this.state.step}/>
                <Step stepCount={this.state.step} changeStepCount={this.handleChange}/>
            </div>
        )
    }
}

export default Counter;