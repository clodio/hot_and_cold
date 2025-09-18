import React, { useEffect, useState } from "react";
import "./index.css";

const wordsList = ["Rasoir","Table","Zoo","Magie","Bibliothèque","Casque","Police","Livre","Ambulance","Enseignant","Ciseaux","Mafia","Plume","Ovni","Or","Vaisseau","Spatial","Doigt","Hypnose","Pension","Concours","Cerveau","Balançoire","Arbre","Masque","Poubelle","Poison","Logiciel","Bombe","Massage","Bateau","Fée","Menottes","Fête","Avocat","Sac à dos","Lune","Scout","Rivière","Serviette","Braille","Queue","Vide","Dinosaure","Papier","Robe","Café","Antenne","Internet","Lettre","Skateboard","Grue","Permis","Chaussettes","Catapulte","Monstre","Bar","Lagune","Chef","Enfant","Mathématiques","Chaise","Printemps","Colle","Photographie","Enquêteur","Montagne","Film","Tondeuse","Poupée","Cave","Constellation","Tasse","Fleur","Tétine","Moine","Marathon","Pelle","Pantalon","Couteau","Piercing","Menuisier","Argent","Divorce","Château","Pyjama","Boîte","Parfum","Druide","Portail","Graine","Armure","Piscine","Météorite","Théâtre","Naissance","Sirène","Contrat","Pont","Médicament","Arrosoir","Trampoline","Diable","Cimetière","Île","Géant","Bureau","Moine","Paradis","Voiture","Poème","Lait","Claviers","Poumon","Barbe","Porte","Vélo","Braquage","Air","Avion","Cheveux","Poussière","Mariage","Coeur","Casino","Gomme","Coiffeur","Jardin","Toilette","Coffre-fort","Fantôme","Cuillère","Aimant","Dessin animé","Selle","Crucifix","Sous-marin","Lampe","Hache","Sommeil","Sport","Prison","Horloge","Oiseau","Éclair","Télécommande","Arc","Guerre","Cage","Samouraï","Marais","Trésor","Téléphone","Barrière","Corde","Graffiti","Espace","Ville","Planet","Miel","Chasseur","Génie","Bus","Bière","Échelle","Anniversaire","Poker","Tapis","Épices","Pétrole","Dé","Sang","Coup","Char","Astronaute","Chaussures","Peigne","Torchon","Cire","Pape","Boulette","Opéra","Larme","Eau","Clown","Ange","Carnaval","Pendule","Oeuf","Tornade","Trottinette","Diamant","Voeux","Nuage","Chapeau","École","Écharpe","Ascenseur","Peau","Escalator","Super-héros","Fourchette","Éponge","Tableau","Aquarium","Pistolet","Gladiateur","Lunettes","Parachute","Aveugle","Tour","Appat","Bol","Église","Soldat","Poussette","Gant","Lit","Email","Reine","Pipe","Médaille","Voix","Maquillage","Hôtel","Mer","Journal","Calendrier","Épée","Jouet","Ciel","Douche","Ninja","Couronne","Radio","Enterrement","Tentacules","Toboggan","Ruban","Adhésif","Restaurant","Cirque","Vaisselle","Insecte","Nain","Virus","Peinture","Calculatrice","Rire","Ogre","Végétarien","Menteur","Meurtrier","Serveur","Chocolat","Câlin","T-shirt","Chevalier","Loup-garou","Cinéma","Trophée","Alien","Odeur","Peur","Haut-parleur","Balai","Camion","Rond-point","Sumo","Chirurgie","Cloche","Nuit","Couche","Micro","Chewing-gum","Déguisement","Oreille","Prêtre","Train","Karaoké","Boomerang","Phare","Ordinateur","Pirate","Verre","Stylo","Rocher","Licorne","Voile","Salon","Tente","Cabane","Jumelles","Miroir","Encre","Cowboy","Karaté","Espion","Clou","Rideau","Docteur","Rêve","Agrafeuse","Statue","Maladie","Chance","Parapluie","Potence","Nourriture","Sucre","Torture","Archéologie","Animale","Ballon","Lutin","Métro","Marteau","Taxi","Randonnée","Squelette","Maison","Télévision","Automne","Bébé","Imprimante","Sorcière","Tableau","Elfe","Épouvantail","Clé","Danse","Aiguille","Fenêtres","Musée","Piqûre","Anneau","Coffre","Bloc-Notes","Cravate","Piège","Amour","Président","Tracteur","Ceinture","Canapé","Juge","Fruit","Robot","Manège","Loupe","Gare","Cocktail","Assurance","Cascade","Légumes","Satellite","Bout","Zombie","Valise","Vampire","Écouteurs"];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getRandomBackgroundAndTextColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${r}, ${g}, ${b})`;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  const textColor = brightness > 128 ? "#000" : "#FFF";
  return { bgColor, textColor };
}

export default function HotAndCold() {
  const [words, setWords] = useState([]);
  const [index, setIndex] = useState(0);
  const [colorMap, setColorMap] = useState({});
  const [bg, setBg] = useState("#FFF");
  const [textColor, setTextColor] = useState("#000");

  useEffect(() => {
    const shuffled = shuffleArray(wordsList);
    const newColorMap = {};
    shuffled.forEach(word => {
      newColorMap[word] = getRandomBackgroundAndTextColor();
    });
    setWords(shuffled);
    setColorMap(newColorMap);
    const { bgColor, textColor } = newColorMap[shuffled[0]];
    setBg(bgColor);
    setTextColor(textColor);
  }, []);

  const changeWord = (direction) => {
    let newIndex = index + direction;
    if (newIndex < 0) newIndex = words.length - 1;
    if (newIndex >= words.length) {
      newIndex = 0;
      const reshuffled = shuffleArray(wordsList);
      const newColorMap = {};
      reshuffled.forEach(word => {
        newColorMap[word] = getRandomBackgroundAndTextColor();
      });
      setWords(reshuffled);
      setColorMap(newColorMap);
    }
    setIndex(newIndex);
    const currentWord = words[newIndex];
    const { bgColor, textColor } = colorMap[currentWord] || getRandomBackgroundAndTextColor();
    setBg(bgColor);
    setTextColor(textColor);
  };

  const handleClick = (e) => {
    const screenWidth = window.innerWidth;
    const clickX = e.clientX;
    if (clickX < screenWidth / 2) {
      changeWord(-1);
    } else {
      changeWord(1);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="fullscreen-text"
      style={{ backgroundColor: bg, color: textColor }}
    >
      {words[index]}
    </div>
  );
}