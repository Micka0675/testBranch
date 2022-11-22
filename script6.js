var impair = 1;
document.write("<p>" + impair + " est le premier nombre impair</p>");
for(i = 1 ; i <= 19; i++)
{
    impair = impair + 2;
    document.write("<p>"+ impair + " est le "+ parseFloat(i+1) + " ème nombre impair</p>");
}