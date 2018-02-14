$( document ).ready( function(){
	$( ".formulario" )
        .find( "input[type=text], input[type=tel], input[type=tel]" )
        .on( "keypress", function( evt ) {
            var $c = $(evt.currentTarget);
            var caracter, anterior, futuro, patron;
            var chc = evt.charCode;
            if ( chc > 0 ) {
                caracter = String.fromCharCode( chc );
                anterior = $c.val();
                patron = new RegExp( $c.data("restriccion") );
                futuro = anterior + caracter;
                if ( patron.test( futuro ) != true ) {
                    evt.preventDefault();
                }
            }
        });
});


 