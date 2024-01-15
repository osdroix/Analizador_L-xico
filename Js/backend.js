var BD = [ ["AAIR", "Marcapasos con estimulación auricular inhibida a demanda con respuesta de frecuencia"],
           ["ABS", "Abceso"],
           ["ABT", "Antibiótico"],
           ["Ac", "Antes de las comidas"],
           ["ACE", "Antígeno carcinoembrionario È Arteria carótida externa"],
           ["Acro", "Prefijo que indica relación con las extremidades o con una punta o extremo"],
           ["ACTH", "Adrenocorticotrophic hormone (Hormona adrenocorticotropa). Es estimulante de la corteza suprarrenal."],
           ["Ad", "Oido Derecho"],
           ["AHC", "Anemia hemolítica crónica"],
           ["Al", "Oido Izquierdo"],
           ["Am", "Ampolla"],
           ["Am", "Antes del mediodia"],
           ["Ampuloma", "Tumor de la ampolla de Vater. Generalmente es maligno pero no siempre"],
           ["Ana", "Anestesia"],
           ["Anat. Pat", "Anatomía patológica"],
           ["Ap", "Agua"],
           ["Au", "Ambos Oidos"],
           ["Beb", "Bebible"],
           ["BEG","Buen estado general"],
           ["BIC","Bomba de infusión continua"],
           ["Bid","Dos veces al día (por sus siglas en inglés 'Twice a day')"],
           ["BMN","Biopsias múltiples normalizadas (son biopsias de vejiga que se hacen durante una RTU de vejiga en diversas áreas de la misma)"],
           ["BNE","Broncoespasmo"],
           ["BPAEG","Bajo peso pero adecuado a su edad gestacional"],
           ["BR","Bajo riesgo"],
           ["BRT","Bilirrubina total"],
           ["BSP","Bromosulftaleínal"],
           ["C/c","Con comida"],
           ["C/s","Sin comida"],
           ["DAB","Dolor abdominal"],
           ["Dch","Derecho/a"],
           ["Eco","Ecografía"],
           ["ER","Estudio radiológico"],
           ["Evol","Evolución"],
           ["FTC","Forma, tamaño y consistencia"],
           ["Fx","Fractura"],
           ["g","Gramo"],
           ["Hb","Hemoglobina"],
           ["HCT","Hidroclorotiazida o Hidrocortisona"],
           ["HP","Hipertensión pulmonar"],["Hta","Hipertensión arterial"],["IA","Intraarterial. Dentro de la luz de una arteria"],["IC","Intracerebral. Dentro del cerebro"],["ICV","Intracerebro ventricular. Efectos localesy cerebrales rápidos"],["ID","Intradérmica. Dentro de la capa dérmica de la piel"],["IM","Intramuscular. Dentro de un músculo del esqueleto"],["IP","Intraperitoneal. Dentro de la cavidad peritoneal"],["IT","Intratecal. Dentro del espacio espinal subaracnoideo"],["IV","Intravenosa. Dentro de una vena"],["J","Juicio È Símbolo de Joule (julio). Unidad de energía y calor"],["JC","Juicio clínico È Virus JC (tipo de virus del Papiloma humano)"],["JD","Juicio diagnóstico"],["JHF","Jaqueca hemipléjica familiar"],["JM","Juicio médico"],["JUAP","Jefe de unidad de atención prima"],["Mapa","Monitorización ambulatoria de la presión arterial"],  ["mc", "Masa corporal"],["PRN", "Según sea necesario"],["PTZ", "Piperacilina/Tazobactam"],["Qd", "Diariamente"],["TAMO", "Trasplante autólogo de médula ósea"],["TAPP", "Tensión arterial postparto"],["TAS", "Tensión arterial sistólica"],["TBC", "Tuberculosis"],["TBCP", "Tuberculosis pulmonar"],["TBMR", "Tuberculosis multirresistente"],["TCE", "Traumatismo craneoencefálico"],["TCP", "Trigonocervicoprostatectomía."],["TEPA", "Tromboembolismo pulmonar agudo"],["TG", "Triglicéridos"],["Tid", "Tres veces al dia"],["TIMI", "Estudio de la trombolisis en el infarto de miocardio"],["TMS", "Cotrimoxazol o Trimetroprima-sufametoxazol"],["UCM", "Uretrocistografía miccional"],["UEG", "Unión esofagogástrica"],["UF", "Ultrafiltración"],["UFC","Unidad formadora de colonias"],["UGD","Uroflujometría"],["UGE","Unión gastroesofágica"],["URS","Uretrorrenoscopia"],["USD","Ultrasonografía Doppler"],["VO","Vía oral"],["VSI","Por vía subcutánea"],["VVI","Marcapasos de estimulación ventricular inhibida por sensibilización ventricular / Volumen ventricular izquierdo"],["WAIS","Síndrome de Wolff-ParkinsonWhite"],["WB","Western blot («manchas Western»). Es un análisis de inmunotransferencia de proteínas virales del HIV"],["WHOQOL","World Health Organization Quality of Life (Instrumento de evaluación de calidad de vida de la Organización Mundial de la Salud)"],["WISC","Wechsler Intelligence Scale for Children (Test de inteligencia de Wechsler para niños)"],["XA","Factor X activado, coagulación/ Quiasma"],["XHUP","Xarxa hospitalaria de utilització pública (Red hospitalaria de utilización pública, Cataluña)"],["XP","Xeroderma pigmentoso"],["Yátrico","Relativo a la medicina o al médico"],["Yatrógeno","Producido por el médico o los cuidados médicos"],["YID", "Yugular interna derecha"],["YII", "Yugular interna izquierda"],["YPP", "Yeso pelvipédico"],["ZAR", "Zyoptix Ablation Refinements. Técnica de cirugía refractaria para corregir miopía, hipermetropía y astigmatismo"],["ZIG", "Zoster immunoglobulin (Inmunoglobulina contra el herpes zoster)."],["ZTA", "Zona de transformación atípica"]];

var text;

function extractText() {
  var file = document.getElementById('file').files[0];
   if (!file) {
              var output = document.getElementById('output');
            output.innerHTML = '<br><label class="error">Por favor, seleccione un archivo</label>';
           return;
  } else if (file.type !== 'application/pdf') {
            var output = document.getElementById('output');
            output.innerHTML = '<br><label class="error">Por favor, seleccione un archivo PDF.</label>';
           return;
  }else if (file.size == 0) {
            var output = document.getElementById('output');
            output.innerHTML = '<br><label class="error">El archivo está vacío</label>';
           return;
  } else{
  var reader = new FileReader();

  reader.onload = function() {
    // Carga el archivo PDF
    pdfjsLib.getDocument({ data: new Uint8Array(reader.result) })
    .promise
    .then(function(pdf) {
      // Extrae el contenido de texto del primer página del archivo PDF
      return pdf.getPage(1).then(function(page) {
        return page.getTextContent();
      });
    })
    .then(function(textContent) {
      // Convierte el contenido de texto a una cadena y lo muestra en la página web
      text = textContent.items.map(function(item) {
        return item.str;
      }).join(' ').toLowerCase();
      //Manejar el texto que salio del pdf y hacer la busqueda
      var outputString = "";

      var Subtext = text.split(/[ .]+/); //<----------- una expresion regularrrrrrrrrrrrr

      // Iteramos sobre cada abreviatura en el array y buscamos si aparece en el texto
        for (var i = 0; i < BD.length; i++) {
          var abreviatura = BD[i][0];
          var definicion = BD[i][1];

          if (Subtext.includes(abreviatura.toLowerCase())) {
            //Esta es la salida
            //agrega aqui la funcion del modal
            outputString += '<h6>'+ 
                              abreviatura +': '
                             + definicion + 
                             '</h6>';
          }
        }
        if (outputString === '') {
            var output = document.getElementById('output');
            output.innerHTML = '<br><label class="error">No se encontraron abreviaturas en el PDF.</label>';
          } else {
            // Creamos el modal con Bootstrap
            var modal = document.createElement('div');
            modal.classList.add('modal', 'fade');
            modal.id = 'resultModal';
            modal.tabIndex = '-1';
            modal.role = 'dialog';
            modal.setAttribute('aria-labelledby', 'resultModalLabel');
            modal.setAttribute('aria-hidden', 'true');
            modal.innerHTML = `
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1>Resultados</h1>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
                      <span aria-hidden="true">&times;</span>
                    </button> 
                  </div>
                  <div class="modal-body" id="modal-body">
                    <h1>PillPilot</h1>
                    <p>Desglose de abreviaturas encontradas:</p> 
                    ${outputString}
                  </div>
                  <div class="limpia" id="limpia">
                  <button onclick="downloadText()" class="btn-pilD">Descargar</button>
                </div>
              </div>
            `;

            // Agregamos el modal al body del HTML
            document.body.appendChild(modal);

            // Mostramos el modal con jQuery
            $('#resultModal').modal('show');
          }
    });
  };

  reader.readAsArrayBuffer(file);
}
}
// Agrega un evento de clic al botón de extracción de texto
var extractButton = document.getElementById('extract');
extractButton.addEventListener('click', extractText);

function downloadText() {
  var fecha = new Date();
  // Obtener el día del mes (1-31)
  var dia = fecha.getDate();
  // Obtener el mes (0-11)
  var mes = fecha.getMonth() + 1;
  // Obtener el año (cuatro dígitos)
  var anio = fecha.getFullYear();
  // Crear una cadena con la fecha en formato dd/mm/yyyy
  var fechaActual = dia + '/' + mes + '/' + anio;
  
  // Obtener el contenido del texto a descargar
  var outputString = document.getElementById('modal-body').innerText;

  // Crear un objeto Blob con el contenido de texto
  var blob = new Blob([outputString], {type: 'text/plain'});

  // Crear un enlace de descarga para el archivo de texto
  var downloadLink = document.createElement('a');
  downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = 'PillPilot/'+fechaActual+'.txt';

  // Hacer clic en el enlace de descarga para descargar el archivo
  downloadLink.click();
  
 var output = document.getElementById('output');
            output.innerHTML = '';

 var output = document.getElementById('limpia');
            output.innerHTML = '<img src="https://img1.picmix.com/output/stamp/normal/4/8/5/4/314584_6038d.gif" width="55" height="55"><br> <h6 class="cool">Descargado</h6>' ;



 setTimeout(function() {
    location.reload();
  }, 4000);
}
const fileInput = document.getElementById('file');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', function() {
  const file = this.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', function() {
    if (file.type.includes('image')) {
      // si el archivo es una imagen
      const img = new Image();
      img.src = reader.result;
      preview.innerHTML = '';
      preview.appendChild(img);
    } else {
      // si el archivo no es una imagen
      preview.innerHTML = file.name;
    }
  });

  reader.readAsDataURL(file);
});



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



