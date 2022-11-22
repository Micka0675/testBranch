var cote_un;
var cote_deux;
var hypothenuse;

cote_un = prompt("Entrez un nombre entier et positif pour la longueur du premier côté");
cote_un = cote_un * cote_un;

cote_deux = prompt("Entrez un nombre entier et positif pour la longueur du premier côté");
cote_deux = cote_deux * cote_deux;

hypothenuse = cote_un + cote_deux;
hypothenuse = Math.sqrt(hypothenuse);

alert("La longueur de l'hypothénuse est " + hypothenuse + ".");