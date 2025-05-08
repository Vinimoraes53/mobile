import styles from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export default function TelaCursos() {
    const categoriasJogos: { nome: string; icone: keyof typeof Ionicons.glyphMap }[] = [
        { nome: 'Esporte', icone: 'football-outline' },
        { nome: 'Aventura', icone: 'compass-outline' },
        { nome: 'RPG', icone: 'game-controller-outline' },
        { nome: 'Corrida', icone: 'car-outline' },
    ];

    return (
        <View style={[styles.centralizado, { gap: 10 }]}>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>Categorias de Jogos</Text>
            {categoriasJogos.map((categoria, index) => (
                <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                    <Ionicons name={categoria.icone} size={24} color="#000" style={{ marginRight: 10 }} />
                    <Text style={{ fontSize: 16 }}>{categoria.nome}</Text>
                </View>
            ))}
        </View>
    );
}