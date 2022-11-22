var valUtil = parseFloat(prompt('Veuillez entrer une valeur'));
var nbreSaisies = 0;
var min=null;
var max=null;
var somme = 0;
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
var moyenne = somme / nbreSaisies;
alert('Compris entre '+min+' et '+max+'Pour une moyenne de '+moyenne+' Au revoir!');