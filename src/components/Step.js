import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
    render() {
        return (
            <div className="step">
                <label htmlFor="step" className="stepLabel">Kroki:</label>
                <select name="step" onChange={this.props.changeStepCount}>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>
        )
    }
}

export default Step;