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

while (cRep != "o" && cRep != "n")
{
	alert("Rentrez un caractère valide");
	cRep = prompt("Voulez-vous recommencer (o/n) ?");
}