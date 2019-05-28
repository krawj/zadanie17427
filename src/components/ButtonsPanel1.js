import React, { Component } from 'react';
import './ButtonsPanel.css';

class ButtonsPanel extends Component {
    resetOrReinitCounter = (reset) => {
        this.props.resetCounterValue(reset);
    }

    render() {
        let stepCountLabel = (!isNaN(this.props.selectedStepCount) ? this.props.selectedStepCount : 1);
        return (
            <div className="buttons-panel">
                <button onClick={this.props.changeCounterValue}>{`Add ${stepCountLabel}`}</button>
                <button onClick={ () => this.resetOrReinitCounter(false) }>ReInit</button>
                <button onClick={ () => this.resetOrReinitCounter(true) }>Reset</button>
            </div>
        )
    }
}

export default ButtonsPanel;