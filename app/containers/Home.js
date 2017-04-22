import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    createUser() {
        this.props.createUser();
    }

    render() {
        return (
            <View style={{marginTop: 20}}>
                <Text>
                    Username = {this.props.userData.firstname}
                </Text>
                <TouchableHighlight onPress={() => {this.createUser()}}>
                    <Text>Create User</Text>
                </TouchableHighlight>
            </View>
        );
    }
}