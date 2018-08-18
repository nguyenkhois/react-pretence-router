import React from 'react';
import { connect } from 'react-redux';
import { routerActions } from './actions';

const mapDispatchToProps = {
    setActivatedPath: routerActions.setActivatedPath
};

class LinkClass extends React.Component {
    handleClick = (e, sPath) => {
        e.preventDefault();
        this.props.setActivatedPath(sPath);
    }

    render() {
        return (
            <div>
                <a href="#"
                    className={this.props.css}
                    onClick={e => this.handleClick(e, this.props.to)}>
                    {this.props.name}
                </a>
            </div>
        )
    }
};
export const Link = connect(null, mapDispatchToProps)(LinkClass);