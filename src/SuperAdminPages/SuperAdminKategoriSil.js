import React from "react";





const SuperAdminKategoriSil = () => {
    
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <form className="modal-content animate" action="/action_page.php" method="post">
                <div className="container">
                    <label htmlFor="uname"><b>Kategorisi Silenecek Firma</b></label>
                    <br/>
                    
                    <select style={{height:50,width:1110}} name="Firmalar" id="Firmalar" required>
                        <option value="Afirması">A Firması</option>
                        <option value="Bfirması">B Firması</option>
                        <option value="Cfirması">C Firması</option>
                        <option value="Dfirması">D Firması</option>
                    </select>
                    <br/><br/>
                    <label htmlFor="uname"><b>Silenecek Kategori</b></label>
                    <br/>
                    
                    <select style={{height:50,width:1110}} name="Firmalar" id="Firmalar" required>
                        <option value="Afirması">A Kategorisi</option>
                        <option value="Bfirması">B Kategorisi</option>
                        <option value="Cfirması">C Kategorisi</option>
                        <option value="Dfirması">D Kategorisi</option>
                    </select>
                    <br/><br/>
                    <button type="submit">Kategori Sil</button>
                </div>
            </form>
        </div>
    )
}
export default SuperAdminKategoriSil;