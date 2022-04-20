import React from "react";
import { Link } from "react-router-dom";

import { IndexProvider } from "../contexts/IndexContext";




const Header = () => {
 
  return (
 
<section className="u-clearfix u-header u-block-7b57-1" custom-posts-hash="[]" data-style="header-imglogo-menu" data-post-id="post9" data-section-properties="{&quot;grid-spacing&quot;:&quot;0&quot;,&quot;align&quot;:&quot;left&quot;,&quot;stretch&quot;:true}" id="sec-d045" data-source data-id="7b57" style={{backgroundImage: 'none'}}>
  <div className="u-clearfix u-sheet u-block-7b57-2" style={{minHeight: 101}}>
    <a className="u-image u-logo u-block-control u-block-7b57-8" data-brightness data-image-width={1400} data-image-height={1400} style={{width: 70, height: 70, marginTop: '18.5px', marginRight: 'auto', marginBottom: 0, marginLeft: 0}} data-block={1}>
      <img src="Assets/images/iMenuLogo.png" className="u-logo-image u-block-7b57-10" style={{width: '100%', height: '100%'}} />
    </a>
    <IndexProvider>
      <Link id="LoginLink" className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-block-control u-block-7b57-11" style={{borderStyle: 'none', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: 1, alignSelf: 'center', marginTop: '-59px', marginRight: '-0.0001px', marginBottom: '29.5px', marginLeft: 'auto'}} data-block={2} to="/Login">LOGIN
      </Link></IndexProvider></div>
</section>



  )
}
export default Header;