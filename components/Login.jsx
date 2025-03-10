import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/app-example/constants/Colors'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
    const router = useRouter();
    
    return (
        <SafeAreaView>
            <Image source={require('../assets/images/login.jpeg')}
                style={{
                    width: '100%',
                    height: 520
                }}
            />
            <SafeAreaView style={styles.container}>
                <Text style={{
                    fontSize: 35,
                    fontFamily: 'outfit-bold',
                    textAlign: 'center',
                    marginTop: 10,

                }}>AI Travel Planner</Text>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 17,
                    textAlign: 'center',
                    Color: Colors.GRAY,
                    marginTop: 25,
                    marginBottom: 25
                }}>Discover your next adventure effortlessly. Personalized itineraries at your fingertips. Travel smarter with AI-driven insights.</Text>
                <TouchableOpacity style={styles.button}
                onPress={()=>router.push('auth/sign-in')}
                >
                    <Text style={{
                        color: Colors.WHITE,
                        textAlign: 'center',
                        fontFamily: 'outfit',
                        fontSize: 17,
                    }}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 25,
        height: '100%',
    },
    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: '20%'
    }
})