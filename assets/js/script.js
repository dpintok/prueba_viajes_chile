$(document).ready(function () {
    
    // Scroll menu + BG Color
    $(window).scroll(function () {
        if ($("#menu").offset().top>56) {
            $("#menu").addClass("abajo");
        } else {
            $("#menu").removeClass("abajo");
        }
    });

    // Funcion Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip({
          boundary: "window",
          template:
            '<div class="tooltip tooltip-custom" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        });
      });


    // EFECTO Toggle en cards
    $(".card-title-01").click(function () {
        $(".card-text-01").toggle("slow");
    });

    // Card 02
    $(".card-title-02").click(function () {
        $(".card-text-02").toggle("slow");
    });

    // Card 03
    $(".card-title-03").click(function () {
        $(".card-text-03").toggle("slow");
    });

    // Card 04
    $(".card-title-04").click(function () {
        $(".card-text-04").toggle("slow");
    });    

    // Evento Formulario de Contacto
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });

})