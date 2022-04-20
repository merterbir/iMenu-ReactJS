import React, { useState, createContext } from "react";
export const SuperVisibleContext = createContext();

export const SuperVisibleProvider = (props) => {

    const [FirmaEkleVisible, setFirmaEkleVisible] = useState(false);
    const [FirmaSilVisible, setFirmaSilVisible] = useState(false);
    const [FirmaDuzenleVisible, setFirmaDuzenleVisible] = useState(false);
    const [KategoriEkleVisible, setKategoriEkleVisible] = useState(false);
    const [KategoriSilVisible, setKategoriSilVisible] = useState(false);
    const [KategoriDuzenleVisible, setKategoriDuzenleVisible] = useState(false);
    const [FirmaAyrintilarVisible, setFirmaAyrintilarVisible] = useState(false);


    const VisibleAllFalse=()=>{
        setFirmaEkleVisible(false);
        setFirmaSilVisible(false);
        setFirmaDuzenleVisible(false);
        setKategoriSilVisible(false);
        setKategoriEkleVisible(false);
        setKategoriDuzenleVisible(false);
        setFirmaAyrintilarVisible(false);
    }

   
    return (
        <SuperVisibleContext.Provider value={[VisibleAllFalse,FirmaEkleVisible, setFirmaEkleVisible,FirmaSilVisible, setFirmaSilVisible,FirmaDuzenleVisible, setFirmaDuzenleVisible
            ,KategoriEkleVisible, setKategoriEkleVisible,KategoriSilVisible, setKategoriSilVisible,KategoriDuzenleVisible, setKategoriDuzenleVisible,FirmaAyrintilarVisible, setFirmaAyrintilarVisible
        ]}>
            {props.children}
        </SuperVisibleContext.Provider>

    );

};