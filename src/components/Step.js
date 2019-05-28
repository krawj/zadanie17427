import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
    render() {
        return (
            <div className="step">
                <label htmlFor="step" className="stepLabel">Kroki:</label>
                <input type="number" name="step" onChange={this.props.changeStepCount} min="1" value={this.props.stepCount}></input>
            </div>
        )
    }
}

export default Step;