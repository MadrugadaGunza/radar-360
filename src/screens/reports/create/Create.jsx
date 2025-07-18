import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker'; // Importando o Document Picker
import { ChevronLeftIcon, PaperClipIcon } from 'react-native-heroicons/solid';
import { styles } from './Create.style';
import { Picker } from '@react-native-picker/picker';
import Input from './../../../components/input/Input';
import DropDownPicker from 'react-native-dropdown-picker';
import Dropdown from '../../../components/dropdown/Dropdown';

const listTypesReport = [
    { label: 'Corrupção', value: 'corrupcao' },
    { label: 'Assédio Moral', value: 'assedio moral' },
    { label: 'Assédio Sexual', value: 'assedio sexual' },
    { label: 'Conflito de Interesses', value: 'conflito de interesses' },
    { label: 'Furto ou Roubo de Bens da Empresa', value: 'furto' },
    { label: 'Violação de Políticas Internas', value: 'violacao de politicas internas' },
    { label: 'Irregularidades em Recrutamento', value: 'irregularidades em recrutamento' },
]

const Create = () => {
    const [tipo, setTipo] = useState(null);
    const [descricao, setDescricao] = useState('');
    const [local, setLocal] = useState('');
    const [arquivo, setArquivo] = useState(null);

    const escolherArquivo = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({});
            if (result.type === 'success') {
                setArquivo(result);
            } else {
                Alert.alert('Aviso', 'Nenhum arquivo selecionado.');
            }
        } catch (err) {
            console.error(err);
            Alert.alert('Erro', 'Falha ao tentar selecionar o arquivo.');
        }
    };

    const handleSubmit = () => {
        console.log({ type: tipo, description: descricao, location: local });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Fazer Denúncia</Text>
                <Text style={styles.subtitle}>Preencha todos os campos</Text>
            </View>
            <View style={styles.form}>
                <Dropdown
                    label='Tipo de Denúncia'
                    placeholder='Selecione uma opção'
                    value={tipo}
                    setValue={setTipo}
                    items={listTypesReport}
                />

                <Text>Descrição da Denúncia</Text>
                <TextInput
                    style={styles.textarea}
                    multiline={true}
                    numberOfLines={5}
                    placeholder="Descreva a sua denúncia aqui"
                    textAlignVertical="top"
                    value={descricao}
                    onChangeText={setDescricao}
                />

                <Input
                    style={styles.input}
                    label='Local (especificou ou aproximado)'
                    placeholder="Ex: Rua X, nº 123, Bairro Y"
                    value={local}
                    onChangeText={setLocal}
                />

                <Text>Evidência</Text>
                <TouchableOpacity style={styles.btnVoltar} onPress={escolherArquivo}>
                    <PaperClipIcon size={24} style={styles.icon} />
                </TouchableOpacity>

                {arquivo && (
                    <Text style={styles.fileInfo}>
                        Arquivo Selecionado: {arquivo.name} ({arquivo.size} bytes)
                    </Text>
                )}

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.btnText}>Denúnciar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Create;
