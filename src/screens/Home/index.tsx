import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { CategorySeletc } from '../../components/CategorySelect';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { styles } from './styles';

export function Home() {
    return(
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <View>
                <CategorySeletc />
            </View>
        </View>
    );
}