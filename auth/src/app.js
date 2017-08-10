import React , {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common/Header';
import LoginForm from './components/LoginForm'

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAoKLmoa27QZRm8DBYQbt1GSYoIW95nHaA",
            authDomain: "authentication-fb74d.firebaseapp.com",
            databaseURL: "https://authentication-fb74d.firebaseio.com",
            projectId: "authentication-fb74d",
            storageBucket: "authentication-fb74d.appspot.com",
            messagingSenderId: "496102197778"
        })
    }
    render(){

        return (
            <View>
                <Header headerText= "Authentication"/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;