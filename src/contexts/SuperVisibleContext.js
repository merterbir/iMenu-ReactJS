import React, { useState, createContext } from "react";
export const SuperVisibleContext = createContext();

export const SuperVisibleProvider = (props) => {

    const [FirmaEkleVisible, setFirmaEkleVisible] = useState(false);
    const [FirmaSilVisible, setFirmaSilVisible] = useState(true);
    const [FirmaDuzenleVisible, setFirmaDuzenleVisible] = useState(false);
    const [KategoriEkleVisible, setKategoriEkleVisible] = useState(false);
    const [KategoriSilVisible, setKategoriSilVisible] = useState(false);
    const [KategoriDuzenleVisible, setKategoriDuzenleVisible] = useState(false);
    const [FirmaAyrintilarVisible, setFirmaAyrintilarVisible] = useState(false);
    const [SilinmisFirmalarVisible, setSilinmisFirmalarVisible] = useState(false);
    const [FirmaUyeEkleVisible,setFirmaUyeEkleVisible]= useState(false);
    const [FirmaUyeSilVisible,setFirmaUyeSilVisible]= useState(false);
    const [UyeEkleVisible,setUyeEkleVisible]= useState(false);
    const [UyeSilVisible,setUyeSilVisible]= useState(false);
    const [UyeListeleVisible,setUyeListeleVisible]= useState(false);
    const [AdminUyeEkleVisible,setAdminUyeEkleVisible]= useState(false);
    const [SuperAdminUyeEkleVisible,setSuperAdminUyeEkleVisible]= useState(false);
    const [SuperAdminGarsonEkleVisible,setSuperAdminGarsonEkleVisible]= useState(false);
    const VisibleAllFalse=()=>{
        setFirmaEkleVisible(false);
        setFirmaSilVisible(false);
        setFirmaDuzenleVisible(false);
        setKategoriSilVisible(false);
        setKategoriEkleVisible(false);
        setKategoriDuzenleVisible(false);
        setFirmaAyrintilarVisible(false);
        setSilinmisFirmalarVisible(false);
        setFirmaUyeEkleVisible(false);
        setFirmaUyeSilVisible(false);
        setUyeListeleVisible(false);
        setUyeEkleVisible(false);
        setUyeSilVisible(false);
        setAdminUyeEkleVisible(false);
        setSuperAdminUyeEkleVisible(false);
        setSuperAdminGarsonEkleVisible(false);
    }

   
    return (
        <SuperVisibleContext.Provider value={[VisibleAllFalse,FirmaEkleVisible, setFirmaEkleVisible,FirmaSilVisible, setFirmaSilVisible,FirmaDuzenleVisible, setFirmaDuzenleVisible
            ,KategoriEkleVisible, setKategoriEkleVisible,KategoriSilVisible, setKategoriSilVisible,KategoriDuzenleVisible, setKategoriDuzenleVisible,FirmaAyrintilarVisible, setFirmaAyrintilarVisible
        ,SilinmisFirmalarVisible, setSilinmisFirmalarVisible,FirmaUyeEkleVisible,setFirmaUyeEkleVisible,FirmaUyeSilVisible,setFirmaUyeSilVisible,UyeEkleVisible,setUyeEkleVisible,UyeSilVisible,setUyeSilVisible,
        UyeListeleVisible,setUyeListeleVisible,AdminUyeEkleVisible,setAdminUyeEkleVisible,SuperAdminUyeEkleVisible,setSuperAdminUyeEkleVisible,SuperAdminGarsonEkleVisible,setSuperAdminGarsonEkleVisible]}>
            {props.children}
        </SuperVisibleContext.Provider>

    );

};