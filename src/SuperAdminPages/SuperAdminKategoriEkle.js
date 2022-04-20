import React from "react";





const SuperAdminKategoriEkle = () => {
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <form className="modal-content animate" action="/action_page.php" method="post">
                <div className="container">
                    <label htmlFor="uname"><b>Kategorinin Ekleneceği Firma</b></label>
                    <select style={{height:50,width:1110}} name="Firmalar" id="Firmalar" required>
                        <option value="Afirması">A Firması</option>
                        <option value="Bfirması">B Firması</option>
                        <option value="Cfirması">C Firması</option>
                        <option value="Dfirması">D Firması</option>
                    </select>
                    <br></br>
                    <br></br>

                    <label htmlFor="psw"><b>Eklenecek Kategorinin Adı</b></label>
                
                    <input type="text" placeholder="Eklenecek Kategorinin Adını Giriniz" name="uname" required />
                    <button type="submit">Kategori Ekle</button>
                </div>
            </form>
        </div>
    )
}
export default SuperAdminKategoriEkle;