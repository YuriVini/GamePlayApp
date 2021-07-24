import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
    View,
    ScrollView,
    Text,
    Image,
} from 'react-native';
import { styles } from './styles';
import { categories } from '../../utils/categories';
import { Category } from '../../Category';

type Props = {
    categorySelected: string;
}

export function CategorySeletc({categorySelected}: Props){
    return(
        <ScrollView 
            horizontal
            style={styles.container} 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}    
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.tittle}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                    />
                ))
            }
        </ScrollView>
    );
}