var profesores = new Array("Fernando","Marian","Ana","Daniel");
var asignaturas = new Array("DWEC","DWES","DIW","DAW");
var hProfAsig;

var horarioMap = new Map();

function horarioAsignatura(profesor, asignatura, dia, hora){

    this.profesor=profesor;
    this.asignatura=asignatura;
    this.dia=dia;
    this.hora=hora;
}

var horarioMap=new Map();

bGrabar.addEventListener('click',grabar,false);

function grabar(){
    var Profesor = document.getElementById('cNombre').value;
    var Asignatura = document.getElementById('cAsignatura').value;
    var Dias = document.getElementById('cDias').value;
    var Hora = document.getElementById('cHora').value;
    console.log(Profesor+" "+Asignatura+" "+Dias+" "+Hora);

    hProfAsig = new horarioAsignatura(Profesor,Asignatura,Dias,Hora);

    tabla(hProfAsig);
}
//clase1 = new clase(NombreProfesor,NombreAsignatura,DiaSemana,HoraDelDia);

function tabla(hProfAsig){
    /*var row=(this).find('tr:nth-child('+Hora+')')*/
    // Poner asignatura sin ids
    //document.getElementById('Clases').find('tr:nth-child('+Hora+') td:nth-child('+Dias+')').value=Asignatura;
    //document.getElementsByTagNameNS('tr:nth-child('+Hora+') td:nth-child('+Dias+')').value=Asignatura;
    //document.getElementsByTagName('tr:nth-child('+Hora+') td:nth-child('+Dias+')').value=Asignatura;
    
    var key = this.id;
        horariocelda = horarioMap.get(key);
    horarioMap.set("c" + hProfAsig.hora + hProfAsig.dia, hProfAsig);

    console.log(document.getElementById('c'+hProfAsig.hora+hProfAsig.dia));
    document.getElementById('c'+hProfAsig.hora+hProfAsig.dia).innerHTML=hProfAsig.asignatura;
    
    

}
function visualizaMapa(){
    document.getElementById("cNombre").value=hProfAsig.profesor;
    document.getElementById("cAsignatura").value=hProfAsig.asignatura;
    document.getElementById("cDias").value=hProfAsig.dia;
    document.getElementById("cHora").value=hProfAsig.hora;
}