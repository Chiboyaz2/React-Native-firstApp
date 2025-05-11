import React from 'react'
import { StyleSheet, Text } from 'react-native'


import { Link } from 'expo-router'

//themed components. learn it 
import ThemedView from '../components/ThemedView'
import ThemedCard from '../components/ThemeCard'
import ThemedLogo from '../components/ThemeLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemeText'


const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo />
            <Spacer height={20}/>

            <ThemedText style={[styles.title]} title={true}>
                The Number 1 
            </ThemedText>

            <Spacer height={10}/>
                <ThemedText>Reading List App</ThemedText>
            <Spacer />

            <ThemedCard >
                <ThemedText>
                    Hello, this is a card!
                </ThemedText>
            </ThemedCard>

            <Link href="/login" style={styles.link}>
                <ThemedText>Login Page</ThemedText>
            </Link>

            <Link href="/register" style={styles.link}>
                <ThemedText>Register Page</ThemedText>
            </Link>

            <Link href="/profile" style={styles.link}>
                <ThemedText>Profile Page</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',   
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18
    },

    

    
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    },
})

