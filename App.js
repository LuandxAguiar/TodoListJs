import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './components/TodoList.js';
import Form from './components/Form.js';

import { TodoServices } from './Services/TodoServices.js';
import React from 'react';


export default class App extends React.Component{
   state = {
    list:[],
  }
  //chamando a  lista 
  async componentDidMount(){

   const list = await TodoServices.list();
   //setando state para atualizar a lista, apos ser adicionado algo ao todoList 
   this.setState(list);
  }

  // criando função  heroFunction não deixa o escopo ser alterado 

  add = async(text) =>{
    

    // quando for converter usar entre chaves 
   const newItem = await TodoServices.create({text});
   const list = [...this.state.list, newItem];
   this.setState({list});

  }
  //fução remover, apos a lista filtrado, quando for mudado o status ela ira filtrar o id que foi excluido 
  //logo mudamos o status do mesmo 
  remove = async (item) =>{

    await TodoServices.remove(item.id);
    const list = this.state.list.filter(itemList => itemList.id !== item.id)
    this.setState({list});
  }

  render(){
    const {state} = this; 

    return (
        <View style={styles.container}>
          <Form onAdd={this.add}/>
          <TodoList list={state.list}onRemove={this.remove}/>
          <StatusBar style="auto" />
        </View>
      );
    }
    }

const styles = StyleSheet.create({
  container: {
 
    backgroundColor: 'purple',
    alignItems: 'center',
    paddingTop: 5,
  },
});
