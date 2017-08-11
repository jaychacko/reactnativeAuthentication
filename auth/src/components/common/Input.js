import React , {Component} from 'react';
import {TextInput,View,Text} from 'react-native';


const Input =({label})=> {

    return (
        <view>
            <Text>
             {label}
            </Text>
        </view>
    )
}

export {Input};