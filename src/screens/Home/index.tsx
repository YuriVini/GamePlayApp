import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from './styles';
import { CategorySeletc } from '../../components/CategorySelect';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { Load } from '../../components/Load';

export function Home() {
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

    const navigation = useNavigation();


    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails(guildSelected: AppointmentProps){
        navigation.navigate('AppointmentDetails', { guildSelected });
    }

    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate');
    }

    async function loadAppointment() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];
        
        if(category) {
            setAppointments(storage.filter(item => item.category === category));
        } else {
            setAppointments(storage);
        }
        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointment();
    }, [category]));

    return(
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>
        
            <CategorySeletc 
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            {
                loading
                ?   <Load />
                :   <>
                        <ListHeader 
                            title="Partidas Agendadas"
                            subtitle={`Total ${appointments.length}`}
                        />
                        
                        <FlatList 
                            data={appointments}
                            keyExtractor={ item=> item.id}
                            renderItem={({ item }) => (
                                <Appointment 
                                    data={item} 
                                    onPress={() => handleAppointmentDetails(item)}
                                />
                            )}
                            ItemSeparatorComponent={() => <ListDivider />}
                            contentContainerStyle={{paddingBottom: 69}}
                            style={styles.matches}
                            showsVerticalScrollIndicator={false}
                        />
                    </>
            }
        </Background>
    );
}