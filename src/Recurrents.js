import React from "react";
import { Cp2, Gp2, Pj3, Sv2, Sf2, Cp3, Gp3, Pc3, Pc1 } from "./Badges";

function Recurrents() {

  return (
    <>
      <h2>Voici des usages courants</h2>
      <p style={{ marginLeft: "15px" }}>
        Sélectionnez parmi les badges les plus récurrents celui dont vous avez
        besoin.
      </p>
      <div className="blocks-row">
        <div className="recurrent-choice">
          <a href={process.env.PUBLIC_URL + "/customize/index.html?id=sv2"}>
            <p>
            Reconnaitre l'aquisition d'un savoir
            </p>
            <Sv2 />
          </a>
        </div>
        <div className="recurrent-choice">
          <a href={process.env.PUBLIC_URL + "/customize/index.html?id=cp3"}>
            <p>
            Reconnaitre une pratique, une compétence
            </p>
            <Cp2 />
          </a>
        </div>
        <div className="recurrent-choice">
          <a href={process.env.PUBLIC_URL + "/customize/index.html?id=sf2"}>
            <p>Reconnaitre un savoir faire</p>
            <Sf2 />
          </a>
        </div>
        <div className="recurrent-choice">
          <a href={process.env.PUBLIC_URL + "/customize/index.html?id=gp2"}>
            <p>Reconnaitre sa contribution dans un groupe</p>
            <Gp2 />
          </a>
        </div>
        <div className="recurrent-choice">
          <a href={process.env.PUBLIC_URL + "/customize/index.html?id=pj3"}>
            <p>Reconnaitre le pilotage ou l'animation d'un projet</p>
            <Pj3 />
          </a>
        </div>
        <div className="recurrent-choice">
          <a href={process.env.PUBLIC_URL + "/customize/index.html?id=pc1"}>
            <p>Reconnaitre l'engagement dans un parcours</p>
            <Pc1 />
          </a>
        </div>
      </div>
    </>
  );
}

export default Recurrents;
