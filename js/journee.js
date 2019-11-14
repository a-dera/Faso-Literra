
    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
   /////////////////////////Ce script est la propriété de Amédée DERA////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
function showJournee() {
  var today=new Date();
  var month="";
  var day="";
  var month=today.getMonth();
  var day_of_week=today.getDay();
  document.month=""

  month++; // Le mois est compris entre 1 et 12
																		/*
	Script pour chaque mois, avec la traduction en même temps an francçais
 */ 

	if(month==1)
	{
			january(today.getDate());
			document.month="Janvier";
	}
	if(month==2)
	{
			february(today.getDate());
			document.month="F&eacute;vrier";
	}
	if(month==3)
	{
			march(today.getDate());
			document.month="Mars";
	}
	if(month==4)
	{
			april(today.getDate());
			document.month="Avril";
	}
	if(month==5)
	{
			may(today.getDate());
			document.month="Mai";
	}
	if(month==6)
	{
			june(today.getDate());
			document.month="Juin";
	}

	if(month==7)
	{
			july(today.getDate());
			document.month="Juillet";
	}
	if(month==8)
	{
			august(today.getDate());
			document.month="Août";
	}
	if(month==9)
	{
			september(today.getDate());
			document.month="Septembre";
	}
	if(month==10)
	{
			october(today.getDate());
			document.month="Octobre";
	}
	if(month==11)
	{
			november(today.getDate());
		   document.month="Novembre";
	}
	if(month==12)
	{
			december(today.getDate());
			document.month="D&eacute;cembre";
	}

	document.day=""

	if(day_of_week==0)
			document.day="Dimanche";
	if(day_of_week==1)
			document.day="Lundi";
	if(day_of_week==2)
			document.day="Mardi";
	if(day_of_week==3)
			document.day="Mercredi";
	if(day_of_week==4)
			document.day="Jeudi";
	if(day_of_week==5)
			document.day="Vendredi";
	if(day_of_week==6)
			document.day="Samedi";
     
	return (document.day + " " + today.getDate() + " " + document.month + " " + today.getFullYear()); // c'est cette ligne qui fait tout le travail!
}
/*  Ces fonctions sont très importantes  */
function january(date)
{
      
}
function february(date)
{
       
}
function march(date)
{
}
function april(date)
{
        
}

function may(date)
{
       
}
function june(date)
{

}
function july(date)
{

       
}
function august(date)
{
}
function september(date)
{
}
function october(date)
{
        
}
function november(date)
{

}
function december(date)
{
      
}
// -- Fin donc du script -->