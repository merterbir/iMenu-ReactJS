import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";
import Select from 'react-select'


//id company, hangişirket,

const SuperAdminFirmaUyeEkle = () => {
    const [UserName, setUserName, Password, setPassword, Token, setToken, dataToken, passwordErrorVis, setpasswordErrorVis, cookies, FirmaAdi, setFirmaAdi, FirmaMSayisi, setFirmaMSayisi, firmaAc, firmalariGetir, FirmaList, setFirmaList, silinecekIdFirma, setsilinecekIdFirma, firmaSil, firmaAyrinti, FirmaAyrinti, setFirmaAyrinti] = useContext(ApiContext);

    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <form className="modal-content animate" action="/action_page.php" method="post">
                <div className="container">
                    <label htmlFor="uname"><b>Üyenin ekleneceği firmayı seçiniz</b></label>
                    <br></br>
                    <select style={{height:50,width:1295}}>
                        {FirmaList.map((Firma) => (
                            <option value={Firma.id}>{Firma.name}</option>
                        ))}
                    </select>
                    <br></br>
                    <br></br>
                    <label htmlFor="psw"><b>Üyenin maili</b></label>

                    <input type="text" placeholder="Yeni üye ismi giriniz" name="uname" required />
                    <button type="submit">Üye Ekle</button>
                </div>
            </form>
        </div>
    )
}
export default SuperAdminFirmaUyeEkle;