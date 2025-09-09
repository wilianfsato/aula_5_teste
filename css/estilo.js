import {StyleSheet} from
'react-native';

const mascara = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    backgroundColor:'#ecf0f1',
    padding:8,
  },
  paragraph: {
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
    },

  cx1: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#0f0',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  cx2: {
    width: 200,
    height: 200,
    borderWidth: 2,
    backgroundColor:'#0ff',
    marginLeft:20,
    
  },
  titulo:{
    fontSize:20,
    fontStyle:'italic',
    fontWeight:'bold',
    textAlign:'right',
    color:'#00c',
  }
  });
  export default mascara;