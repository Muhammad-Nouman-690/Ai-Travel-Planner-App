import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { SelectTravelesList } from '../../constants/Option'
import OptionCard from '../../components/CreateTrip/OptionCard';

export default function SelectTraveler() {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, [])
    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.WHITE,
            height: '100%'
        }}>
            <Text
                style={{
                    fontSize: 35,
                    fontFamily: 'outfit-bold',
                    marginTop: 20
                }}
            >Who's Traveling</Text>

            <View style={{
                marginTop: 20
            }}>
                <Text style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 23
                }}>
                    Choose your traveles
                </Text>
                <FlatList
                data={SelectTravelesList}
                renderItem={(item,index)=>(
                    <View>
                        <OptionCard option={item}/>
                    </View>
                )}
                />
            </View>

        </View>
    )
}