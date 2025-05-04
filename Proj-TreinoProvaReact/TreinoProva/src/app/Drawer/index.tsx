import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { Pressable, View, Text, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function DrawerHome() {

    const router = useRouter()
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const time = setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => clearTimeout(time)
    }, [])


    useEffect(() => {

    })

    if (loading) {
        return (
            <View className='flex-1 justify-center items-center'>
                <ActivityIndicator size={50} color={'blue'} />

            </View>
        )
    }

    return (
        <View className='flex-1' >

            {/* Header */}
            <View className='w-full justify-between flex-row '>
                <Pressable
                    onPress={() => router.replace('/')}
                    className='shadow-md bg-red-500 rounded-md ml-[10px] top-[10px] gap-[2px] w-fit h-fit p-[5px] group flex-row-reverse '>
                    <Text className='font-sans text-[13pt] text-white font-medium'>Voltar</Text>
                    <Ionicons className='top-[5px] group-hover:animate-custom-bounce' name='arrow-back' size={15} color={"white"} />
                </Pressable>
                {/* Botão Drawer */}
                <Pressable
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    className="h-fit hover:animate-pulse active:border-[2px] duration-[700ms] rounded-[10px] p-[7px]"
                >
                    <Ionicons name="menu" size={29} color="black" />
                </Pressable>

            </View>
            {/* body */}
            <View className='w-full h-[500px] mt-[7%] '>

                <View className='w-full items-center'>
                    <Text className='text-[25pt] font-mono'>Bem vindo de volta</Text>

                </View>

                {/* formulário */}
                <View>
                    <TextInput placeholder='' />

                </View>
            </View>
        </View>
    );
}