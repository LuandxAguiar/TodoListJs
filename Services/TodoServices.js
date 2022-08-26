import { ApiService } from "./ApiService";

const endpoint = 'todoList';

export const TodoServices ={

        list(){

            return ApiService.get(endpoint);
        } ,

        create (item){

            return  ApiService.post(endpoint,  item)

        },
        
        remove(id){

            return ApiService.delete(endpoint, id)
        }

} 