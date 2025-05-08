import Botao from '@/components/Botao';
import styles from '@/constants/styles';
import useFormUsuario from '@/hooks/useFormUsuario';
import Cpf from '@/utils/Cpf';
import { Text, TextInput, View } from 'react-native';

export default function TelaFormulario() {
    const { usuario, erros, setUsuario, salvar } = useFormUsuario();

    return (
        <View style={styles.centralizado}>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>Login</Text>
            <TextInput
                placeholder="Nome"
                value={usuario.nome ?? ''}
                style={[styles.input, erros.nome && styles.inputError]}
                onChangeText={(nome) => setUsuario({ ...usuario, nome })}
            />
            {erros.nome && <Text style={{ color: 'red' }}>{erros.nome}</Text>}

            <TextInput
                placeholder="CPF"
                value={usuario.cpf ?? ''}
                style={[styles.input, erros.cpf && styles.inputError]}
                keyboardType="phone-pad"
                onChangeText={(cpf) => setUsuario({ ...usuario, cpf: Cpf.formatar(cpf) })}
            />
            {erros.cpf && <Text style={{ color: 'red' }}>{erros.cpf}</Text>}

            <Botao onPress={salvar}>
                <Text style={{ color: '#fff' }}>Salvar</Text>
            </Botao>
        </View>
    );
}