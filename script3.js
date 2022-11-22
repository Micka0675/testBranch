var text = document.getElementById("test");
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

    restart =prompt("Voulez-vous recommmencer  ? o/n  ")
}