import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Home from './Home';

class AppContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <Home {...this.props} />
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        userData: state.userData
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
