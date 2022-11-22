input = document.querySelectorAll('input');
console.log(input);
for(i=0;i<input.length;i++)
{
    input[i].addEventListener('click', function(e){
        console.log(e.target);
        switch(e.target.value){
            case 'exercice 1': exo1();
            break;
            case 'exercice 2': exo2();
            break;
            case 'exercice 3': exo3();
            break;
            case 'exercice 4': exo4();
            break;
            case 'exercice 5': exo5();
            break;
            case 'exercice 6': exo6();
            break;
            case 'exercice 7': exo7();
            break;
            default: alert('choisissez un exercice');
        }

    });
}


function exo1(){
    var iAge;
    iAge = prompt("Entrez votre âge");

    if (iAge < 0)
    {
        alert('Âge non valide');
    }
    else
        if (iAge < 18) 
        { 
            alert('Programme réservé aux personnes majeures');
        } 
        else 
        {
            if (iAge < 27) 
            {
                alert('Vous avez un statut jeune');
            }
            else 
            {	
                if (iAge < 66) 
                {
                    alert('Vous avez un statut adulte');
                } 
                else 
                {
                    alert('Programme réservé aux non-retraités');
                }
            }
        }
}

function exo2(){
    var valUtil = parseFloat(prompt('Veuillez entrer une valeur'));
    var nbreSaisies = 0;
    var min=valUtil;
    var max=valUtil;
    var somme = 0;

    while(valUtil!=0)
    {
        nbreSaisies++;
        if(valUtil<min)
        {
            min = valUtil;  
        }
        else
        {
            if(valUtil > max || max == null)
            {
                max = valUtil;
            }
        }
        somme = somme + valUtil;
        valUtil = parseFloat(prompt('Veuillez entrer une valeur'));
    }
    var moyenne = somme / nbreSaisies;
    alert('Compris entre '+min+' et '+max+'Pour une moyenne de '+moyenne+' Au revoir!');
}

function exo3(){
    var age;
    var restart = 'o';


    while (restart!='n')
    {
       age = prompt("Saisir votre âge svp")
        alert("Vous avez " + age);

        if(age>26)
        {
            alert("Vous avez un statut adulte");
        }
        else if(age<18)
        {
            alert("Vous avez un statut jeune");
        }
        else
        {
            alert("Programme réservé aux personnes non-retraitées");
        }

        restart =prompt("Voulez-vous recommmencer  ? o/n  ");
    }
}

function exo4(){
    var multiplicateur;
    var numerateur;
    var produit;
    var restart = 'o';

    for(multiplicateur=1; multiplicateur<11; multiplicateur++)
    {
        while(restart!='n')
        {

            for(numerateur=1; numerateur<11; numerateur++)
            {
                produit = numerateur * multiplicateur;
                parseInt(document.write(numerateur + "x " +   multiplicateur + "= "  + produit));
            }

            restart = prompt("Appuyez sur n pour interrompre l'affichage");
        }
    }
}

function exo5(){
    var nNombre;
    var nRepere=1;
    var nFact=1;
    var cRep = "o";

    while (cRep === "o")
    {
    	parseInt(nNombre = prompt("Entrez un nombre"));
    	if (nNombre > 0)
    	{
    		for (nRepere = 1; nRepere <= nNombre; nRepere ++)
    		{
    			nFact *= nRepere;
    		}
    		document.write("<p>La factorielle de "+ nNombre +" est donc : "+ nFact +"</p>");
    	}
    	else 
    	{
    		if (nNombre < 0)
    		{
    			document.write("<p>Factorielle impossible à calculer</p>");
    		}
    		else
    		{
    			document.write("La factorielle de 0 est donc: 1");
    		}
    	}
    	cRep = prompt("Voulez-vous recommencer (o/n) ?");
    }
}

function exo6(){
    var impair = 1;
    document.write("<p>" + impair + " est le premier nombre impair</p>");
    for(i = 1 ; i <= 19; i++)
    {
        impair = impair + 2;
        document.write("<p>"+ impair + " est le "+ parseFloat(i+1) + " ème nombre impair</p>");
    }
}

function exo7(){
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
}
