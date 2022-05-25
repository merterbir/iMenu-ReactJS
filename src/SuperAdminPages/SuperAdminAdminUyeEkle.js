import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";
import Select from 'react-select'
import DateTimePicker from 'react-datetime-picker'


//id company, hangişirket,

const SuperAdminAdminUyeEkle = () => {
    const [UserName, setUserName, Password, setPassword, Token, setToken, dataToken, passwordErrorVis, setpasswordErrorVis, cookies, FirmaAdi, setFirmaAdi, FirmaMSayisi, setFirmaMSayisi, firmaAc, firmalariGetir, FirmaList, setFirmaList,silinecekIdFirma,setsilinecekIdFirma,firmaSil,firmaAyrinti,FirmaAyrinti, setFirmaAyrinti,
        FirmaAktifMi,setFirmaAktifMi,FirmaSilinmisMi,setFirmaSilinmisMi,firmaDuzenle,AdminUyeEkle] = useContext(ApiContext);
    var mail,sifre,isim,soyisim,telefon,sifreSoru,sifreSoruCevap,ikinciMail,dogumTarihi;
    
    const mailOnChange=(e)=>{
        mail=e.target.value;
    }
    const sifreOnChange=(e)=>{
        sifre=e.target.value;
    }
    const isimOnChange=(e)=>{
        isim=e.target.value;
    }
    const soyisimOnChange=(e)=>{
        soyisim=e.target.value;
    }
    const telefonOnChange=(e)=>{
        telefon=e.target.value;
    }
    const sifreSoruOnChange=(e)=>{
        sifreSoru=e.target.value;
    }
    const sifreSoruCevapOnChange=(e)=>{
        sifreSoruCevap=e.target.value;
    }
    const ikinciMailOnChange=(e)=>{
        ikinciMail=e.target.value;
    }
    const dogumTarihiOnChange=(e)=>{
        dogumTarihi=e.target.value;
    }
    const AdminUyeEkleOnClick=(e)=>{
        e.preventDefault();
        AdminUyeEkle(mail,sifre,isim,soyisim,telefon,sifreSoru,sifreSoruCevap,ikinciMail,dogumTarihi);
    }

    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <form className="modal-content animate"  method="post">
                <div className="container">
                    
                    <label htmlFor="mail"><b>Yeni Admin Üye Mail</b></label>
                    <input onChange={mailOnChange} type="text" placeholder="Yeni Admin Üye Mail" name="uname" required />

                    <label htmlFor="psw"><b>Yeni Admin Üye Şifre</b></label>
                    <input onChange={sifreOnChange} type="password" placeholder="Yeni Admin Üye Şifre" name="uname" required />

                    <label htmlFor="psw"><b>Yeni Admin Üye İsim</b></label>
                    <input onChange={isimOnChange} type="text" placeholder="Yeni Admin Üye İsim" name="uname" required />

                    <label htmlFor="psw"><b>Yeni Admin Üye Soyisim</b></label>
                    <input onChange={soyisimOnChange} type="text" placeholder="Yeni Admin Üye Soyisim" name="uname" required />

                    <label htmlFor="psw"><b>Yeni Admin Üye Telefon</b></label>
                    <input onChange={telefonOnChange} type="text" placeholder="Yeni Admin Üye Telefon" name="uname" required />

                    <label htmlFor="psw"><b>Yeni Admin Üye Şifre Sorusu</b></label>
                    <input onChange={sifreSoruOnChange} type="text" placeholder="Yeni Admin Üye Şifre Sorusu" name="uname" required />

                    <label htmlFor="psw"><b>Yeni Admin Üye Şifre Sorusu Cevabı</b></label>
                    <input onChange={sifreSoruCevapOnChange} type="text" placeholder="Yeni Admin Üye Şifre Sorusu Cevabı" name="uname" required />

                    <label htmlFor="psw"><b>Yeni Admin Üye İkinci Mail</b></label>
                    <input onChange={ikinciMailOnChange} type="text" placeholder="Yeni Admin Üye İkinci Mail" name="uname" required />

                    <label htmlFor="psw"><b>Yeni Admin Üye Doğum Tarihi</b></label>
                    <br></br>
                    <input onChange={dogumTarihiOnChange} style={{height:50}} type="date" placeholder="Yeni Admin Üye İkinci Mail" name="uname" required />

                    <br></br>
                    <br></br>
                    
                    <button onClick={AdminUyeEkleOnClick} type="submit">Admin Üye Ekle</button>
                </div>
            </form>
        </div>
    )
}
export default SuperAdminAdminUyeEkle;