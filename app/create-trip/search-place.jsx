import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../app-example/constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from './../../context/CreateTripContext';

export default function SearchPlace() {
    const navigation = useNavigation();
    const { tripData, setTripData } = useContext(CreateTripContext);
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Search'
        })
    }, []);

    useEffect(() => {
        console.log(tripData);
    }, [tripData]);

    return (
        <View
            style={{
                padding: 25,
                paddingTop: 75,
                backgroundColor: Colors.WHITE,
                height: '100%'
            }}
        >
            <GooglePlacesAutocomplete
                placeholder='Search Place'
                fetchDetails={true}
                onPress={(data, details = null) => {
                    console.log("Place data:", data.description);
                    console.log("Place location:", details?.geometry.location);
                    console.log("Place photo:", details?.photos[0]?.photo_reference);
                    console.log("Place url:", details?.url);
                    setTripData({
                        locationInfo: {
                            name: data.description,
                            coordinates: details?.geometry.location,
                            photoRef: details?.photos[0]?.photo_reference,
                            url: details?.url
                        }
                    })
                }}
                query={{
                    key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
                    language: 'en',
                }}
                styles={{
                    textInputContainer:{
                        borderWidth:1,
                        borderRadius:5,
                        marginTop:25
                    }
                }}
            />
        </View>
    )
}