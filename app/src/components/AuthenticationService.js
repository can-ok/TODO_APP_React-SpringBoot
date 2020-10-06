import axios from 'axios'

class Authentication{

    executeBasicAuthenticationService(username,password){
        let basicAuthHeader=`Basic `+window.btoa(username+":"+password)

        return axios.get("/basicauth",
                                        {
                                        headers:{
                                            authorization:basicAuthHeader
                                        }
                                        });

    }

    registerSuccesfullyLogin(username,password){

 
        sessionStorage.setItem("authenticatedUser",username);
        this.setupAxiosIntercepter(username,password);
    }

    executeJWTAuthentaicationService(username,password){
        //localhost:8080/authenticate
        return axios.post("/authenticate",{
            username:username,
            password:password
        });
    }

    registerSuccessfulLoginForJWT(username,token){

        let JWT_Token=`Bearer `+token
        sessionStorage.setItem('authenticatedUser',username)
        this.setupAxiosIntercepter(JWT_Token)

    }

    logout(){

        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLogedIn(){
        let user_item =sessionStorage.getItem('authenticatedUser')

        if(user_item==null){ //if user not loged in 
            return false
        }
        return true //if user loged in
    }

    getLoggednInUserName(){
        let user=sessionStorage.getItem('authenticatedUser')
        if(user==null) return false

        return user;
    }

    /* setupAxiosIntercepter(Token){

        axios.interceptors.request.use(
            (config)=>{
                if(this.isUserLogedIn()){
                    config.headers.authorization=Token
                }

                return config
            }
        )
    } */

     setupAxiosIntercepter(username,password){

        console.log(this.isUserLogedIn())

        let basicAuthHeader=`Basic `+window.btoa(username+":"+password)

        axios.interceptors.request.use(
            (config)=>{
                console.log(this.isUserLogedIn())

                if(this.isUserLogedIn()){
                    console.log("INterceptors")
                    config.headers.authorization=basicAuthHeader

                }
                return config
            }
        )
    } 

}


export default new Authentication();