import React, { useState } from "react";
import MatrixCell from "./Components/MatrixCell";
import {
  Cp1,
  Cp2,
  Cp3,
  Gp1,
  Gp2,
  Gp3,
  Pc1,
  Pc2,
  Pc3,
  Pj1,
  Pj2,
  Pj3,
  Se1,
  Se2,
  Se3,
  Sf1,
  Sf2,
  Sf3,
  Sv1,
  Sv2,
  Sv3,
  Xp1,
  Xp2,
  Xp3,
} from "./Badges";

function Matrix() {
  const [display, setDisplay] = useState("left");
  const [displayMode, setDisplayMode] = useState("partial");

  const toggleDisplayMode = () => {
    const newDisplayMode = displayMode === "partial" ? "all" : "partial";
    setDisplayMode(newDisplayMode);
  };

  return (
    <>
      <h2>Matrice des badges</h2>
      <p id="matrix-change-display-mode" onClick={toggleDisplayMode}>
        <button>{displayMode === "all" ? "Vue partielle" : "Voir tout"}</button>
      </p>
      <div style={{ display: "flex" }}>
        {displayMode === "partial" && display === "right" && (
          <div id="matrix-arrow-left" onClick={() => setDisplay("left")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              className="bi bi-arrow-left-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
            </svg>
            <br />
            <p>Savoirs et compétences</p>            
            Savoir
            <br />
            Savoir-faire
            <br />
            Savoir-être
            <br />
            Compétence
            
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th className="matrix-supheader">&nbsp;</th>
              {(displayMode === "all" || display === "left") && (
                <th colSpan="4" className="matrix-supheader">
                  Savoirs et compétences
                </th>
              )}
              {(displayMode === "all" || display === "right") && (
                <th colSpan="4" className="matrix-supheader">
                  Engagement et participation
                </th>
              )}
            </tr>
            <tr>
              <th>&nbsp;</th>
              {(displayMode === "all" || display === "left") && (
                <>                  
                  <th className="matrix-header">Savoir</th>
                  <th className="matrix-header">Savoir-faire</th>
                  <th className="matrix-header">Savoir-être</th>
                  <th className="matrix-header">Compétence</th>
                </>
              )}
              {(displayMode === "all" || display === "right") && (
                <>
                  <th className="matrix-header">Expérience</th>
                  <th className="matrix-header">
                    Projet
                    <br />
                    Programme
                  </th>
                  <th className="matrix-header">
                    Groupe
                    <br />
                    Communauté
                  </th>
                  <th className="matrix-header">Parcours</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" rowSpan="5" className="matrix-supheader">
                <span
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "sideways-right",
                    transform: "rotate(180deg)",
                    minWidth: "50px",
                  }}
                >
                  Postures
                </span>
              </th>
              {(displayMode === "all" || display === "left") && (
                <>                 
                  <td>
                    <MatrixCell
                      badgeId="sv1"
                      tooltipText="S'initier, découvrir, s'intéresser, ...<br />Badge de savoir qui rend visible une démarche de découverte d'un sujet, de sa volonté d'apprendre.<br />Texte conseillé :  je découvre, je veux apprendre, je m'initie."
                    >
                      <Sv1 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="sf1"
                      tooltipText="S'initier, tester, explorer, ...<br />Badge qui rend visible une démarche de découverte d'un savoir-faire,  de son souhait d'expérimenter celui-ci.<br />Texte conseillé : je découvre, je souhaite pratiquer, je veux tester."
                    >
                      <Sf1 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="se1"
                      tooltipText="Débuter, prendre conscience, identifier <br />Classe de badge qui rend visible une volonté de développer un savoir-être.<br />Texte conseillé : je m'initie , j'essaye."
                    >
                      <Se1 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="cp1"
                      tooltipText="S'initier, découvrir, explorer, ...<br />Badge qui rend visible une démarche de découverte d'une pratique,  de son souhait de l'explorer.<br />Texte conseillé : je découvre, je souhaite pratiquer, j'explore."
                    >
                      <Cp1 />
                    </MatrixCell>
                  </td>
                </>
              )}
              {(displayMode === "all" || display === "right") && (
                <>
                  <td>
                    <MatrixCell
                      badgeId="xp1"
                      tooltipText="Participer, découvrir, vivre... <br />Badge qui rend visible une participation à un événement, ou le vécu d'une expérience.<br />Texte conseillé : j'y étais, je suis venu, j'ai aimé, j'ai vécu..."
                    >
                      <Xp1 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="pj1"
                      tooltipText="Soutenir, promouvoir, montrer son intérêt... <br />Badge rendant visible un soutien ou l'envie de participer à un projet, un programme ou un dispositif.<br />Texte conseillé : Je soutiens, je m'intéresse, je connais."
                    >
                      <Pj1 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="gp1"
                      tooltipText="Adhérer, faire partie, soutenir... <br />Badge qui rend visible l'adhésion à un groupe ou à une communauté ou son soutien.<br />Texte conseillé : j'en suis, je souhaite m'engager, je suis membre."
                    >
                      <Gp1 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="pc1"
                      tooltipText="Démarrer, se lancer... <br />Badge qui rend visible le point de départ d'un parcours personnel ou professionel.<br />Texte conseillé : j'en suis là, je suis engagé, Je me lance, quand je serai grand je serai..."
                    >
                      <Pc1 />
                    </MatrixCell>
                  </td>
                </>
              )}
            </tr>
            <tr>
              {(displayMode === "all" || display === "left") && (
                <>                  
                  <td>
                    <MatrixCell
                      badgeId="sv2"
                      tooltipText="Apprendre, étudier, ...<br />Badge de savoir qui rend visible des connaissances sur le sujet du badge .<br />Texte conseillé : j'ai appris, j'ai des notions, je sais."
                    >
                      <Sv2 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="sf2"
                      tooltipText="Apprendre, expérimenter, ...<br />Badge qui rend visible un savoir-faire,  un développement continu de savoir-faire.<br />Texte conseillé : j'expérimente, je peux faire, je sais faire."
                    >
                      <Sf2 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="se2"
                      tooltipText="Développer, progresser... <br />Badge qui rend visible un développement continu d'un savoir-être.<br />Texte conseillé : je suis, je mets en oeuvre, je développe."
                    >
                      <Se2 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="cp2"
                      tooltipText="Apprendre,expérimenter, ...<br />Badge qui rend visible une pratique,  un développement continu de ses compétences.<br />Texte conseillé : j'apprends, j'expérimente, je pratique."
                    >
                      <Cp2 />
                    </MatrixCell>
                  </td>
                </>
              )}
              {(displayMode === "all" || display === "right") && (
                <>
                  <td>
                    <MatrixCell
                      badgeId="xp2"
                      tooltipText="S'impliquer, contribuer... <br />Badge rendant visible un apport, une intervention, une contribution à un événement, une formation, une manifestation.<br />Texte conseillé : je suis intervenu, partenaire officiel, je contribue, j'ai survécu, je m'implique..."
                    >
                      <Xp2 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="pj2"
                      tooltipText="Contribuer, s'impliquer... <br />Badge qui rend visible un apport, une contribution active à un projet, un programme ou un dispositif.<br />Texte conseillé : nous contribuons, j'ai contribué, membre actif, j'agis pour,..."
                    >
                      <Pj2 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="gp2"
                      tooltipText="Contribuer, participer, ... <br />Badge rendant visible un apport, une contribution active à un groupe ou une communauté.<br />Texte conseillé : je contribue, membre actif, nous agissons pour,..."
                    >
                      <Gp2 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="pc2"
                      tooltipText="Finir, terminer, achever ... <br /> Badge qui rend visible l'aboutissement d'un parcours.<br >/Texte conseillé : j'ai fini, j'ai terminé, ça y est."
                    >
                      <Pc2 />
                    </MatrixCell>
                  </td>
                </>
              )}
            </tr>
            <tr>
              {(displayMode === "all" || display === "left") && (
                <>                  
                  <td>
                    <MatrixCell
                      badgeId="sv3"
                      tooltipText="Transmettre, former, ...<br />Badge qui m'identifie comme personne ressource sur le sujet du badge.<br />Texte conseillé : Je transmets, je forme, je suis expert·e."
                    >
                      <Sv3 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="sf3"
                      tooltipText="Faire et savoir faire, savoir reproduire,.. <br />Badge qui m'identifie comme personne ressource sur un savoir-faire.<br />Texte conseillé : je pratique, je suis formé, je montre comment faire."
                    >
                      <Sf3 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="se3"
                      tooltipText="Conseiller, aider... <br />Badge qui m'identifie comme conseiller, guide, gourou et maître zen. <br /> Texte conseillé : je peux aider, je conseille."
                    >
                      <Se3 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="cp3"
                      tooltipText="Transmettre, former, ...<br />Badge qui m'identifie comme personne ressource sur le sujet du badge.<br />Texte conseillé : Je transmets, je forme, je suis expert·e."
                    >
                      <Cp3 />
                    </MatrixCell>
                  </td>
                </>
              )}
              {(displayMode === "all" || display === "right") && (
                <>
                  <td>
                    <MatrixCell
                      badgeId="xp3"
                      tooltipText="Organiser, animer... <br />Badge indiquant, l'organisation ou l'animation d'un événement, d'une formation, d'une manifestation.<br />Texte conseillé : J'ai animé, nous avons organisé, ..."
                    >
                      <Xp3 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="pj3"
                      tooltipText="Piloter, animer, conduire... <br />Badge rendant visible l'organisation, le pilotage, seul ou à plusieurs d'un projet, d'un programme ou d'un dispositif.<br />Texte conseillé : comité de pilotage, je pilote, nous organisons."
                    >
                      <Pj3 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="gp3"
                      tooltipText="Animer, diriger... <br />Badge rendant visible l'organisation, le pilotage, seul ou à plusieurs d'un groupe ou d'une communauté.<br />Texte conseillé : membre du bureau, je pilote, nous organisons, je co-dirige, j'ai fondé / membre fondateur, je suis responsable."
                    >
                      <Gp3 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="pc3"
                      tooltipText="Conseiller, guider, accompagner... <br /> Badge qui rend visible ou témoigne de la capacité à accompagner un parcours.<br />Texte conseillé : J'ai accompagné, j'accompagne, je peux guider, je peux escorter."
                    >
                      <Pc3 />
                    </MatrixCell>
                  </td>
                </>
              )}
            </tr>
          </tbody>
        </table>
        {displayMode === "partial" && display === "left" && (
          <div id="matrix-arrow-right" onClick={() => setDisplay("right")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              className="bi bi-arrow-right-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg>
            <p>Engagement et participation</p>
            Expérience
            <br />
            Projet / Programme
            <br />
            Groupe / Communauté
            <br />
            Parcours
          </div>
        )}
      </div>
    </>
  );
}

export default Matrix;
