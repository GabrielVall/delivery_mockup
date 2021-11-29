$(document).ready(function(){
  cambiar_contenido_hash();
  
  window.onhashchange = function() {
    cambiar_contenido_hash();
  };

  function cambiar_contenido_hash() {
    var hash = window.location.hash;
    hash = hash.replace('#', '');
    cambiar_hash(hash);
  }

  $(document).on("click", "#radio-1", function() {
    window.location.hash ="";
  });

  $(document).on("click", ".href", function() {
    var href = $(this).data("ref");
    window.location.hash = href;
  });

  $(document).on("click", ".orden-pendiente", function() {
    $(this).find('span').addClass('animate__animated animate__backOutLeft');
    setTimeout(function() {
      $(".nuevo-pedido").remove();
    }, 300);
  });

//   $(document).on("click", "#radio-2", function() {
//     window.location.hash ="menu";
//   });

  function cambiar_hash(hash){
      if(!hash || hash == '') hash = 'inicio';
      $.ajax({
        type: 'POST',
        url: 'vistas/'+hash+'.php',
        success: function(respuesta) {
            $("#contenedor_vista").removeClass('animate__backInLeft');
            $("#contenedor_vista").addClass('animate__backOutRight');
            setTimeout(function() {
                $("#contenedor_vista").html(respuesta);
                $("#contenedor_vista").addClass('animate__backInLeft');
                $("#contenedor_vista").removeClass('animate__backOutRight');
            }, 400);
        },error: function() {   
            cambiar_hash('');
        }
      });
  }

  $(document).on('click', "#ver_detalles_next", function(){
    $("#detalles").slideToggle();
  });

  $(document).on('click', "#ver_detalles_cliente", function(){
    $("#detalles_cliente").slideToggle();
  });

  $(document).ajaxStart(function () {
    NProgress.start();
    NProgress.set(0.4);
    NProgress.set(0.6);
  }).ajaxStop(function () {
  	setTimeout(function() {
      NProgress.done();
	}, 500);

  });

});