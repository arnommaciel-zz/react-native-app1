//var React = require('react');
import React from 'react';
//var {Text, View, Button, AppRegistry}  = require('react-native');
import {Text, View, Button, AppRegistry} from 'react-native';

const geraNumero = () => {
    var numero = Math.floor(Math.random()*10);
    alert(numero);
}

const App = () => {
    return (
        <View>
            <Text>Meu App</Text>
            <Button title="Gerar número" onPress={geraNumero}/>
        </View>
    );
};

AppRegistry.registerComponent('app1',() => App);