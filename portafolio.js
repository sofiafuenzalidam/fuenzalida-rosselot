// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "COOKTENT",
    about: "Cocina por inducción electromagnética para cocinar en el interior de la carpa.",
    año: '2017',
}, {
    figure: "media/foto-02.jpg",
    title: "PHILODRY",
    about: "Ropa interior deportiva especializada para personas con sobrepeso u obesidad, que sufren problemas dermatológicos o sudoración excesiva.",
    año: '2017',
}, {
    figure: "media/foto-03.jpg",
    title: "ENTRENOS",
    about: "Entrenos es un juego de astucia y percepción, que nace a partir del juego 'Monito Mayor'.",
    año: '2017',
}, {
    figure: "media/foto-04.jpg",
    title: "LINTERNA LEICA",
    about: "Linterna inspirada en el diseño de la cámara Leica X.",
    año: '2016',
}, {
    figure: "media/foto-05.jpg",
    title: "SILLA INFANTIL",
    about: "Silla de madera para niños inspirada en la libélula.",
    año: '2016',
}, {
    figure: "media/foto-06.jpg",
    title: "U-NIDOS",
    about: "Accesorio de cama, diseñado para la comodidad del descanso de la madre junto a su bebé.",
    año: '2017',
}, {
    figure: "media/foto-07.jpg",
    title: "KAPORTE",
    about: "Arnés especializado para el transporte de carretillas de carga.",
    año: '2018',
}, {
    figure: "media/foto-08.jpg",
    title: "MAGNETAS",
    about: "Tablas modulares que se unen a partir de imanes para formar distintos muebles para niños: dos sillas, una banca y una repisa.",
    año: "2018",
},
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + ' || ' + trabajos[i].año + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});