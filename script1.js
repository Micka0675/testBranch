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
    document.getElementById('exo2').innerHTML = "<input id=\"choice\" type=\"number\">";
    var results =[];
    var valPlace = document.getElementById('choice');
    // var valUtil = valPlace.value;
    var min;
    var max;
    var nbreSaisies = 0;
    var somme = 0;

    valPlace.addEventListener('keyup',function staaart(e){
    var valUtil = valPlace.value;
    if(e.key != '0')
    {
        if(e.key === 'Enter' || e.key === 13)
        {
            results.push(valUtil);
            nbreSaisies++;
            if(valUtil < parseFloat(min) || min == undefined || min == null)
            {
                min = valUtil;  
            }
            if(valUtil > parseFloat(max) || max == undefined || max == null)
            {
                max = valUtil;
            }
            document.getElementById('choice').value = "";
        }
    }
    else
    {
        for(i = 0; i < results.length; i++)
            {
                somme = somme + parseFloat(results[i]);
                console.log("resultats enregistrés: "+results[i]);
            }
            console.log("Dernière note: "+valUtil+" Total: "+somme);
        var moyenne = somme / nbreSaisies;
        document.getElementById('exo2').innerHTML = '<p>Compris entre '+min+' et '+max+' pour une moyenne de '+moyenne;
    
    }
});
    
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
    var multiplicateur=0;
    var numerateur;
    var produit;
    var inputC = document.createElement("input");

    function addTable()
    {
        multiplicateur++;
        var h2 = document.createElement("h2");
        h2.innerText="Table de " + multiplicateur;
        document.body.appendChild(h2);

        for(numerateur=1; numerateur<11; numerateur++)
            {
                produit = numerateur * multiplicateur;

                var affichage = document.createElement("p");
                affichage.innerText = multiplicateur + "x " + numerateur + "= "  + produit;
                document.body.appendChild(affichage);               
            }
    }

    inputC;
    inputC.setAttribute("type", "button");
    inputC.value ="start";
    inputC.id = "input1";
    document.body.appendChild(inputC);
   
    inputC.addEventListener("click", addTable);
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
