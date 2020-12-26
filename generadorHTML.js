//FUNCIONES DE VALIDACION

    /*function validarBotonesBorrarYGenerar() {
        var contenidoDivPrevisualizacion = document.getElementById("previsualizacion");
        var BotonBorrar = document.getElementsByTagName("input")[17];
        var BotonGenerar = document.getElementsByTagName("input")[16];

        if(contenidoDivPrevisualizacion.length > 0) {
            BotonGenerar.disabled=false;
            BotonBorrar.disabled=false;
        }
        else {
            BotonGenerar.disabled=true;
            BotonBorrar.disabled=true;
        }
    }*/

    function validarCabecera() {
        var campoCabecera = document.getElementsByTagName("fieldset")[0];
        var cajaCabecera = campoCabecera.getElementsByTagName("input")[0].value;
        var selectCabecera = campoCabecera.getElementsByTagName("select")[0];
        var botonCabecera = campoCabecera.getElementsByTagName("input")[1];
        if (cajaCabecera.length > 0) {
            selectCabecera.disabled=false;
            botonCabecera.disabled=false;
        }
        else {
            selectCabecera.disabled=true;
            botonCabecera.disabled=true;
        }
    }
    function validarCajaTexto() {

        var campoTexto = document.getElementsByTagName("fieldset")[1];
        var ContenidoTexto = campoTexto.getElementsByTagName("input")[0].value;
        var botonTexto = campoTexto.getElementsByTagName("input")[1];

        if(ContenidoTexto.length > 0) {
            botonTexto.disabled=false;
        }
        else {
            botonTexto.disabled=true;
        }
    }
   
    function validarCajaBotones() {
        var campoBotones = document.getElementsByTagName("fieldset")[3];
        var radio1 = campoBotones.getElementsByTagName("input")[0];
        var radio2 = campoBotones.getElementsByTagName("input")[2];
        var radio3 = campoBotones.getElementsByTagName("input")[3];
        var botonBotones = campoBotones.getElementsByTagName("input")[4];

        if(radio1.checked||radio2.checked||radio3.checked) {
            CajaBotones.disabled=false;
        }
        else {
        CajaBotones.disabled=true;
    }
    }
    function validarBotonDeBotones() {
        var campoBotones = document.getElementsByTagName("fieldset")[3];
        var CajaBotones = campoBotones.getElementsByTagName("input")[1].value;
        var botonBotones = campoBotones.getElementsByTagName("input")[4];   

        if(CajaBotones.length > 0) {
            botonBotones.disabled=false;
        }
        else {
            botonBotones.disabled=true;
        }
    }




//FUNCIONES PARA AÑADIR ELEMENTOS

/*===================================================================*/
    
    function AnadirCabecera() {
        var campoCabecera = document.getElementsByTagName("fieldset")[0];
        var cajaCabecera = campoCabecera.getElementsByTagName("input")[0].value;
        var selectCabecera = campoCabecera.getElementsByTagName("select")[0];
        if(selectCabecera.options[0].selected) {
            var eleccion = "h1";
        }
        if(selectCabecera.options[1].selected) {
            var eleccion = "h2";
        }
        if(selectCabecera.options[2].selected) {
            var eleccion = "h3";
        }
        var cabecera = document.createElement(eleccion);
        var texto = document.createTextNode(cajaCabecera);
        cabecera.appendChild(texto);

        var contenedor = document.createElement("p");
        document.getElementById("previsualizacion").appendChild(contenedor);
        contenedor.appendChild(cabecera);

        campoCabecera.getElementsByTagName("input")[0].value="";
        campoCabecera.getElementsByTagName("input")[0].value.length=0;
        var botonCabecera = campoCabecera.getElementsByTagName("input")[1];
        botonCabecera.disabled=true;
        selectCabecera.disabled=true;

//--------------------------------------------------------------------------------------------------

    }
    function AnadirTexto(){
        var campoTexto = document.getElementsByTagName("fieldset")[1];
        var ContenidoTexto = campoTexto.getElementsByTagName("input")[0].value;

        var Texto = document.createTextNode(ContenidoTexto);

        var CajaNueva = document.createElement("Input");
        CajaNueva.setAttribute("type","text");

        var contenedor = document.createElement("p");
        document.getElementById("previsualizacion").appendChild(contenedor);
        contenedor.appendChild(Texto);
        contenedor.innerHTML += ' ';
        contenedor.appendChild(CajaNueva);

        campoTexto.getElementsByTagName("input")[0].value="";
        var botonTexto = campoTexto.getElementsByTagName("input")[1];
        botonTexto.disabled=true;

    }

//--------------------------------------------------------------------------------------------
    function tipoOpciones() {

        var campoOpciones = document.getElementsByTagName("fieldset")[2];
        var envio;

        //OPCIONES DE MENU
        var opcionRadio = campoOpciones.getElementsByTagName("input")[0];
        var opcionCheckbox = campoOpciones.getElementsByTagName("input")[2];
        var opcionDesplegable = campoOpciones.getElementsByTagName("input")[3];

        if (opcionRadio.checked==true) {
        campoOpciones.getElementsByTagName("input")[1].disabled=false;
        envio=campoOpciones.getElementsByTagName("input")[0].value;
        }

        else if (opcionCheckbox.checked==true){
        campoOpciones.getElementsByTagName("input")[1].disabled=false;
        envio = campoOpciones.getElementsByTagName("input")[2].value;
        }

        else if (opcionDesplegable.checked==true) {
        campoOpciones.getElementsByTagName("input")[1].disabled=false;
        envio = campoOpciones.getElementsByTagName("input")[3].value;
        }

        return envio;
        }



        function nombreOpciones () {

        var campoOpciones = document.getElementsByTagName("fieldset")[2];
        var envio = campoOpciones.getElementsByTagName("input")[1].value;
        campoOpciones.getElementsByTagName("input")[4].disabled=false;
       
        

        return envio;
        }

        function keyUpNumeroOpciones () {

        var campoOpciones = document.getElementsByTagName("fieldset")[2];
        var numeroOp= campoOpciones.getElementsByTagName("input")[4].value;
        var UltimaPosicionArrayInputs = campoOpciones.getElementsByTagName("input").length-1;
        var envio=new Array();

        //DIV PARA DESPLEGAR EL MENU CREADO
        var divOpciones = campoOpciones.getElementsByTagName("div")[0];

        //BUCLE QUE CREARA LOS INPUT
        if (numeroOp > 0 && numeroOp <=10){
            divOpciones.innerHTML = "";
            document.getElementById("idInput").disabled=false;
           
                //BUCLE PARA LA CREACION DE LAS CAJAS DE TEXTO
                for (i=0; i < numeroOp; i++) {
                    var cajaInput = document.createElement("input");
                    cajaInput.type="text";
                    divOpciones.appendChild(cajaInput);
                    var saltoDeLinea=document.createElement("br");
                    divOpciones.appendChild(saltoDeLinea);
                   
                }
            
        }
        else if (numeroOp==0) {
            divOpciones.innerHTML = "";
        }
        
        
        }

    function RellenarDivOpciones () {

            var previsualizacion = document.getElementById("previsualizacion");
            var tipo = tipoOpciones();
            var titulo = nombreOpciones();

            // LECTURA DE LAS OPCIONES EN LOS INPUTS CREADOS
            var campoOpciones = document.getElementsByTagName("fieldset")[2];
            var divOpciones = campoOpciones.getElementsByTagName("div")[0];
            var numeroPosicionesArray= divOpciones.getElementsByTagName("input").length;
            var arrayOpciones=new Array(numeroPosicionesArray);
            var nombreMenu = campoOpciones.getElementsByTagName("input")[1].value;

            //BUCLE PARA RELLERNAR EL ARRAY CON LOS VALORES DE LOS INPUTS
            for (i=0; i<numeroPosicionesArray; i++) {
            arrayOpciones[i]=divOpciones.getElementsByTagName("input")[i].value;
            }
            
            //FUNCION PARA COMPROBAR QUE NO SE MANDA NINGUN INPUT  DE LAS OPCIONES O NOMBRE DEL MENU VACIO
            function chequeoArray (valor, array) {
                return array.indexOf(valor)> -1;
            }
            if (chequeoArray("", arrayOpciones) || campoOpciones.getElementsByTagName("input")[1].value.length==0) {
                alert("Deben rellenarse todas las opciones");}
            
            else {
            
                
            //CREACION DE MENU CON RADIO BUTTONS
            if (tipo=="radio") {

                var parrafo = document.createElement("p");
                var enunciadoMenu = document.createElement("h2");
                parrafo.appendChild(enunciadoMenu);
                var Texto = document.createTextNode(nombreMenu);
                enunciadoMenu.appendChild(Texto);
                document.getElementById("previsualizacion").appendChild(parrafo);
                
                
                    //BUCLE PARA AÑADIR LAS OPCIONES DEL ARRAY "arrayOpciones"
                    for (i=0; i<numeroPosicionesArray; i++) {

                        var ContenidoTexto = arrayOpciones[i];
                        var radioBtn= document.createElement("input");
                        var saltoDeLineaRadios = document.createElement("br");
                        var nombreOpcionRadio = document.createTextNode(arrayOpciones[i]);
                        radioBtn.setAttribute("type",tipo);
                        radioBtn.setAttribute("name",nombreMenu);
                        radioBtn.setAttribute("value",arrayOpciones[i]);

                    //AÑADIR ELEMENTOS AL PARRAFO
                        parrafo.appendChild(radioBtn);
                        parrafo.appendChild(nombreOpcionRadio);
                        parrafo.appendChild(saltoDeLineaRadios);

                        //DEJAR LOS CAMPOS EN BLANCO
                        campoOpciones.getElementsByTagName("input")[0].checked=false;
                        campoOpciones.getElementsByTagName("input")[1].value="";
                        campoOpciones.getElementsByTagName("input")[1].disabled=true;
                        campoOpciones.getElementsByTagName("input")[4].value=null;
                        campoOpciones.getElementsByTagName("input")[4].disabled=true;
                        divOpciones.innerHTML='';
                        document.getElementById("idInput").disabled=true;
                    }
                    
            }

            //CREACION DE MENUS CON CHECKBOX
            else if (tipo=="checkbox") {

                var parrafo = document.createElement("p");
                var enunciadoMenu = document.createElement("h2");
                parrafo.appendChild(enunciadoMenu);
                var Texto = document.createTextNode(nombreMenu);
                enunciadoMenu.appendChild(Texto);
                document.getElementById("previsualizacion").appendChild(parrafo);
                
                    //BUCLE PARA AÑADIR LAS OPCIONES DEL ARRAY "arrayOpciones"
                    for (i=0; i<numeroPosicionesArray; i++) {

                        var ContenidoTexto = arrayOpciones[i];
                        var checkboxBtn= document.createElement("input");
                        var saltoDeLineaRadios = document.createElement("br");
                        var nombreOpcionRadio = document.createTextNode(arrayOpciones[i]);
                        checkboxBtn.setAttribute("type",tipo);
                        checkboxBtn.setAttribute("name",nombreMenu);
                        checkboxBtn.setAttribute("value",arrayOpciones[i]);

                    //AÑADIR ELEMENTOS AL PARRAFO
                        parrafo.appendChild(checkboxBtn);
                        parrafo.appendChild(nombreOpcionRadio);
                        parrafo.appendChild(saltoDeLineaRadios);
                        
                        //DEJAR LOS CAMPOS EN BLANCO
                        campoOpciones.getElementsByTagName("input")[2].checked=false;
                        campoOpciones.getElementsByTagName("input")[1].value="";
                        campoOpciones.getElementsByTagName("input")[1].disabled=true;
                        campoOpciones.getElementsByTagName("input")[4].value=null;
                        campoOpciones.getElementsByTagName("input")[4].disabled=true;
                        

                        divOpciones.innerHTML='';
                        document.getElementById("idInput").disabled=true;

                    }
            }

            //CREACION DE MENUS CON SELECTS
            else if (tipo=="select"){

                var parrafo = document.createElement("p");
                var enunciadoMenu = document.createElement("h2");
                var listaSelect = document.createElement("select");
                parrafo.appendChild(enunciadoMenu);
                parrafo.appendChild(listaSelect);
                var Texto = document.createTextNode(nombreMenu);
                enunciadoMenu.appendChild(Texto);
                document.getElementById("previsualizacion").appendChild(parrafo);
                
                    //BUCLE PARA AÑADIR LAS OPCIONES DEL ARRAY "arrayOpciones"
                    for (i=0; i<numeroPosicionesArray; i++) {

                        var ContenidoTexto = arrayOpciones[i];
                        var optionBtn= document.createElement("option");
                        var saltoDeLineaOptions = document.createElement("br");
                        var nombreOpcionSelect = document.createTextNode(arrayOpciones[i]);
                        optionBtn.setAttribute("value",arrayOpciones[i]);

                    //AÑADIR ELEMENTOS AL PARRAFO
                        listaSelect.appendChild(optionBtn);
                        optionBtn.appendChild(nombreOpcionSelect);
                        listaSelect.appendChild(saltoDeLineaOptions);

                        //DEJAR LOS CAMPOS EN BLANCO
                        campoOpciones.getElementsByTagName("input")[3].checked=false;
                        campoOpciones.getElementsByTagName("input")[1].value="";
                        campoOpciones.getElementsByTagName("input")[1].disabled=true;
                        campoOpciones.getElementsByTagName("input")[4].value=null;
                        campoOpciones.getElementsByTagName("input")[4].disabled=true;
                        divOpciones.innerHTML='';
                        document.getElementById("idInput").disabled=true;
                        
                    }

            }
            }
        }


    function AnadirBotones() {
        var campoBotones = document.getElementsByTagName("fieldset")[3];
        var radioButton = campoBotones.getElementsByTagName("input")[0];
        var radioReset = campoBotones.getElementsByTagName("input")[2];
        var radioSubmit = campoBotones.getElementsByTagName("input")[3];
        var valorBoton = campoBotones.getElementsByTagName("input")[1].value;

        var contenedor = document.createElement("p");
        document.getElementById("previsualizacion").appendChild(contenedor);


        if (radioButton.checked) {
            var radioButtonCreado = document.createElement("input");
            radioButtonCreado.setAttribute("type","button");
            radioButtonCreado.setAttribute("value", valorBoton);
            contenedor.appendChild(radioButtonCreado);
            campoBotones.getElementsByTagName("input")[0].checked=false;
        }
        if (radioReset.checked) {
            var radioResetCreado = document.createElement("input");
            radioResetCreado.setAttribute("type","reset");
            radioResetCreado.setAttribute("value", valorBoton);
            contenedor.appendChild(radioResetCreado);
            campoBotones.getElementsByTagName("input")[2].checked=false;
        }
        if (radioSubmit.checked) {
            var radioSubmitCreado = document.createElement("input");
            radioSubmitCreado.setAttribute("type","submit");
            radioSubmitCreado.setAttribute("value", valorBoton);
            contenedor.appendChild(radioSubmitCreado);
            campoBotones.getElementsByTagName("input")[3].checked=false;
        }
       campoBotones.getElementsByTagName("input")[1].value="";
        var botonBotones = campoBotones.getElementsByTagName("input")[4];
        botonBotones.disabled=true;
    }



    
    function borrarDiv() {
        var previsualizacion = document.getElementById("previsualizacion");
        var elemento = document.getElementsByTagName("p");
        var ultimoElemento = document.getElementsByTagName("p").length-1;
        previsualizacion.getElementsByTagName("p")[ultimoElemento].parentNode.removeChild(previsualizacion.getElementsByTagName("p")[ultimoElemento]);
   
  }
    
    function GenerarCodigo() {

        var contenidoDivPrevisualizacion = document.getElementById("previsualizacion").outerHTML;
       

        var miventana = window.open("","","width=10000,height=10000");
        miventana.document.open();
        miventana.document.write("<link rel='stylesheet' type='text/css' href='generadorHTML.css'>");
        miventana.document.write("<script>");
        miventana.document.write("");
        miventana.document.write("<\/script>");
        miventana.document.write("<button onclick='window.close();'>Cerrar Ventana</button>");
        miventana.document.write("<div id='zona'>"+contenidoDivPrevisualizacion+"</div>");   
        miventana.document.close();
    }

    $(function() {
        var canvas = document.getElementById("canvas");
        if (canvas.getContext) {
          var ctx = canvas.getContext("2d");
      
          ctx.fillStyle = "rgb(200,0,0)";
          ctx.fillRect (10, 10, 55, 50);
      
          ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
          ctx.fillRect (30, 30, 55, 50);
        }
      });
