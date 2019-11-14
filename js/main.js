/* <!--  
 _  _  _  _   _   _   _
/-\ |\/| |-_  |) |-_ |-_       DERA   

   ___    _____            
   /   | / /  \ \
  / /| |/ /    | |
 / ___ / /    | |
/_/  |_\_\___/_/




--> */
/* Fonction pour popup à chaque redirection */
	function popup (str)
	{
	alert ("Vous êtes sur le point de changer de page") ;
	}
// Fin de script
/*===============================
Modification du style du popup
-------------------
| script protégé  |
===============================*/
// La toute première chose est de modifier la fonction alert. Ainsi, on appelera non plus la methode du navigateur mais une fonction personnalisée
window.alert = function(text, aname)
{
	//Creation de la boite
	var div = document.createElement("div");
	var box = document.body.appendChild(div);
	box.setAttribute("class", "alertBox");
	box.style.display = "none";	
	
	// Creation titre
	var span = document.createElement("span");
	var title = box.appendChild(span);
	title.setAttribute("class", "alertTitle");
	
	//Bouton fermant
	var img = document.createElement("img");
	var close = box.appendChild(img);
	close.src = "dialog-close.png";
	close.width = 1;
	close.onclick = function()
	{
		document.body.removeChild(box);
	}
	
	// Creation du contenu
	span = document.createElement("span");
	var content = box.appendChild(span);
	content.setAttribute("class", "alertContent");
	content.style.textAlign = "center";
	
	// Insertion contenus, notamment modification du titre
	if(typeof(aname) == "undefined")
		aname = "Popup d'alerte"//nouveau titre
	title.innerHTML = aname;//appel du titre
	content.innerHTML = text;

	// Definition des style

	var width = 360; // largeur
	var height = [160, 480]; // hauteur [min, max]

	box.style.position = "absolute";
	box.style.zIndex = 9998;
	box.style.overflox = "hidden";
	box.style.left = "50%";
	box.style.top = "50%";
	box.style.width = width + "px";
	box.style.minHeight = height[0] + "px";
	box.style.maxHeight = height[1] + "px";
	box.style.marginLeft = -(width / 2) + "px";
	box.style.marginTop = -(box.offsetHeight / 2) + "px";
	box.style.border = "1px #000000 solid";
	box.style.backgroundColor = " #1e90aa";//couleur de la page
	box.style.fontFamily = "sans-serif";

	// CSS3
	box.style.borderTopRadius = "15px";
	box.style.borderBottomRadius = "5px";
	box.style.MozBorderRadius = "10px";
	box.style.boxShadow = "2px 2px 5px #000000";
	box.style.MozBoxShadow = "2px 2px 12px #000000";
	
	//Boutton OK
	close.style.position = "absolute";
	close.style.cursor = "pointer";
	close.style.zIndex = 9999;
	close.style.right = "175px";
	close.style.bottom = "20px";

	title.style.display = "block";
	title.style.width = "100%";
	title.style.height = "32px";
	title.style.lineHeight = "32px";
	title.style.textAlign = "center";
	title.style.backgroundColor = "#000000";
	title.style.color = "#9a90ff";//bleu
	title.style.fontWeight = "bold";
	// CSS3
	box.style.borderRadius = "5px";
	box.style.MozBorderRadius = "5px";
	
	content.style.display = "block";
	content.style.width = (width - 8) + "px";
	content.style.minHeight = (height[0] - 40) + "px";
	content.style.margin = "4px";
	content.style.fontSize = "14px";
	content.style.overflow = "auto";
	content.style.textAlign = "center";

	// Affichage
	box.style.display = "block";
	
	// Cette fonction recursive permet de replacer la boite au centre meme si la fenetre est redimensionée
	replacement(box);	
}

function replacement(boite)
{
	boite.style.marginTop = -(boite.offsetHeight / 2) + "px";
	setTimeout(function(){replacement(boite)}, 200);
}
//Fin//



////////Compteur de temps passé par l'utilisateur sur le site
// mettre la date butoire
	var countDownDate = new Date ("2019-04-22 23:59:00").getTime();//une date prise au hasard juste pour faire fonctionner le script

	// Mettre à jour le compteur chaque 1 seconde
	var x = setInterval(function() {

	  // Date et heure d'aujourd'hui
	  var now = new Date().getTime();

	  // Calcul de la distance
	  var distance =countDownDate - now;

	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  // résultat du script dans lélément avec l'id="demo"
	  document.getElementById("demo").innerHTML = days + "J " + hours + "H " + minutes + "mn " + seconds + "s ";

	  // Texte par défaut si la date butoire est atteinte !
	  if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "Inauguration passée";
	  }
	}, 1000);
	
	
	