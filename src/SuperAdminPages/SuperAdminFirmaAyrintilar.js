
import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";
import { SuperVisibleContext } from "../contexts/SuperVisibleContext";




const SuperAdminFirmaAyrintilar = () => {
    const [VisibleAllFalse,FirmaEkleVisible, setFirmaEkleVisible,FirmaSilVisible, setFirmaSilVisible,FirmaDuzenleVisible, setFirmaDuzenleVisible
        ,KategoriEkleVisible, setKategoriEkleVisible,KategoriSilVisible, setKategoriSilVisible,KategoriDuzenleVisible, setKategoriDuzenleVisible] = useContext(SuperVisibleContext);
    const [UserName, setUserName, Password, setPassword, Token, setToken, dataToken, passwordErrorVis, setpasswordErrorVis, cookies, FirmaAdi, setFirmaAdi, FirmaMSayisi, setFirmaMSayisi, firmaAc, firmalariGetir, FirmaList, setFirmaList,silinecekIdFirma,setsilinecekIdFirma,firmaSil,firmaAyrinti,FirmaAyrinti, setFirmaAyrinti] = useContext(ApiContext);
    
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <b>Firma Idsi</b>
            <p>{FirmaAyrinti.id}</p>
            <hr></hr>
            <b>Firma İsmi</b>
            <p>{FirmaAyrinti.name}</p>
            <hr></hr>
            <b>Firma Masa Sayısı</b>
            <p>{FirmaAyrinti.deskCount}</p>
            <hr></hr>
            <b>Firma Aktif Mi?</b>
            <p>{FirmaAyrinti.isActive?<a>Firma Aktif</a>:<p>Firma Aktif Değil</p>}</p>
            <hr></hr>
            <b>Firma Silinmiş Mi?</b>
            <p>{FirmaAyrinti.isDeleted?<a>Firma Silinmiş</a>:<p>Firma Silinmemiş</p>}</p>
            <hr></hr>
            <b>Firma Oluşturulma Zamanı</b>
            <p>{FirmaAyrinti.createTime}</p>
        </div>
    )
}
export default SuperAdminFirmaAyrintilar;