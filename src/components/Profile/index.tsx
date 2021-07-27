import React, { useState } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { ModalLogOut } from '../ModalLogOut';
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar';
import { styles } from './styles';



export function Profile(){
    const { user, signOut } = useAuth();
    const [logOutModal, setLogOutModal] = useState(false);

    function handleOpenModalLogOut(){
        setLogOutModal(true);
    }

    function handleCloseModalLogOut(){
        setLogOutModal(false);
    }

    return (
        <View style={styles.container}>
            <RectButton onPress={handleOpenModalLogOut}>
                <Avatar urlImage={user.avatar}/>
            </RectButton>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        {user.firstName}
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>

            <ModalLogOut 
                visible={logOutModal} 
                closeModal={handleCloseModalLogOut}
                logOut={signOut}
            />
            
        </View>
    );
}