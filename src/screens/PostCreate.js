import React, { useState } from 'react';
import {
    SafeAreaView,
    Dimensions,
    StyleSheet,
    ImageBackground,
    Alert,
} from 'react-native';
import { Input, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { actions } from '../store'
const height = Dimensions.get('window').height/1.2
const width = Dimensions.get('window').width

const PostCreate = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');

    const send = () => {
        
        ///VALIDACIONES
        props.createPost({ title, body, direccion, telefono }).then(() => {
            if(title){
                Alert.alert("Restaurant creado")
            }
            props.navigation.goBack()
        })
    }
    
        return (
            <SafeAreaView>
                <ImageBackground
                    style={styles.content}
                    source={require('../assets/images/fondo6.jpg')}
                >
                    <Input
                        placeholder='Nombre Restaurant'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={title}
                        onChangeText={(value) => setTitle(value)}
                    />
                    <Input
                        placeholder='Tipo de cocina'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)',
                            pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={body}
                        onChangeText={(value) =>setBody(value)}
                    />
                    <Input
                        placeholder='Direccion'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)',
                            pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={direccion}
                        onChangeText={(value) => setDireccion(value)}
                    />
                    <Input
                        placeholder='Telefono'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)',
                            pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={telefono}
                        onChangeText={(value) => setTelefono(value)}
                    />
                    <Button title='Guardar' onPress={() => send()}
                        style={{ width: width * 0.8 }} />
                </ImageBackground>
               
            </SafeAreaView>
        )
    
}
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        // color:'#fff',
        textAlign: 'center'
    },
    content: {
        height,
        width,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
const mapDispatchToProps = dispatch => ({
    createPost: (data) =>
        dispatch(actions.posts.createPost(data)),
})
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, mapDispatchToProps)((PostCreate))
