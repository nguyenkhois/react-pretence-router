import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return ({
        activatedPath: state.router.activatedPath
    })
};

class RouteClass extends React.Component {
    render(){
        const RenderedComponent = this.props.component;
        if (this.props.activatedPath === this.props.path) {
            return <RenderedComponent/>
        }
        return null
    }
};
export const Route = connect(mapStateToProps)(RouteClass);