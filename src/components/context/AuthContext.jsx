import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserAuthContext = createContext();

const UserAuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
      user: null,
      token: '',
    });


    //getting user data and  token from localstorage
    useEffect(()=>{
        const data = localStorage.getItem('Token');
        if(data){
            const parseData = JSON.parse(data);
            setAuth({...auth,
            user : parseData.userExit,
            token : parseData.token
        })
        }
    },[])
  
    // adding headers for private routes (default axios)
    axios.defaults.headers.common['Authorization'] = auth?.token;
  
    return <UserAuthContext.Provider value={[auth, setAuth]}>
        {children}
      </UserAuthContext.Provider>

  };

//custom hooks
const useAuthGlobally = ()=>{
    return useContext(UserAuthContext);

}

export {UserAuthContext, UserAuthProvider, useAuthGlobally};
