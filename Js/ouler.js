var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});
var btnAbrirPopups = document.getElementById('btn-abrir-popups'),
  overlays = document.getElementById('overlays'),
  popups = document.getElementById('popups'),
  btnCerrarPopups = document.getElementById('btn-cerrar-popups');

btnAbrirPopups.addEventListener('click', function(){
  overlays.classList.add('active');
  popups.classList.add('active');
});

btnCerrarPopups.addEventListener('click', function(e){
  e.preventDefault();
  overlays.classList.remove('active');
  popups.classList.remove('active');
});
