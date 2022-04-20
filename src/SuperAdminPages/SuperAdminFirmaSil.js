import { wait } from "@testing-library/user-event/dist/utils";
import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";
import { SuperVisibleContext } from "../contexts/SuperVisibleContext";




const SuperAdminFirmaSil = () => {
    const [VisibleAllFalse,FirmaEkleVisible, setFirmaEkleVisible,FirmaSilVisible, setFirmaSilVisible,FirmaDuzenleVisible, setFirmaDuzenleVisible
        ,KategoriEkleVisible, setKategoriEkleVisible,KategoriSilVisible, setKategoriSilVisible,KategoriDuzenleVisible, setKategoriDuzenleVisible] = useContext(SuperVisibleContext);
    const [UserName, setUserName, Password, setPassword, Token, setToken, dataToken, passwordErrorVis, setpasswordErrorVis, cookies, FirmaAdi, setFirmaAdi, FirmaMSayisi, setFirmaMSayisi, firmaAc, firmalariGetir, FirmaList, setFirmaList,silinecekIdFirma,setsilinecekIdFirma,firmaSil] = useContext(ApiContext);
    const silButton = (e) => {
        e.preventDefault();
       firmaSil(e.target.value);
        
    }
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <form className="modal-content animate" method="post">
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Firma İsim</th>
                                <th scope="col">Firma Masa Sayısı</th>
                                <th scope="col">Firma Ayrıntıları</th>
                                <th scope="col">Firma Duzenle</th>
                                <th scope="col">Firma Sil</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {FirmaList.map(Firma => (
                                <tr key={Firma.id}>
                                    <td>{Firma.name}</td>
                                    <td>{Firma.deskCount}</td>
                                    <td><button  value={Firma.id}>Ayrıntılar</button></td>
                                    <td><button  value={Firma.id}>Duzenle</button></td>
                                    <td><button onClick={silButton} value={Firma.id}>Sil</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                </div>
            </form>
        </div>
    )
}
export default SuperAdminFirmaSil;