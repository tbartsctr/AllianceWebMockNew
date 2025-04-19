import React from "react";
import Layout from "./Layout";
import "./HormonalBalancePage.css"
import BannerImage from "./hmbbanner1.jpg";



function HormoneBalancePageHeader () {
    return (
            <div class="hormoneBalanceHeader">
                <img id="hbHeaderImg" src={BannerImage} />
                <h1 id="hbHeaderTxt">Hormonal & Metabolic Balance</h1>
                <h3 id="hbHeaderBodyTxt">Hormones such as estrogen, testosterone, cortisol and insulin are created by endocrine glands and work as chemical messengers throughout your body to accomplish a wide range of important physical and chemical functions.</h3>
            </div>
       

    )
}

function HormoneBalancePageBody () {
    return (
        <div className="hbBodyDiv" style={{ display: 'flex', gap: '20px' }}>
        {/* Left Column */}
        <div style={{ flex: 1 }}>
          {/* First paragraph */}
          <p>
            Hormones are crucial in influencing many aspects of your health – from regulating hunger cues to running your reproductive systems and even influencing emotional states and mood. So, it goes without question that when your hormones are imbalanced, you will feel out of balance.
          </p>
  
          {/* Second paragraph with line break */}
          <p>
            Understanding Hormonal & Metabolic Balance
          </p>
  
          {/* Third paragraph */}
          <p>
            The glands that are part of your endocrine system work together like a complex hormonal symphony to control the level of hormones that circulate throughout your body at any given time. They are responsible for the production of the various hormones necessary for essential functions, from regulating metabolism to maintaining healthy tissues, sex drive, reproduction, sleep cycles, and mood. The endocrine system pairs specific hormone functions to each organ to determine which chemicals need to be released, at what time, and for which purpose. The pituitary gland, a small, pea-sized gland, is also called the “master gland” as it controls the other glands in your body. It produces many hormones, like growth hormone (GH or somatotropin), while stimulating other glands to release additional hormones like cortisol.
          </p>
        </div>
  
        {/* Right Column */}
        <div style={{ flex: 1 }}>
          {/* Continuing paragraph that moves to the right */}
          <p>
            The endocrine system also includes the necessary pineal gland, which is a pinecone-shaped gland that regulates melatonin and circadian rhythm; the thyroid gland, which is important for thyroxine (T4) production; the thymus gland that is responsible for childhood growth and releasing disease-fighting T cells; and the adrenal glands that regulate cortisol levels. When just one of these glands is imbalanced, it can lead to widespread health issues ranging from chronic fatigue to increased risks for other imbalances like low metabolism and reduced libido.
            With such vital functions carried out by the endocrine system, taking a conventional synthetic drug-based approach (many of which have serious side effects — including, but not limited to, stroke, osteoporosis, anxiety, reproductive problems, and cancer) to heal disruptions can be dangerous because the treatment only masks the symptoms, allowing underlying causes such as nutritional deficiencies, gut issues, and stealth infections to persist without you knowing.
            Honing in on the origin of such issues to balance the hormones naturally is not only effective but can frequently have additional benefits such as increased energy, weight loss, improved sleep, and healthier skin. So, instead of only masking the issues with prescription medications, here at Alliance Integrative Medicine we focus on identifying the root cause of your hormonal imbalances so we can craft a personalized plan that addresses these issues for good.
          </p>
  
          <button id="hbBodyBtn">Schedule A Discovery Call</button>
        </div>
      </div>
    );
  }

const HormoneBalancePage = () => {
    return (
      <div>
        <HormoneBalancePageHeader />
        <HormoneBalancePageBody />
      </div>  
    )
}


export default HormoneBalancePage;
