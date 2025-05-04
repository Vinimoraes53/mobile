import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Início',
            title: 'Bem-vindo',
            drawerIcon: () => (
              <Ionicons name="home-outline" size={18} color="#3A98FF" />
          ),
          }}
        />
         <Drawer.Screen
                    name="form"
                    options={{
                        drawerLabel: 'Entrar',
                        title: 'Cadastro',
                        drawerIcon: () => (
                            <Ionicons name="desktop-outline" size={18} color="#3A98FF" />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="tabs"
                    options={{
                        drawerLabel: 'Aulas',
                        title: 'Aulas',
                        drawerIcon: () => (
                            <Ionicons name="albums-outline" size={18} color="#3A98FF" />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="stack"
                    options={{
                        drawerLabel: 'Downloads',
                        title: 'Downloads',
                        drawerIcon: () => (
                            <Ionicons name="download-outline" size={18} color="#3A98FF" />
                        ),
                    }}
                />
        
      </Drawer>
    </GestureHandlerRootView>
  );
}
