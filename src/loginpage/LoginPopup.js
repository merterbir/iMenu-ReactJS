import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";
import { useNavigate } from "react-router-dom";



const LoginPopup = () => {
    const [UserName, setUserName, Password, setPassword, token, setToken, dataToken,passwordErrorVis,setpasswordErrorVis] = useContext(ApiContext);

    const onPasswordChange = (e) => {
        setPassword(e.target.value);

    }
    const onUserNameChange = (e) => {
        setUserName(e.target.value);

    }

    const onLoginClick = (e) => {
        e.preventDefault();

        dataToken();



    }
    const mystyle = {
        margin:20,
        width:600
        };

    return (
        <section className="u-align-center u-clearfix u-image u-block-control u-block-e139-28" custom-posts-hash="[I,T]" src="" data-style="intro-center-bottom-dark" data-post-id={3034215692} data-section-properties="{&quot;margin&quot;:&quot;none&quot;,&quot;stretch&quot;:false}" id="sec-d1bd" data-id="e139" data-source="fix" data-image-width={1856} data-image-height={1080} style={{ minHeight: 640, backgroundImage: 'url("Assets/images/-min.jpg")', backgroundPosition: '50% 50%' }} data-block={217} data-block-selected="true">
            <div className="u-clearfix u-layout-wrap u-block-control u-block-e139-20" style={{ width: 1006, marginTop: 65, marginRight: 'auto', marginBottom: 60, marginLeft: 'calc(((100% - 1140px) / 2) + 67px)' }} data-layout-wrap-id={9} data-block={218} data-block-type="Layout"><div className="u-gutter-0 u-layout">  <div className="u-layout-row"><div className="u-container-style u-image u-layout-cell u-shape-rectangle u-size-29 u-block-control ui-draggable ui-droppable u-block-e139-21" data-image-width={1920} data-image-height={1483} style={{ minHeight: 445, backgroundImage: 'url("Assets/images/qr-menu-linear-icon-vector.jpg")', backgroundPosition: '50% 50%' }} data-cell-id={33} data-column-id={23} data-block={219}><div className="u-container-layout u-valign-middle u-block-e139-22" style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }} data-container-layout-dom={47} /></div>
                <div className="u-align-center u-container-style u-layout-cell u-size-31 u-white u-block-control ui-draggable ui-droppable u-block-e139-23" style={{ minHeight: 445 }} data-cell-id={34} data-column-id={24} data-block={220}><div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-block-e139-24" style={{ paddingTop: 30, paddingRight: 25, paddingBottom: 30, paddingLeft: 30 }} data-container-layout-dom={48}><div className="u-form u-block-control u-block-e139-6" style={{ height: 218, width: 465, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 }} data-block={221}>
                    <form onSubmit={onLoginClick} className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form" style={{ padding: 0 }}>
                        <div className="u-form-group u-form-name u-block-control ui-draggable ui-draggable-handle u-block-e139-7" style={{ marginLeft: 'auto' }} data-block={222} data-block-type="FormField"><label htmlFor="name-30a4" className="u-form-control-hidden u-label u-block-e139-8" wfd-invisible="true" style={{}}>Name</label>
                            <input
                                type="text"
                                placeholder="Mail giriniz"
                                id="name-30a4"
                                name="text"
                                className="u-border-2 u-border-grey-10 u-grey-10 u-input u-input-rectangle u-block-e139-9"
                                required
                                onChange={onUserNameChange}
                                style={{ fontSize: '1.25rem' }} /></div><div className="u-form-email u-form-group u-block-control ui-draggable ui-draggable-handle u-block-e139-10" style={{ marginLeft: 'auto' }} data-block={223} data-block-type="FormField"><label htmlFor="email-cd2c" className="u-form-control-hidden u-label u-block-e139-11" wfd-invisible="true" style={{}} />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={onPasswordChange}
                                className="u-border-2 u-border-grey-10 u-grey-10 u-input u-input-rectangle u-block-e139-12"
                                required
                                placeholder="Şifre giriniz"
                                style={{ fontSize: '1.25rem' }} /></div>
                        <div className="u-align-right u-form-group u-form-submit u-block-control u-block-e139-16" style={{ marginLeft: 'auto' }} data-block={224}>
                            <button type="submit" className="u-active-palette-2-light-2 u-border-1 u-border-active-palette-2-light-2 u-border-hover-palette-2-light-2 u-border-palette-2-light-1 u-btn u-btn-submit u-button-style u-custom-font u-font-roboto-condensed u-hover-palette-2-light-2 u-palette-2-base u-block-control ui-draggable ui-draggable-handle u-block-e139-17" style={{ backgroundImage: 'none', borderStyle: 'solid', textTransform: 'uppercase', marginLeft: 'auto', fontSize: '1.25rem', letterSpacing: 2, fontWeight: 700, width: '100%' }}>GİRİŞ YAP</button>
                            <input
                                type="submit"
                                defaultValue="submit"
                                className="u-form-control-hidden"
                                wfd-invisible="true" />
                        </div>
                        {passwordErrorVis?<div style={mystyle} class="alert alert-danger">
                            <p>Kullanıcı adı veya şifre yanlış...</p>
                        </div>:null}
                        

                    </form></div><p className="u-text u-block-control u-block-e139-18" style={{ fontSize: '1rem', fontWeight: 300, marginTop: 24, marginRight: 28, marginBottom: 0, marginLeft: 28 }} data-block={226} data-block-type="Text">Kayıt ol.</p></div></div></div></div></div></section>


    )
}
export default LoginPopup;