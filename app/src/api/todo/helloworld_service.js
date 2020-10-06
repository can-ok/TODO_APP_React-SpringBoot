
import axios from 'axios';

class HelloWorldService{

    executeHelloWorldService(){
        return axios.get('/hello');
    }
    
    executeHelloWorldPath(name){
        //auth
        let username='canok'
        let password='123456'

        //let basicAuthHeader=`Basic `+window.btoa(username+":"+password)

        let requestpath=`/hello/${name}`;
        return axios.get(requestpath);
            // {
            //     headers:{
            //         authorization:basicAuthHeader
            //     }
            // })
    }
    
}

export default new HelloWorldService();