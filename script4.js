var multiplicateur;
var numerateur;
var produit;
var restart = 'o';

while(restart!='n')
{
    for(multiplicateur=1; multiplicateur<11; multiplicateur++)
    {
        for(numerateur=1; numerateur<11; numerateur++)
        {
            produit = numerateur * multiplicateur;
            alert(numerateur + "x " +   multiplicateur + "= "  + produit);
        }

        restart = prompt("Appuyez sur n pour interrompre l'affichage");
    }
}