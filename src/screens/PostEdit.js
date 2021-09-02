import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ImageBackground,
    Dimensions,
    StyleSheet,
    Image,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { actions } from '../store';

const height = Dimensions.get('window').height/1.2
const width = Dimensions.get('window').width

const PostEdit = (props) => {

    const { item } = props.route.params;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [url, setUrl] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');

    useEffect(() => {
        if (item) {
            setTitle(item.title);
            setBody(item.body);
            setUrl(item.url);
            setDireccion(item.direccion);
            setTelefono(item.telefono);
        }
    }, [item]);

    const update = () => {
        ///VALIDATIONS
        const { id } = item;
        props.updatePost({ title, body, url, direccion, telefono, id }).then(() => {
            props.navigation.popToTop();
        });
    }
    return (
        <SafeAreaView>
            <ImageBackground
                style={styles.content}
                source={require('../assets/images/fondo6.jpg')}
            >
                <Input
                    placeholder='Restaurant'
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
                    placeholder='Tipo de Cocina'
                    inputContainerStyle={{
                        width: width * 0.8, alignItems: 'flex-start',
                        alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)',
                        pading: 10
                    }}
                    inputStyle={{ color: 'white', marginLeft: 15 }}
                    placeholderTextColor='#ccc'
                    value={body}
                    onChangeText={(value) => setBody(value)}
                />
                <Input
                    placeholder='URL Imagen'
                    inputContainerStyle={{
                        width: width * 0.8, alignItems: 'flex-start',
                        alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)',
                        pading: 15
                    }}
                    inputStyle={{ color: 'white', marginLeft: 15 }}
                    placeholderTextColor='#ccc'
                    value={url}
                    onChangeText={(value) => setUrl(value)}
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
                <Button title='Guardar' onPress={() => update()}
                    style={{ width: width * 0.8 }} />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    content: {
        height: 400,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapDispatchToProps = dispatch => ({
    updatePost: (data) =>
        dispatch(actions.posts.updatePost(data)),
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)((PostEdit));