import styles from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export default function TelaFavoritos() {
    return (
        <View style={[styles.centralizado, { gap: 20 }]}>
            <Ionicons name="heart-outline" size={100} color="#FF0000" />
            <Text style={{ fontSize: 24, fontWeight: '700', textAlign: 'center' }}>
                Seus Favoritos
            </Text>
            <Text style={{ fontSize: 16, textAlign: 'center', color: '#555' }}>
                Aqui você encontrará todos os itens que marcou como favoritos. 
                Explore suas categorias favoritas e continue aproveitando!
            </Text>
        </View>
    );
}