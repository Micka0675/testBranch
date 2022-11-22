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