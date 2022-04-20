import React from "react";





const SuperAdminKategoriDuzenle = () => {
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <form className="modal-content animate" action="/action_page.php" method="post">
                <div className="container">
                    <label htmlFor="uname"><b>Düzenlenecek Kategorinin Firması</b></label>
                    <select style={{height:50,width:1110}} name="Firmalar" id="Firmalar" required>
                        <option value="Afirması">A Firması</option>
                        <option value="Bfirması">B Firması</option>
                        <option value="Cfirması">C Firması</option>
                        <option value="Dfirması">D Firması</option>
                    </select>
                    <br></br>
                    <br></br>
                    <label htmlFor="uname"><b>Düzenlenecek Kategori</b></label>
                    <select style={{height:50,width:1110}} name="Firmalar" id="Firmalar" required>
                        <option value="Afirması">A Kategorisi</option>
                        <option value="Bfirması">B Kategorisi</option>
                        <option value="Cfirması">C Kategorisi</option>
                        <option value="Dfirması">D Kategorisi</option>
                    </select>
                    <br></br>
                    <br></br>
                    <label htmlFor="psw"><b>Kategorinin Ait Olduğu Firma</b></label>
                
                    <input type="text" placeholder="Yeni Kategori İsmi Giriniz" name="uname" required />
                    <button type="submit">Kategori Düzenle</button>
                </div>
            </form>
        </div>
    )
}
export default SuperAdminKategoriDuzenle;