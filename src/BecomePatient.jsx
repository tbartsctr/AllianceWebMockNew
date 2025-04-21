import React from "react";
import Layout from "./Layout";
import BannerImage from "./NewPatientsImg1.jpg";
import BodyImage from "./New_Patients_Img_1.wepb";


function BecomePatientHeader () {
    return (
        <div class="NewPatientHeader">
            <img id="newPatientImg1" src={BannerImage} />
                <h1 id="newPatientHeaderTxt">Become A Patient</h1>
                <h3 id="newPatientBannerTxt">We are proud to be recognized as one of the leading integrative medicine centers in the United States. Our team of medical doctors and healthcare practitioners look forward to helping you get well and stay well.</h3>
        </div>

    )
};

function BecomePatientBody () {
    return (
        <div class="NewPatientBody">
            <h1 id="newPatientBodyHeaderTxt">Welcome to Alliance Medicine</h1>
                <h3 id="newPatientBodyTxt">At Alliance Integrative Medicine, we AIM to transform the health of each of our patients by creating a personalized wellness plan that leverages the best of conventional and alternative medicine to deliver meaningful outcomes. We call this Transformational Medicine℠ Whether treating you for a specific condition or working with you to create a personalized long-term health and wellness plan, we use an integrative approach that looks at you holistically, as an individual with your own particular needs.</h3>
                    <button id="newPatientCallBtn">Schedule a Call</button>
                        <img id="newPatientImg2" src={BodyImage} />
        </div>
    )
}
