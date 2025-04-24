import { View, Text, Image } from 'react-native'
import React, { createContext } from 'react'
import { Colors } from '../../constants/Colors'
import { useContext } from 'react'

export default function GenerateTrip() {

    // const { tripData, setTripData } = useContext(createContext);
    
    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.WHITE,
            height: '100%'
        }}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 35,
                textAlign: 'center',
            }}>Please Wait...</Text>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 20,
                textAlign: 'center',
                marginTop: 40,
            }}>We are working to generate your dream trip</Text>

            <Image source={require('./../../assets/images/plane.gif')}
                style={{
                    width: '100%',
                    height: 250,
                    objectFit: 'contain'
                }}
            />
            <Text style={{
                fontFamily: 'outfit',
                color: Colors.GRAY,
                fontSize: 20,
                textAlign: 'center'
            }}>Do not Go Back</Text>
        </View>
    )
}