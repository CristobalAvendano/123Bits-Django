fn_ocultarEtiquetas();


var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
    modal.style.display = "none";
}

var modal = document.getElementById("myModal");
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
    modal.style.display = "none";
}
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
    modal.style.display = "none";
}
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg4");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
    modal.style.display = "none";
}
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg5");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
    modal.style.display = "none";
}
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg6");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
    modal.style.display = "none";
}
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg7");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
    modal.style.display = "none";
}
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg8");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
    modal.style.display = "none";
}
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg9");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];



function fn_ocultarEtiquetas() {

    $('#lbl_nombre').hide();

    $('#lbl_apellido').hide();

    $('#lbl_rut').hide();

    $('#lbl_correo').hide();

    $('#lbl_contrasena').hide();

    $('#lbl_contrasena2').hide();

    $('#lbl_cantidad').hide();

    $('#lbl_moneda').hide();

    $('#lbl_producto').hide();

    $('#lbl_vuelto').hide();

    $('#lbl_consola').hide();
}

function fn_nombreVacio() {

    var nombre = $('#txt_nombre').val();

    if (nombre == "") {

        $('#lbl_nombre').show();

        $('#txt_nombre').addClass('is-invalid');

    } else {

        $('#lbl_nombre').hide();

        $('#txt_nombre').removeClass('is-invalid');

        $('#txt_nombre').addClass('is-valid');

    }
}

function fn_apellidoVacio() {

    var apellido = $('#txt_apellido').val();

    if (apellido == "") {

        $('#lbl_apellido').show();

        $('#txt_apellido').addClass('is-invalid');

    } else {

        $('#lbl_apellido').hide();

        $('#txt_apellido').removeClass('is-invalid');

        $('#txt_apellido').addClass('is-valid');

    }
}

function fn_correoVacio() {

    var correo = $('#txt_correo').val();

    if (correo == "") {

        $('#lbl_correo').show();

        $('#txt_correo').addClass('is-invalid');

    } else {

        $('#lbl_correo').hide();

        $('#txt_correo').removeClass('is-invalid');

        $('#txt_correo').addClass('is-valid');

    }
}

function fn_contrasenaVacia() {

    var contrasena = $('#txt_contrasena').val();

    if (contrasena == "") {

        $('#lbl_contrasena').show();

        $('#txt_contrasena').addClass('is-invalid');

    }
    else {
        $('#lbl_contrasena').hide();

        $('#txt_contrasena').removeClass('is-invalid');

        $('#txt_contrasena').addClass('is-valid');

    }
}

function fn_contrasenasIguales() {

    var contrasena = $('#txt_contrasena').val();
    var contrasena2 = $('#txt_contrasena2').val();

    if (contrasena != contrasena2) {

        $('#lbl_contrasena2').show();
        $('#txt_contrasena2').addClass('is-invalid');

    }
    else if (contrasena2 == "") {
        $('#lbl_contrasena2').show();
        $('#txt_contrasena2').addClass('is-invalid');
    }
    else {
        $('#lbl_contrasena2').hide();
        $('#txt_contrasena2').removeClass('is-invalid');
        $('#txt_contrasena2').addClass('is-valid');
    }
}

function fn_consolaVacia() {

    var consola = $('#cmb_consolas option:selected').text();

    if (consola == ' -- Seleccione --') {

        $('#lbl_consola').show();

        $('#cmb_consolas').addClass('is-invalid');

    } else {

        $('#lbl_consola').hide();

        $('#cmb_consolas').removeClass('is-invalid');

        $('#cmb_consolas').addClass('is-valid');

    }
}

function fn_monedaVacia() {

    var moneda = $('#cmb_moneda option:selected').text();

    if (moneda == '-- Seleccione --') {

        $('#lbl_moneda').show();

        $('#cmb_moneda').addClass('is-invalid');

    } else {

        $('#lbl_moneda').hide();

        $('#cmb_moneda').removeClass('is-invalid');

        $('#cmb_moneda').addClass('is-valid');

    }
}

function fn_productoVacio() {

    var producto = $('#cmb_producto option:selected').text();

    if (producto == '-- Seleccione --') {

        $('#lbl_producto').show();

        $('#cmb_producto').addClass('is-invalid');

    } else {

        $('#lbl_producto').hide();

        $('#cmb_producto').removeClass('is-invalid');

        $('#cmb_producto').addClass('is-valid');

    }
}

function fn_cantidadVacia() {

    var cantidad = $('#txt_cantidad').val();

    if (cantidad == "") {

        $('#lbl_cantidad').show();

        $('#txt_cantidad').addClass('is-invalid');

    }
    else {
        $('#lbl_cantidad').hide();

        $('#txt_cantidad').removeClass('is-invalid');

        $('#txt_cantidad').addClass('is-valid');

    }
}

function fn_limpiarFormularioRegistro() {

    $('#txt_nombre').val("");
    $('#lbl_nombre').hide();
    $('#txt_nombre').removeClass('is-invalid');
    $('#txt_nombre').removeClass('is-valid');

    $('#txt_apellido').val("");
    $('#lbl_apellido').hide();
    $('#txt_apellido').removeClass('is-invalid');
    $('#txt_apellido').removeClass('is-valid');

    $('#txt_contrasena').val("");
    $('#lbl_contrasena').hide();
    $('#txt_contrasena').removeClass('is-invalid');
    $('#txt_contrasena').removeClass('is-valid');

    $('#txt_correo').val("");
    $('#lbl_correo').hide();
    $('#txt_correo').removeClass('is-invalid');
    $('#txt_correo').removeClass('is-valid');

    $('#txt_contrasena2').val("");
    $('#lbl_contrasena2').hide();
    $('#txt_contrasena2').removeClass('is-invalid');
    $('#txt_contrasena2').removeClass('is-valid');


    $('#cmb_consolas').val('-- Seleccione --');
    $('#lbl_consola').hide();
    $('#cmb_consolas').removeClass('is-invalid');
    $('#cmb_consolas').removeClass('is-valid');

}


function fn_moneda() {
    $.getJSON('https://mindicador.cl/api', function (data) {
        var indicadores = data;
        var seleccion = $('#cmb_moneda option:selected').text();
        var producto = $('#cmb_producto option:selected').text();
        var valorProducto = 0;
        var valor = '';
        var cantidad = $('#txt_cantidad').val();
        var pago = $('#txt_pago').val();
        var vuelto = $('#txt_vuelto').val();
        /*var totalCompra = $('#txt_total').val();*/


        if (seleccion.toUpperCase() == 'USD') {
            valor = indicadores.dolar.valor;
        } else if (seleccion.toUpperCase() == 'EURO') {
            valor = indicadores.euro.valor;
        } else if (seleccion.toUpperCase() == 'CLP') {
            valor = 1;
        }

        if (producto == 'Consola Nintendo        $100.000 CLP') {
            valorProducto = 100000;
        } else if (producto == 'Juego Nintendo           $40.000 CLP') {
            valorProducto = 40000;
        } else if (producto == 'Consola PlayStation     $150.000 CLP') {
            valorProducto = 150000;
        } else if (producto == 'Juego PlayStation        $45.000 CLP') {
            valorProducto = 45000;
        } else if (producto == 'Consola Sega              $80.000 CLP') {
            valorProducto = 80000;
        } else if (producto == 'Juego Sega                 $25.000 CLP') {
            valorProducto = 25000;
        }

        /*$('#txt_montoprod').val(valorProducto);*/
        var calculoCompra = Math.round(valorProducto / valor) * cantidad;
        var totalCompra = $('#txt_total').val(calculoCompra)
        console.log(calculoCompra)
        function fn_desglose() {
            $('#txt_producto').text('Producto:   ').append($('#cmb_producto option:selected').text());
            $('#txt_cantidad2').text('Cantidad:   ').append($('#txt_cantidad').val());
            $('#txt_total2').text('Total compra:   $').append($('#txt_total').val());
        }
        fn_desglose();
        $('#txt_pago').keydown(function (e) {
            console.log('SOY EL VUELTO' + vuelto)
            if (e.keyCode == 13 || e.keyCode == 9 || e.keyCode == 'enter' || e.keyCode == 'tab' && pago > calculoCompra) {
                pago = $('#txt_pago').val();
                vuelto = $('#txt_vuelto').val((Math.round(pago)) - (Math.round((valorProducto / valor) * cantidad)));
                $('#lbl_vuelto').hide();
                $('#txt_vuelto').removeClass('is-invalid');
                $('#txt_vuelto').addClass('is-valid');
                $('#txt_vueltoFaltante').hide();
            }
            if (pago < calculoCompra) {
                console.log("entre al ELSE IF DEL VUELTO")
                vuelto = $('#txt_vuelto').val('')
                $('#lbl_vuelto').show();
                $('#txt_vueltoFaltante').show();
                $('#txt_vueltoFaltante').text('Le faltan: $').append(calculoCompra - pago);
                $('#txt_vuelto').addClass('is-invalid');
            }

        }).fail(function () {
            console.log('Error al consumir la API!');
        });

    })

}

function fn_redireccionRegistro() {

    var nombre = $('#txt_nombre').val();
    var apellido = $('#txt_apellido').val();
    var correo = $('#txt_correo').val();
    var contrasena = $('#txt_contrasena').val();
    var contrasena2 = $('#txt_contrasena2').val();
    var consola = $('#cmb_consolas option:selected').text();
    var segundos = 5;
    var conteo = setInterval(function () {
        if (nombre != "" && apellido != "" && correo != "" && contrasena != "" && contrasena == contrasena2 && consola != '-- Seleccione --') {
            $('#modalConteo').modal('show');
            $("#txt_conteo").text('Seras redirigido al Inicio en ' + segundos + ' segundos');

            if (segundos == 0) {
                clearInterval(conteo);
                window.open('index.html', "_self");
            }
            else if ($("#cancelarConteo").click(function () {
                clearInterval(conteo);
                $('#modalConteo').modal('hide');
            }))
                segundos--;
        }
    }, 1000); console.log('SOY EL LOG DE REDIRECCION')
}





