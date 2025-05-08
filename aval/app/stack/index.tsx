import Botao from '@/components/Botao';
import styles from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, Text, View } from 'react-native';

export default function TelaInicial() {
    return (
        <View style={[styles.centralizado, { gap: 20, padding: 20 }]}>
            <Ionicons name="play-outline" size={100} color="#3A98FF" />
            <Text style={{ fontSize: 24, fontWeight: '700', color: '#000', textAlign: 'center' }}>
                Começe a Baixar seus Jogos!
            </Text>
            <Text style={{ fontSize: 16, color: '#555', textAlign: 'center' }}>
                Explore os melhores jogos e faça o download das suas categorias favoritas. Divirta-se!
            </Text>
            <Image
                source={{ uri: 'https://conteudo.imguol.com.br/c/entretenimento/dc/2020/05/07/video-games-the-movie-1588857989745_v2_900x506.jpg' }} // Substitua pela URL da imagem
                style={{ width: 200, height: 150, marginVertical: 20 }}
                resizeMode="contain"
            />
            <Botao>
                <Link href="/stack/downloads" style={{ color: '#fff', fontSize: 16 }}>
                    Ir para Downloads
                </Link>
            </Botao>
            <Botao>
                <Link href="/" style={{ color: '#fff', fontSize: 16 }}>
                    Ir para Início
                </Link>
            </Botao>
        </View>
    );
}