import React from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
    // to style app color e.g dark or light 
    const colorScheme = useColorScheme
    const theme = Colors[colorScheme] ?? Colors.light

    
    return (
            <>
                <StatusBar value="auto"/>
                <Stack screenOptions={{
                    headerStyle: { backgroundColor: theme.navBackground },
                    headerTintColor: theme.title
                }}>
                <Stack.Screen name='index' options={{ title: 'Home' }} />
                <Stack.Screen name='about' options={{ title: 'About' }} />
                <Stack.Screen name='contact' options={{ title: 'Contact', }} />
                {/* the heardershown is used to hide or show the header using true or false value  */}
                {/* <Stack.Screen name='contact' options={{ title: 'Contact', headerShown: false}} /> */}

                </Stack>
            </>
        )
}

export default RootLayout

const styles = StyleSheet.create({})
