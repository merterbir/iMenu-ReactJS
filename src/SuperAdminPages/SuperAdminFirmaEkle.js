import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";





const SuperAdminFirmaEkle = () => {
    const [UserName, setUserName, Password, setPassword, Token, setToken, dataToken,passwordErrorVis,setpasswordErrorVis,cookies,FirmaAdi,setFirmaAdi,FirmaMSayisi,setFirmaMSayisi,firmaAc] = useContext(ApiContext);

    const onFirmaAdiChange=(e)=>{
        setFirmaAdi(e.target.value);
    }
    const onFirmaMasaChange=(e)=>{
        setFirmaMSayisi(e.target.value);
    }
    const clickEkle =(e)=>{
        e.preventDefault();
        firmaAc();
    }

    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <form className="modal-content animate" action="/action_page.php" method="post">
                <div className="container">
                    <label htmlFor="uname"><b>Firma Adı</b></label>
                    <input onChange={onFirmaAdiChange} type="text" placeholder="Firma Adı Giriniz" name="uname" required />
                    <label htmlFor="psw"><b>Firma Masa Sayısı</b></label>
                
                    <input onChange={onFirmaMasaChange} type="text" placeholder="Firma Masa Sayısı Giriniz" name="uname" required />
                    <button onClick={clickEkle} type="submit">Ekle</button>
                </div>
            </form>
        </div>
    )
}
export default SuperAdminFirmaEkle;