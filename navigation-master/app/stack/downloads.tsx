import Botao from '@/components/Botao';
import styles from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function TelaDownloads() {
    return (
        <View style={[styles.centralizado, { gap: 10 }]}>
            <Ionicons name = "download-outline" size={100} color="#000000"/>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>Downloads</Text>
            <Botao>
                <Link href="../stack" style={{ color: '#fff' }}>
                    Voltar
                </Link>
            </Botao>
        </View>
    );
}
