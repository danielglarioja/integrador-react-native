import React from 'react';
import Posts from '../screens/Posts';
import PostDetail from '../screens/PostDetail';
import PostEdit from '../screens/PostEdit';
import PostCreate from '../screens/PostCreate';
import { createStackNavigator } from '@react-navigation/stack';

const PostsStack = createStackNavigator();

export const PostsStackScreen = () => {
    return (
        <PostsStack.Navigator>
            <PostsStack.Screen 
            name="Posts"
            component={Posts} 
            options={{
                title: 'Post',
                headerStyle: {
                    backgroundColor: `rgba( 19, 25, 29, .8)`,
                },
                headerTintColor: 'rgb(118, 177, 195)',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            />
            <PostsStack.Screen
                name="PostDetail"
                component={PostDetail}
                options={{
                    title: 'Post Detail',
                    headerTintColor: 'rgb(118, 177, 195)',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    
                }}
            />
            <PostsStack.Screen
                name="PostEdit"
                component={PostEdit}
                options={{
                    title: 'Post Edit',
                    headerTintColor: 'rgb(118, 177, 195)',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    
                }}
            />
            <PostsStack.Screen
                name="PostCreate"
                component={PostCreate}
                options={{
                    title: 'Post Create',
                    headerTintColor: 'rgb(118, 177, 195)',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    
                }}
            />
        </PostsStack.Navigator>
    )
}