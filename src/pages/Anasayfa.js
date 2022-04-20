import React from "react";
import Comments from "./Comments";
import MainPhotos from "./MainPhotos";
import CustomerReview from "./CustomerReview";
import Description from "./Description";
import ContactUs from "./ContactUs";
import Header from "./Header";
import Home from "./Home";
import JoinNow from "./JoinNow";
import WhatsQrMenu from "./WhatsQrMenu";
const Anasayfa = () => {

    return (
        <div>

            <Header></Header>
            <Home></Home>
            <Comments></Comments>
            <MainPhotos></MainPhotos>
            <CustomerReview></CustomerReview>
            <Description></Description>
            <JoinNow></JoinNow>
            <WhatsQrMenu></WhatsQrMenu>
            <ContactUs></ContactUs>

        </div>
    )
}
export default Anasayfa;