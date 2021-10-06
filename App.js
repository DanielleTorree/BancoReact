import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  StatusBar,
  Switch,
  KeyboardAvoidingView
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Slider from '@react-native-community/slider';

const App = () => {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [isEstudante, setIsEstudante] = useState(false);
  const [sexo, setSexo] = useState('masc');
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);
  const [sliderValue, setSliderValue] = useState(0)

  const abrirConta = () => {
    if(nome === ''){
      alert('Preencha todos os campos para prosseguir!');
      return;
    }

    if(idade === ''){
      alert('Preencha todos os campos para prosseguir!');
      return;
    }

    if(sliderValue === 0){
      alert('Adicione um limite de crédito para prosseguir!')
      return;
    }

    alert(`
      Nome: ${nome} 
      Idade: ${idade} 
      Sexo: ${sexo === 'masc' ? 'Masculino' : 'Feminino'} 
      Limite de crédito: R$${sliderValue.toFixed(2).replace('.', ',')} 
      Estudante: ${isEstudante ? 'Sim' : 'Não' }
    `)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="dark-content" backgroundColor='#FFF5'/>
      
      <View style={styles.containerInfo}>

        <Text style={styles.title}> Banco React </Text>

        <Text style={styles.txt}>Nome</Text>
        <TextInput 
          style={styles.txtInput}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />

        <Text style={styles.txt}>Idade</Text>
        <TextInput 
          style={styles.txtInput}
          placeholder="Digite sua idade"
          value={idade}
          onChangeText={(text) => setIdade(text)}
          keyboardType="numeric"
          
        />

        <Text style={styles.txt}>Sexo</Text>
        <Picker
          selectedValue={sexo}
          style={styles.optionPicker}
          onValueChange={(itemValue) =>
            setSexo(itemValue)
          }
        >
          <Picker.Item label="Masculino" value="masc"/>
          <Picker.Item label="Feminino" value="femi" />
        </Picker>

        <Text style={styles.txt}>Limite R$ {sliderValue === 0 ? sliderValue : sliderValue.toFixed(2).replace('.', ',')}</Text>
        <Slider
          style={styles.slide}
          minimumValue={minValue}
          maximumValue={maxValue}
          minimumTrackTintColor="#94F281"
          maximumTrackTintColor="#FF3300"

          step={1}
          value={sliderValue}
          onValueChange={(sliderValue) => setSliderValue(sliderValue)}          
        />
        
        <Text style={styles.txt}>Estudante</Text>
        <Switch 
          trackColor={{ false: "#767577", true: "#FF330099" }}
          thumbColor={isEstudante ? "#FF3300" : "#f4f3f4"}

          value={isEstudante}
          onValueChange={() => setIsEstudante(!isEstudante)}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => abrirConta()}
        >
          <Text style={styles.txtBtn}>Abrir Conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: '#000000',
    marginBottom: 50
  },
  containerInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 22,
    color: '#000000',
    marginVertical: 10
  },
  txtInput: {
    backgroundColor: '#ccc5',
    width: '80%',
    borderRadius: 10
  },
  optionPicker: {
    height: 50, 
    width: 150
  },
  slide: {
    width: '80%',
  },
  btn: {
    backgroundColor: '#FF3300',
    width: 180,
    borderRadius: 10,
    marginVertical: 30
  },
  txtBtn: {
    fontSize: 22,
    color: '#FFFFFF',
    marginVertical: 10,
    textAlign: 'center'
  }
})

export default App;