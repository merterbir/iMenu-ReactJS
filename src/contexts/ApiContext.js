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
  const [FirmaAktifMi,setFirmaAktifMi] = useState(false);
  const [FirmaSilinmisMi,setFirmaSilinmisMi] = useState(false);
  const [FirmaList, setFirmaList] = useState([]);
  const [silinecekIdFirma,setsilinecekIdFirma] =useState("");
  const [FirmaAyrinti, setFirmaAyrinti] = useState([]);
  let navigate = useNavigate();
  const cookies = new Cookies();

 
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
    },{headers})
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

    axios.get(url + '/api/Company',{headers})
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
    
    axios.delete(url + '/api/Company/'+id,{headers})
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
  const firmaAyrinti = (id) => {
    
    axios.get(url + '/api/Company/'+id,{headers})
      .then(function (response) { 
        console.log(response.status) 
        if (response.status === 200) {
          console.log(response.data)
          setFirmaAyrinti(response.data);
        }
        
      })
      .catch(function (error) {
        console.log(error);
        setFirmaAyrinti(null);
      });
  } 
  const firmaDuzenle = (id,yeniAd,yeniMasa,aktiflikDurum,silinmislikDurum) => {
    var zaman = new Date();
    axios.put(url + '/api/Company/'+id, {
      "id": id,
      "isDeleted": silinmislikDurum,
      "isActive": aktiflikDurum,
      "createTime": zaman.toLocaleString,
      "name": yeniAd,
      "deskCount": parseInt(yeniMasa)
    },{headers})
      .then(function (response) {
        console.log(response.status)
        if (response.status === 202) {
          console.log(response);


        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const AdminUyeEkle = (mail,sifre,isim,soyisim,telefon,sifreSoru,sifreSoruCevap,ikinciMail,dogumTarihi) => {
    var zaman = new Date();
    console.log(cookies.get('token'))
    axios.post(url + '/api/Authenticate/register-admin',{
      "email": mail,
      "password": sifre,
      "name": isim,
      "surname": soyisim,
      "birthday": dogumTarihi,
      "phoneNumber": telefon,
      "passwordQuestion": sifreSoru,
      "passwordAnswer": sifreSoruCevap,
      "secondEmail": ikinciMail
    },{headers} )
      .then(function (response) {
        console.log(response.status)
        if (response.status === 200) {
          console.log(response);


        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const SuperAdminUyeEkle = (mail,sifre,isim,soyisim,telefon,sifreSoru,sifreSoruCevap,ikinciMail,dogumTarihi) => {
    var zaman = new Date();
    console.log(cookies.get('token'))
    axios.post(url + '/api/Authenticate/register-SAdmin',{
      "email": mail,
      "password": sifre,
      "name": isim,
      "surname": soyisim,
      "birthday": dogumTarihi,
      "phoneNumber": telefon,
      "passwordQuestion": sifreSoru,
      "passwordAnswer": sifreSoruCevap,
      "secondEmail": ikinciMail
    },{headers} )
      .then(function (response) {
        console.log(response.status)
        if (response.status === 200) {
          console.log(response);


        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const GarsonEkle = (mail,sifre,isim,soyisim,telefon,sifreSoru,sifreSoruCevap,ikinciMail,dogumTarihi) => {
    var zaman = new Date();
    console.log(cookies.get('token'))
    axios.post(url + '/api/Authenticate/AddWaiter',{
      "email": mail,
      "password": sifre,
      "name": isim,
      "surname": soyisim,
      "birthday": dogumTarihi,
      "phoneNumber": telefon,
      "passwordQuestion": sifreSoru,
      "passwordAnswer": sifreSoruCevap,
      "secondEmail": ikinciMail
    },{headers} )
      .then(function (response) {
        console.log(response.status)
        if (response.status === 200) {
          console.log(response);


        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <ApiContext.Provider value={[UserName, setUserName, Password, setPassword, Token, setToken, dataToken, passwordErrorVis, setpasswordErrorVis, cookies, FirmaAdi, setFirmaAdi, FirmaMSayisi, setFirmaMSayisi, firmaAc, firmalariGetir, FirmaList, setFirmaList,silinecekIdFirma,setsilinecekIdFirma,firmaSil,firmaAyrinti,FirmaAyrinti, setFirmaAyrinti,
      FirmaAktifMi,setFirmaAktifMi,FirmaSilinmisMi,setFirmaSilinmisMi,firmaDuzenle,AdminUyeEkle,SuperAdminUyeEkle,GarsonEkle]}>
      {props.children}
    </ApiContext.Provider>

  );

};