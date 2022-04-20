import React, { useState, createContext } from "react";
export const VisibleContext = createContext();

export const VisibleProvider = (props) => {

    const [CommentsVisible, setCommentsVisible] = useState(true);
    const [ContactUsVisible, setContactUsVisible] = useState(true);
    const [CustomerReviewVisible, setCustomerReview] = useState(true);
    const [DescriptionVisible, setDescriptionVisible] = useState(true);
    const [HomeVisible, setHomeVisible] = useState(true);
    const [MainPhotosVisible, setMainPhotosVisible] = useState(true);

   
    return (
        <VisibleContext.Provider value={[CommentsVisible, setCommentsVisible,ContactUsVisible, setContactUsVisible,
        CustomerReviewVisible, setCustomerReview,DescriptionVisible, setDescriptionVisible,HomeVisible, setHomeVisible,
        MainPhotosVisible, setMainPhotosVisible
        ]}>
            {props.children}
        </VisibleContext.Provider>

    );

};