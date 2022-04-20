import React from "react";





const SuperAdminFirmaDuzenle = () => {
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <form className="modal-content animate" action="/action_page.php" method="post">
                <div className="container">
                <label htmlFor="uname"><b>Düzenlenecek Firmayı Seçiniz</b></label>
                <select style={{height:50,width:1110}} name="Firmalar" id="Firmalar" required>
                        <option value="Afirması">A Firması</option>
                        <option value="Bfirması">B Firması</option>
                        <option value="Cfirması">C Firması</option>
                        <option value="Dfirması">D Firması</option>
                    </select>
                    <br/><br/>
                    <label htmlFor="uname"><b>Yeni Firma Adı</b></label>
                    <input type="text" placeholder="Kategori Adı Giriniz" name="uname" required />
                    <label htmlFor="psw"><b>Yeni Firma Masa Sayısı</b></label>
                
                    <input type="text" placeholder="Firma Masa Sayısı Giriniz" name="uname" required />
                    <button type="submit">Düzenle</button>
                </div>
            </form>
        </div>
    )
}
export default SuperAdminFirmaDuzenle;