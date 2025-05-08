import styles from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export default function TabInicial() {
    return (
        <View style={styles.centralizado}>
        <View style =  {{alignItems: 'center'}}>
            <Ionicons name = "game-controller-outline" size={100} color="#000000"/>
            <Text style ={{fontSize: 20, fontWeight:700}}>
            Jogos
            </Text>
            <Text style={{ fontSize: 16, textAlign: 'center', color: '#555' }}>
            Explore os melhores jogos e categorias. Divirta-se com as opções disponíveis!
              </Text>
          </View>
        </View>
      );
    }
    