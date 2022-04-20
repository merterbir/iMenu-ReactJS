import React, { useState, createContext } from "react";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";


export const ApiContext = createContext();
export const ApiProvider = (props) => {
  const [Token, setToken] = useState("");
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [passwordErrorVis, setpasswordErrorVis] = useState(false);
  const [FirmaAdi, setFirmaAdi] = useState("");
  const [FirmaMSayisi, setFirmaMSayisi] = useState("");
  const [FirmaList, setFirmaList] = useState([]);
  const [silinecekIdFirma,setsilinecekIdFirma] =useState("");
  let navigate = useNavigate();
  const cookies = new Cookies();

  /* fetch('https://authenticationcorewebapi20220215151416.azurewebsites.net/login', {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              'UserName': UserName,
              'Password': Password
          })
      }).then(function (response) {
          status = response.status;
          return response.json();
      })
          .then(function (myJson) {
              if (status == 200) {
                  
                  setToken(myJson);
                  console.log(token);
                  let path= '/SuperAdmin';
                  navigate(path);
              }
              else{
                  setpasswordErrorVis(true);
                  console.log("Yanlış");
              }
          }).catch((error) => {
              setpasswordErrorVis(true);
          }); */

  const axios = require('axios');


  const headers = {
    authorization: "Bearer " + cookies.get("token"),
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const url = "http://localhost:5000";

  const dataToken = () => {
    axios.post(url + '/api/Authenticate/login', {
      "email": UserName,
      "password": Password,
    })
      .then(function (response) {
        if (response.status === 200) {
          console.log(response);
          setToken(response.data.token);

          console.log(response.data);
          setToken(response.data.token);
          setUserName(UserName);
          let path = '/SuperAdmin';
          navigate(path);
          console.log(Token);
          cookies.set('username', UserName, { path: '/' });
          cookies.set('token', response.data.token, { path: '/' });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const firmaAc = () => {
    console.log()
    var zaman = new Date();
    axios.post(url + '/api/Company', {
      "id": 0,
      "isDeleted": false,
      "isActive": true,
      "createTime": zaman.toLocaleString,
      "name": FirmaAdi,
      "deskCount": parseInt(FirmaMSayisi)
    })
      .then(function (response) {
        console.log(response.status)
        if (response.status === 201) {
          console.log(response);


        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const firmalariGetir = () => {

    axios.get(url + '/api/Company')
      .then(function (response) {
        console.log(response.status)
        if (response.status === 200) {
          
          console.log("girdi")
          console.log(response.data);
          setFirmaList(response.data);

        }
        else{
          setFirmaList("");
          console.log("else")
        }
      })
      .catch(function (error) {
        console.log(error);
       
      });
  }
  const firmaSil = (id) => {
    
    axios.delete(url + '/api/Company/'+id)
      .then(function (response) {  
        if (response.status === 200) {
          firmalariGetir();
        }
        
      })
      .catch(function (error) {
        console.log(error);
        setFirmaList(null);
      });
  }
  return (
    <ApiContext.Provider value={[UserName, setUserName, Password, setPassword, Token, setToken, dataToken, passwordErrorVis, setpasswordErrorVis, cookies, FirmaAdi, setFirmaAdi, FirmaMSayisi, setFirmaMSayisi, firmaAc, firmalariGetir, FirmaList, setFirmaList,silinecekIdFirma,setsilinecekIdFirma,firmaSil]}>
      {props.children}
    </ApiContext.Provider>

  );

};