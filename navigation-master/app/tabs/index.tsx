import styles from '@/constants/styles'
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native'

export default function TabInicial() {
    return (
        <View style={styles.centralizado}>
        <View style =  {{alignItems: 'center'}}>
            <Ionicons name = "film-outline" size={100} color="#000000"/>
            <Text style ={{fontSize: 20, fontWeight:700}}>
            Videoaulas
            </Text>
          </View>
        </View>
      );
    }
    
