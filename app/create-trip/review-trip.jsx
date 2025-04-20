import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CreateTripContext } from '../../context/CreateTripContext';
import moment from 'moment';

export default function ReviewTrip() {
    const navigation = useNavigation();
    const { tripData, setTripData } = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, [])

    return (
        <View style={{
            paddingTop: 75,
            padding: 25,
            backgroundColor: Colors.WHITE,
            height: '100%'
        }}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 35,
                marginTop: 20
            }}>Review Your Trip</Text>
            <View style={{
                marginTop: 20
            }}>
                <Text style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 20,
                }}>
                    Before generating your trip, please review your selection
                </Text>
                {/* Destination Info */}
                <View style={{
                    marginTop: 40,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20
                }}>
                    <FontAwesome6 name="location-pin-lock" size={34} color="black" />
                    <View>
                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 20,
                            color: Colors.GRAY
                        }}>Destination</Text>
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20
                        }}>{tripData?.locationInfo?.name}</Text>
                    </View>
                </View>

                {/* Date Selected Info */}
                <View style={{
                    marginTop: 25,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20
                }}>
                    <FontAwesome5 name="calendar-day" size={34} color="black" />
                    <View>
                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 20,
                            color: Colors.GRAY
                        }}>Travel Date</Text>
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20
                        }}>{moment(tripData?.startDate).format('DD MM')
                            + " to " +
                            moment(tripData?.endDate).format('DD MM') + "   "}
                            ({tripData?.totalNoOfDays} days)
                        </Text>
                    </View>
                </View>

                {/* Traveles Info */}
                <View style={{
                    marginTop: 25,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20
                }}>
                    <MaterialIcons name="travel-explore" size={34} color="black" />
                    <View>
                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 20,
                            color: Colors.GRAY
                        }}>Who is Travelling</Text>
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20
                        }}>{tripData?.traveler?.title}</Text>
                    </View>
                </View>

                {/* Budget Info */}
                <View style={{
                    marginTop: 25,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20
                }}>
                    <FontAwesome6 name="sack-dollar" size={34} color="black" />
                    <View>
                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 20,
                            color: Colors.GRAY
                        }}>Budget</Text>
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20
                        }}>{tripData?.budget}</Text>
                    </View>
                </View>

            </View>
            <TouchableOpacity style={{
                padding: 15,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 15,
                marginTop: 80
            }} >
                <Text style={{
                    textAlign: 'center',
                    color: Colors.WHITE,
                    fontFamily: 'outfit-medium',
                    fontSize: 20
                }}>
                    Build My Trip
                </Text>

            </TouchableOpacity>
        </View>
    )
}