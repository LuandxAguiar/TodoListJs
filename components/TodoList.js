import react, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { Button } from "react-native-web";

class TodoList extends Component {

    //lista estatica para teste
    static defaultProps = {
        list:[],

        //função delete
        onRemove: () =>{
          //onclick no react native

        }

    }

    // função que controla estrutura da lista(id vs item)
  handleRow = ({ item, index }) => {
    return (
      <View style={{flexDirection: 'row', margin: 10, color: 'black' }}>
        <Text style={{flex: 1}}>
        {this.formatListNumber(index)} - {item.text}
        </Text>
        <Button  title="delete" color="#000" onPress={()=> this.props.onRemove(item)} />
      </View>
    );
  };
  //formata id baseado na posição do array
  formatListNumber(number) {
    const digits = 2;

    return ("0".repeat(digits) + (number + 1)).slice(-digits);
  }

  render() {
    const { props } = this;
    const keyExtractor = (item) => item.id;
    return (
      <View >
       <Text >
        <FlatList
          data={props.list}
          keyExtractor={keyExtractor}
          renderItem={this.handleRow}
        />
        </Text>
      </View>
    );
  }
}

export default TodoList;
