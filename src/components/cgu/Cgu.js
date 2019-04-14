import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  font-size: 1.8em;
  color: #424242;
`

const SectionTitle = styled.h2`
  color: #6d6d6d;
  font-size: 1.3em;
`

const CustomGrid = styled(Grid)`
  color: #737373;
  padding: 20px;
`

const Cgu = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <CustomGrid item md={7}>
        <Title>Conditions générales d'utilisation</Title>
        <p style={{textAlign: 'center'}}>
          Les présentes conditions générales d’utilisation (ci-après les "CGU") définissent
          les droits et obligations des visiteurs du site newmodelsparis.com (ci-après dénommé "le Site")
          et sont conclues entre chaque visiteur et la société New Models Paris,
          en qualité d’exploitant et éditeur du Site.
        </p>
        <div style={{textAlign: 'center'}}>
          <br/>
          Dénomination sociale : New Models Paris SAS
          <br/>
          Siège social : 44 rue auguste poullain 93200 saint-denis
          <br/>
          Capital social : 100 euros
        </div>
        <SectionTitle>
          1. Objet
        </SectionTitle>
        <p>
          Les CGU ont pour objet de définir les modalités et conditions dans lesquelles New Models Paris,
          ci-après dénommé l’EDITEUR, met à la disposition de ses utilisateurs, ci après dénommés
          les "Utilisateurs", un Site. Un Utilisateur pourra être en qualité de simple "Internaute"
          ou de "Visiteur" du Site.
        </p>
        <p>
          Le simple Internaute comme le Visiteur pourra accéder à toutes les fonctionnalités du
          Site après s’être enregistré sur le site
        </p>
        <p>
          Pour le Visiteur et tout Utilisateur, le simple accès au site de l’EDITEUR à l’adresse
          URL suivante https://newmodelsparis.com implique l’acceptation de l’ensemble des
          conditions décrites ci-après.
        </p>
        <SectionTitle>
          2. Disponibilité du Site
        </SectionTitle>
        <p>
          L’Editeur s’efforce de permettre l’accès au site 24 heures sur 24, 7 jours sur 7, sauf en
          cas de force majeure ou d’un événement hors du contrôle de l’EDITEUR, et sous réserve des
          éventuelles pannes et interventions de maintenance nécessaires au bon fonctionnement du Site.
        </p>
        <p>
          Par conséquent, l’EDITEUR ne peut garantir une disponibilité du Site et/ou des services, une
          fiabilité des transmissions et des performances en terme de temps de réponse ou de qualité.
          Il n’est prévu aucune assistance technique vis à vis de l'Utilisateur que ce soit par
          des moyens électroniques ou téléphoniques.
        </p>
        <p>
          La responsabilité de l’EDITEUR ne saurait être engagée en cas d’impossibilité
          d’accès à ce site et/ou d’utilisation des services
          Par ailleurs, l’EDITEUR peut être amené à interrompre le Site ou une partie des services,
          à tout moment sans préavis, le tout sans droit à indemnités.
          L'Utilisateur reconnaît et accepte que l’EDITEUR ne soit pas responsable des interruptions,
          et des conséquences qui peuvent en découler pour l’utilisateur ou tout tiers.
        </p>
        <SectionTitle>
          3. Données personnelles et confidentialité
        </SectionTitle>
        <p>
          Les informations renseignées sur le Site et sur le Site New Models Paris
          sont confidentielles et réservées à l’usage interne de L’EDITEUR.
          L'Utilisateur peut avoir accès à des données à caractère personnel.
          Ainsi, en application des articles 32, 38, 39 et 40 de la loi du 6 janvier 1978
          relative à la protection des données à caractère personnel, telle que modifiée,
          il est précisé que les informations collectées par l’EDITEUR, ne seront utilisées
          et ne feront l'objet de diffusion auprès d'entités tierces que pour les seules
          nécessités de l’exécution des présentes ou pour répondre aux obligations
          légales et réglementaires.
        </p>
        <p>
          L’Utilisateur comme le Visiteur peut avoir accès à différentes données à caractère
          personnel concernant des autres Utilisateur, ses données ne comprenne en aucun
          cas des informations de contact type adresse mail ou numéro de téléphone.
        </p>
        <p>
          L’Utilisateur peut obtenir la communication des données personnelles le concernant,
          le cas échéant d'en exiger la rectification et de s'opposer, pour des motifs légitimes,
          à ce qu'elles fassent l'objet d'un traitement ou à leur utilisation à d'autres fins
          que celles citées ci-dessus. Cette demande devra être transmise par mail à
          l’adresse suivante contact@newmodelsparis.com :
        </p>
        <SectionTitle>
          4. Propriété intellectuelle du Site et de son contenu
        </SectionTitle>
        <p>
          La structure générale du Site ainsi que les textes, graphiques, images, sons et
          vidéos la composant, sont la propriété de l'EDITEUR ou de ses partenaires.
          Toute représentation et/ou reproduction et/ou exploitation partielle ou totale
          des contenus et services proposés par le Site par quelque procédé que ce soit,
          sans l'autorisation préalable et par écrit de l’EDITEUR et/ou de ses partenaires,
          est strictement interdite et serait susceptible de constituer une contrefaçon au
          sens des articles L 335-2 et suivants du Code de la propriété intellectuelle.
        </p>
        <p>
          La marque "New Models Paris", est une marque déposée par l’EDITEUR .
          <br/>
          Toute représentation et/ou reproduction et/ou exploitation partielle ou totale
          de cette marque, de quelque nature que ce soit, est totalement prohibée.
        </p>
        <SectionTitle>
          5. Responsabilité
        </SectionTitle>
        <p>
          Les informations et/ou documents figurant sur ce Site et/ou accessibles
          par ce Site proviennent de sources considérées comme étant fiables.
          Toutefois, ces sont susceptibles de contenir des inexactitudes techniques
          et des erreurs typographiques. L’EDITEUR se réserve le droit de les corriger,
          dès que ces erreurs sont portées à sa connaissance.
        </p>
        <p>
          L’EDITEUR n’est pas responsable de toute perte, préjudice, dommage ou pénalité,
          de quelque nature que ce soit, subi par tout Utilisateur, directement ou indirectement,
          en raison de l’utilisation par un tiers non autorisé des identifiants, mot de passe et du
          compte de l'Utilisateur en l’absence de faute ou négligence grave de l’EDITEUR.
        </p>
        <SectionTitle>
          6. Lien hypertexte
        </SectionTitle>
        <p>
          Le Site peut contenir des liens hypertextes vers d’autres sites présents sur le
          réseau Internet. Les liens vers ces autres ressources vous font quitter le Site.
          Il est possible de créer un lien vers la page de présentation de ce site sans
          autorisation expresse de l’EDITEUR. Aucune autorisation ou demande d’information
          préalable ne peut être exigée par l’EDITEUR à l’égard d’un Site qui souhaite
          établir un lien vers le Site. Il convient toutefois d’afficher ce site dans
          une nouvelle fenêtre du navigateur. Cependant, l’EDITEUR se réserve le droit
          de demander la suppression d’un lien qu’il estime non conforme à l’objet du Site.
        </p>
        <SectionTitle>
          7. Cookies
        </SectionTitle>
        <p>
          L'utilisation des fonctionnalités du Site peut nécessiter la mise en place de "cookies".
          Ces "cookies" sont activés par l’Editeur pour chaque utilisation du Site et ne sont
          pas stockés dans l’ordinateur du Visiteur/Adhérent, ce qui conserve son anonymat. 
          Les "cookies" ne permettent pas à l’EDITEUR d’identifier le Visiteur/Adhérent.
          Ils enregistrent uniquement des informations relatives à la navigation de ce dernier
          sur le Site (les pages consultées, la date et l'heure de la consultation, etc.).
        </p>
        <p>
          Tout Utilisateur peut s’opposer à l'enregistrement de "cookies" en configurant
          son ordinateur de la façon suivante : 
        </p>
        <ul>
          <li>
            Si la navigation sur le Site s’effectue avec Internet Explorer 8 (Microsoft) : 
            Il convient de cliquer sur "Outils", "Options Internet", "Confidentialité" et de préciser
            le niveau de gestion des "cookies" souhaité. 
          </li>
          <li>
            Si la navigation sur le Site s’effectue avec des versions antérieures
            ou ultérieures à Internet Explorer 8 (Microsoft) ou d’autres navigateurs
            (Firefox, Netscape, etc.) : Il convient de se référer aux fichiers d'aide
            ou aux manuels d'utilisation correspondants. 
          </li>
          <li>
            Si le navigateur de l'Utilisateur est configuré pour refuser les "cookies"
            alors que le bon fonctionnement du Site requiert leur acceptation, l’accès à
            tout ou partie du Site peut se révéler altéré voire impossible.
            L’EDITEUR ne peut donc garantir le bon fonctionnement du Site si ce
            dernier n’a pas activé l’enregistrement des "cookies".
          </li>
        </ul>
        <SectionTitle>
          8. Durée du Contrat – Résiliation
        </SectionTitle>
        <p>
          Les présentes conditions générales sont conclues à compter de la première utilisation du Site par
          l'Utilisateur et pendant une période de 2 ans à compter de la dernière utilisation.
        </p>
        <SectionTitle>
          9. Modification des CGU du Site
        </SectionTitle>
        <p>
          Les présentes CGU pourront être modifiées, à tout moment et sans préavis.
          L'Utilisateur est ainsi invité à consulter régulièrement leur dernière version mise à jour,
          disponible à tous et accessible en permanence sur la page d’accueil du Site, en cliquant sur le lien "CGU".
        </p>
        <SectionTitle>
          10. Divisibilité des clauses
        </SectionTitle>
        <p>
          La nullité, l'illicéité, l'inapplicabilité ou l'inopposabilité d'une clause
          quelconque des présentes CGU ne saurait entraîner la nullité, l'illicéité,
          l'inapplicabilité ou l'inopposabilité des autres clauses.
        </p>
        <SectionTitle>
          11. Juridiction et droit applicable
        </SectionTitle>
        <p>
          Les présentes CGU sont régies, interprétées et appliquées conformément au droit
          français. 
          Sous réserve des dispositions d'ordre public applicables en matière de compétence
          juridictionnelle, les tribunaux du ressort de la Cour d’Appel de Paris seront seuls
          compétents pour connaître de tout litige relatif aux présentes, concernant tant leur
          validité, interprétation, exécution, résiliation, leurs conséquences et leurs suites
          et qui n’aurait pas été résolu à l’amiable.
        </p>
      </CustomGrid>
    </Grid>
  )
}
export default Cgu;
