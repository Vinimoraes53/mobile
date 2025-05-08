import { Ionicons } from '@expo/vector-icons'
import { Tabs, useNavigation } from 'expo-router'

export default function Layout(props: any) {
    const nav: any = useNavigation()

    function icone(nome: any) {
        const IconComponent = (props: any) => (
            <Ionicons name={nome} size={18} color={props.focused ? '#3A98FF' : '#000'} />
        )
        IconComponent.displayName = `Icon(${nome})`
        return IconComponent
    }

    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Início',
                    tabBarIcon: icone('home-outline'),
                }}
            />
            <Tabs.Screen
                name="cursos"
                options={{
                    title: 'Categoria',
                    tabBarIcon: icone('list-outline'),
                }}
            />
            <Tabs.Screen
                name="config"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: icone('heart-outline'),
                }}
            />
            <Tabs.Screen
                name="op"
                options={{
                    title: 'Opções',
                    tabBarIcon: icone('menu'),
                }}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault()
                        nav?.openDrawer()
                    },
                }}
            />
        </Tabs>
    )
}