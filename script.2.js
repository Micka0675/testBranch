valUtil = parseFloat(prompt('Veuillez entrer une valeur'));
nbreSaisies = 0;
min=null;
max=null;
somme = 0;
while(valUtil!=0)
{
    nbreSaisies++;
    if(valUtil<min || min == null)
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
moyenne = somme / nbreSaisies;
alert('Compris entre '+min+' et '+max+'Pour une moyenne de '+moyenne+' Au revoir!');