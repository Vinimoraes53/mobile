import Botao from '@/components/Botao';
import styles from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function TelaInicial() {
    return (
        <View style={[styles.centralizado, { gap: 10 }]}>
            <Ionicons name = "laptop-outline" size={100} color="#000000"/>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>Material Didático</Text>
            <Botao>
                <Link href="/stack/downloads" style={{ color: '#fff' }}>
                    Ir para Downloads
                </Link>
            </Botao>
            <Botao>
                <Link href="/" style={{ color: '#fff' }}>
                    Ir para Início
                </Link>
            </Botao>
        </View>
    );
}
