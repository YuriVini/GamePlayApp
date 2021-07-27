import React from 'react';
import {
    View,
    Text,
    Modal,
    ModalProps,
    TouchableOpacity,
    TouchableOpacityProps,
    TouchableWithoutFeedback,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = ModalProps & TouchableOpacityProps & {
    logOut: () => void;
    closeModal: () => void;
}

export function ModalLogOut({ logOut, closeModal, ...rest }: Props){
    const { secondary90, secondary100 } = theme.colors;

    return (
        <Modal
            transparent
            animationType="slide"
            statusBarTranslucent
            { ...rest }
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <LinearGradient 
                        style={styles.container}
                        colors={[ secondary100, secondary90 ]}
                    >
                            <View style={styles.bar}/>
                            <View style={styles.titleContent}>
                                <Text style={styles.title}>
                                    Deseja sair do <Text style={styles.sizeTitle}>
                                        Game
                                    </Text>
                                    <Text style={styles.redTitle}>
                                        Play
                                    </Text>
                                    ? 
                                </Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity activeOpacity={0.6} onPress={closeModal}>
                                    <View accessible style={styles.borderButton}>
                                        <Text style={styles.buttonTitle}>Não</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.92} onPress={closeModal}>
                                    <View style={styles.colorButton} >
                                        <Text style={styles.buttonTitle}>Sim</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                    </LinearGradient>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}