import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import "./ImmuneHealth.css";
import ImmuneHealthHeaderImg3 from "./ImmuneHealthHeaderImg3.jpg";

const HeaderBar = () => {
    return (
        <div className="HeaderBar">
            <img id="ImmuneHeaderImg" src={ImmuneHealthHeaderImg3}></img>
            <h1 id="HeaderBarTitle">Immune Health</h1>
            <h3 id="HeaderBarTxt">Conventional doctors rarely factor in gut health when presented with autoimmune diseases because most are simply not trained to deal with gut dysbiosis. But, when gut health goes unnoticed or ignored, certain syndromes can arise which can trigger an autoimmune response.</h3>
        </div>
    )
};

const ImmunePageInfo = () => {
    return(
        <div className="ImmuneHealthBody">
            <div className="ImmuneHealthTxtDiv">
                <h2 id="ImmuneHealthTxt1">
                How Immune Health Can Lead to Autoimmunity
                    <p>
                        Leaky gut, also known as increased intestinal permeability, is a digestive condition in which bacteria and toxins can seep through the intestinal wall. Leaky gut can be caused by a wide range of issues such as undiagnosed food sensitivities like gluten intolerance, eating too much sugar, overconsumption of alcohol, overgrowth of yeast, parasites, or even taking too many medications, especially antibiotics. Once the delicate barrier of your intestines is compromised, bits of food, toxins, and bacteria can enter your bloodstream, resulting in a condition known as endotoxemia in which your blood becomes toxic and continually triggers your immune response. This condition has a serious impact on your immune system because it automatically intensifies your inflammation levels, thus creating a persistent low level of inflammation. In turn, your immune system is triggered to use white blood cells to attack the organ, producing massive inflammation. The autoimmune confusion makes the system less accurate in dealing with any actual invaders or toxins in your blood. Eventually, this leads to autoimmunity because your healthy tissues get attacked as well.
                    </p>
                </h2>
                <h2 id="ImmuneHealthTxt2">
                    The Functional Medicine Approach to Resolving the Autoimmune Response
                        <p>
                            The functional medicine approach to addressing autoimmune issues at Alliance Integrative Medicine is to first focus on giving our patients the correct in-depth testing to assess the current state of their gut health. Then, the next step consists of a 5-step cleansing protocol to help heal your gut while upgrading your diet to avoid reoccurrence. Leaky gut along with other gut issues such as irritable bowel syndrome, small intestinal bacterial overgrowth (SIBO), or small intestinal fungal overgrowth (SIFO) can all have a huge impact on your immune system. Our team has expertise in identifying and treating leaky gut while dealing with autoimmune illness, including management of flare-ups. Reestablishing a healthy gut microbiome is one of the best ways we can bolster your immune system and help you to free yourself of some of the symptoms typically linked to autoimmune illness including fatigue, joint pain, headaches, or new food intolerances to things like dairy and eggs. At Alliance Integrative Medicine, we’ve seen an incredible decrease in symptoms and even remission for people with autoimmune diseases once they healed their leaky gut and other gut issues. If you have been experiencing chronic autoimmune symptoms that may relate to digestive problems and are looking for answers, schedule an appointment with our patient coordinator today!
                        </p>
                    </h2>
            </div>
            <button id="ScheduleCallBtn">Schedule A Discovery Call</button>
        </div>
    )
};

const ImmuneHealth = () => {
    return (
      <div>
          <HeaderBar />
          <ImmunePageInfo />
      </div>
    );
  };

export default ImmuneHealth;
