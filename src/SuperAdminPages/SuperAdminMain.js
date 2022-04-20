import React, {useContext} from "react";
import SuperAdminFirmaEkle from "./SuperAdminFirmaEkle";
import SuperAdminFirmaSil from "./SuperAdminFirmaSil";
import SuperAdminFirmaDuzenle from "./SuperAdminFirmaDuzenle";
import SuperAdminFirmaAyrintilar from "./SuperAdminFirmaAyrintilar";
import SuperAdminKategoriEkle from "./SuperAdminKategoriEkle";
import SuperAdminKategoriSil from "./SuperAdminKategoriSil";
import { SuperVisibleContext } from "../contexts/SuperVisibleContext";
import SuperAdminKategoriDuzenle from "./SuperAdminKategoriDuzenle";
import { ApiContext } from "../contexts/ApiContext";
import Cookies from 'universal-cookie';

const SuperAdminMain = () => {
  const [VisibleAllFalse,FirmaEkleVisible, setFirmaEkleVisible,FirmaSilVisible, setFirmaSilVisible,FirmaDuzenleVisible, setFirmaDuzenleVisible
    ,KategoriEkleVisible, setKategoriEkleVisible,KategoriSilVisible, setKategoriSilVisible,KategoriDuzenleVisible, setKategoriDuzenleVisible,FirmaAyrintilarVisible, setFirmaAyrintilarVisible] = useContext(SuperVisibleContext);
    const [UserName, setUserName, Password, setPassword, Token, setToken, dataToken,passwordErrorVis,setpasswordErrorVis,cookies,FirmaAdi,setFirmaAdi,FirmaMSayisi,setFirmaMSayisi,firmaAc,firmalariGetir,FirmaList,setFirmaList] = useContext(ApiContext);
const FirmaEkleOnClick=()=>{
  VisibleAllFalse();
  setFirmaEkleVisible(true);
}
const FirmaIslemleriOnClick=()=>{
  firmalariGetir();
  VisibleAllFalse();
  setFirmaSilVisible(true);
 
}
const FirmaDuzenleOnClick=()=>{
  VisibleAllFalse();
  setFirmaDuzenleVisible(true);
}
const KategoriEkleOnClick=()=>{
  VisibleAllFalse();
  setKategoriEkleVisible(true);
}
const KategoriSilOnClick=()=>{
  VisibleAllFalse();
  setKategoriSilVisible(true);
}
const KategoriDuzenleOnClick=()=>{
  VisibleAllFalse();
  setKategoriDuzenleVisible(true);
}
const FirmaAyrintilarOnClick=()=>{
  VisibleAllFalse();
  setFirmaAyrintilarVisible(true);
}



  return (
 
    

<div className="wrapper d-flex align-items-stretch">
  <nav id="sidebar">
    <div className="custom-menu">
      <button type="button" id="sidebarCollapse" className="btn btn-primary">
        <i className="fa fa-bars" />
        <span className="sr-only">SuperAdmin Menusu</span>
      </button>
    </div>
    <div className="p-4 pt-5">
      <h1><a className="logo">iMenu</a></h1>
      <ul className="list-unstyled components mb-5">
        <li className="active">
          <a href="#firmaSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Firma İşlemleri</a>
          <ul className="collapse list-unstyled" id="firmaSubmenu">
            <li>
              <a onClick={FirmaEkleOnClick}>Firma Ekle</a>
            </li>
            <li>
              <a onClick={FirmaIslemleriOnClick}>Firma İşlemleri</a>
            </li>
            
          </ul>
        </li>
        <li className="active">
          <a href="#categorySubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Kategori İşlemleri</a>
          <ul className="collapse list-unstyled" id="categorySubmenu">
            <li>
            <a onClick={KategoriEkleOnClick}>Kategori Ekle</a>
            </li>
            <li>
              <a onClick={KategoriDuzenleOnClick}>Kategori Düzenle</a>
            </li>
            <li>
              <a onClick={KategoriSilOnClick}>Kategori Sil</a>
            </li>
          </ul>
        </li>
        <li>
         <a className="active" >{cookies.get('username')}</a>
         
       </li>
       <li>
         <a className="active" >LOGOUT</a>
       </li>
      </ul>

      
    </div>
    
  </nav>
  {/* Page Content  */}
  {FirmaEkleVisible? <SuperAdminFirmaEkle/>:null}
  {FirmaSilVisible? <SuperAdminFirmaSil/>:null}
  {FirmaDuzenleVisible? <SuperAdminFirmaDuzenle/>:null}
  {KategoriSilVisible?<SuperAdminKategoriSil/>:null}
  {KategoriEkleVisible? <SuperAdminKategoriEkle/>:null}
  {KategoriDuzenleVisible? <SuperAdminKategoriDuzenle/>:null}
  {FirmaAyrintilarVisible? <SuperAdminFirmaAyrintilar/>:null}
  </div>
  




  )
}
export default SuperAdminMain;