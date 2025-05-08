import Cpf from '@/utils/Cpf';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function useFormUsuario() {
    const [usuario, setUsuario] = useState<any>({});
    const [erros, setErros] = useState<any>({});

    useEffect(() => {
        AsyncStorage.getItem('usuario').then((usuario) => {
            if (usuario) {
                setUsuario(JSON.parse(usuario));
            }
        });
    }, []);

    function validar() {
        let erros = {};

        // Validação do nome
        if (!usuario.nome) {
            erros = { ...erros, nome: 'Nome é obrigatório' };
        } else if (usuario.nome.length < 3) {
            erros = { ...erros, nome: 'Nome deve ter no mínimo 3 caracteres' };
        }

        // Validação do CPF
        if (!usuario.cpf) {
            erros = { ...erros, cpf: 'CPF é obrigatório' };
        } else if (!Cpf.validar(usuario.cpf)) {
            erros = { ...erros, cpf: 'CPF inválido' };
        }

        setErros(erros);
        return Object.keys(erros).length === 0;
    }

    function salvar() {
        if (validar()) {
            AsyncStorage.setItem('usuario', JSON.stringify(usuario));
        }
    }

    return {
        usuario,
        erros,
        setUsuario,
        salvar,
    };
}