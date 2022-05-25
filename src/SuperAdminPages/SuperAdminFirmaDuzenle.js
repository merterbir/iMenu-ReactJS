import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";
import { SuperVisibleContext } from "../contexts/SuperVisibleContext";






const SuperAdminFirmaDuzenle = () => {
    const [UserName, setUserName, Password, setPassword, Token, setToken, dataToken, passwordErrorVis, setpasswordErrorVis, cookies, FirmaAdi, setFirmaAdi, FirmaMSayisi, setFirmaMSayisi, firmaAc, firmalariGetir, FirmaList, setFirmaList,silinecekIdFirma,setsilinecekIdFirma,firmaSil,firmaAyrinti,FirmaAyrinti, setFirmaAyrinti,
        FirmaAktifMi,setFirmaAktifMi,FirmaSilinmisMi,setFirmaSilinmisMi,firmaDuzenle] = useContext(ApiContext);
     
    var yeniAd= FirmaAyrinti.name;
    var yeniMasa= FirmaAyrinti.deskCount;
    var aktiflikDurum= FirmaAyrinti.isActive;
    var silinmislikDurum= FirmaAyrinti.isDeleted;
    const duzenleClick = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        firmaDuzenle(e.target.value,yeniAd,yeniMasa,aktiflikDurum,silinmislikDurum);
    }
    const yfirmaChange=(e)=>{
        yeniAd=e.target.value;
    }
    const ymsayisiChange=(e)=>{
        yeniMasa=e.target.value;
    }
    const checkboxDegisti = (e) => { 
        console.log(e.target.checked);
        aktiflikDurum=e.target.checked;       
    }
    const checkboxDegisti2 = (e) => {  
        console.log(e.target.checked);
        silinmislikDurum=e.target.checked;     
    }
    return (
        <div id="content" className="p-4 p-md-5 pt-5">

            <form>

                <div className="container">
                    <h3>Firma Düzenle</h3>
                    <br />
                    <b>Eski Firma Adı: </b> <a>{FirmaAyrinti.name} </a> <b>Eski Masa Sayısı: </b> <a>{FirmaAyrinti.deskCount} </a>
                    <b>Eski Aktif Durum: </b> <a>{FirmaAyrinti.isActive?"True":"False"} </a> <b>Eski Silinmiş Durum: </b> <a>{FirmaAyrinti.isDeleted?"True":"False"}</a>
                    <br></br>
                    
                    <br></br>
                    <label htmlFor="uname"><b>Yeni Firma Adı</b></label>
                    <input onChange={yfirmaChange} defaultValue={FirmaAyrinti.name} type="text" placeholder="Yeni Firma Adı Giriniz" name="uname" required />
                    <label htmlFor="psw"><b>Yeni Firma Masa Sayısı</b></label>

                    <input onChange={ymsayisiChange} defaultValue={FirmaAyrinti.deskCount} type="text" placeholder="Yeni Firma Masa Sayısı Giriniz" name="uname" required />
                    <div>
                        <div className="custom-control custom-switch">
                            <input onChange={checkboxDegisti} type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked={FirmaAyrinti.isActive}  />
                            <label className="custom-control-label" htmlFor="customSwitch1">Firma aktiflik durumu:</label>
                        </div>
                        <div className="custom-control custom-switch">
                            <input onChange={checkboxDegisti2} type="checkbox" className="custom-control-input" id="customSwitch2" defaultChecked={FirmaAyrinti.isDeleted}/>
                            <label className="custom-control-label" htmlFor="customSwitch2">Firma silinmişlik durumu:</label>
                        </div>

                    </div>

                    <button onClick={duzenleClick} value={FirmaAyrinti.id} type="submit">Düzenle</button>
                </div>
            </form>
        </div>
    )
}
export default SuperAdminFirmaDuzenle;