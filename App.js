import {Text,SafeAreaView,View} from 'react-native';

import mascara from './css/estilo';

export default function App(){
  return (
    <SafeAreaView style={mascara.container}>   
     <Text style={mascara.paragraph}>
       aula 5 
    </Text>
    <View style={mascara.cx1}></View>
    
    <Text style={mascara.titulo}>Suzano</Text>
    <View style={mascara.cx2}></View>
    <Text>usando o GIThub desktop na aula do prof anselmo</Text>
    </SafeAreaView>
  );
}