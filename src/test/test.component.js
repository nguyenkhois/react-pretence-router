import React, { Component } from 'react';
import { connect } from 'react-redux';

export const testReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_TIMESTAMP':
            return ({ ...state, timestamp: Date.now() })
        default:
            return state
    }
};

const testAction = {
    setTimeStamp: () => ({ type: 'SET_TIMESTAMP' })
};

const mapDispatchToProps = {
    setTimeStampNow: testAction.setTimeStamp
};

const mapStateToProps = (state) => {
    return ({
        datetime: state.testReducer.timestamp
    })
};

class Test extends Component {
    componentDidMount() {
        this.props.setTimeStampNow();
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.setTimeStampNow();
    }

    render() {
        return (
            <div>
                <p>Timestamp: {this.props.datetime}</p>
                <button onClick={e => this.handleClick(e)}>Set timestamp</button>
            </div>
        )
    }
};
export const TestX = connect(mapStateToProps, mapDispatchToProps)(Test);