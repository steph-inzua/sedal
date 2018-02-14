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


 
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJnZW5lcmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoIGRvY3VtZW50ICkucmVhZHkoIGZ1bmN0aW9uKCl7XHJcblx0JCggXCIuZm9ybXVsYXJpb1wiIClcclxuICAgICAgICAuZmluZCggXCJpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9dGVsXVwiIClcclxuICAgICAgICAub24oIFwia2V5cHJlc3NcIiwgZnVuY3Rpb24oIGV2dCApIHtcclxuICAgICAgICAgICAgdmFyICRjID0gJChldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgIHZhciBjYXJhY3RlciwgYW50ZXJpb3IsIGZ1dHVybywgcGF0cm9uO1xyXG4gICAgICAgICAgICB2YXIgY2hjID0gZXZ0LmNoYXJDb2RlO1xyXG4gICAgICAgICAgICBpZiAoIGNoYyA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJhY3RlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoIGNoYyApO1xyXG4gICAgICAgICAgICAgICAgYW50ZXJpb3IgPSAkYy52YWwoKTtcclxuICAgICAgICAgICAgICAgIHBhdHJvbiA9IG5ldyBSZWdFeHAoICRjLmRhdGEoXCJyZXN0cmljY2lvblwiKSApO1xyXG4gICAgICAgICAgICAgICAgZnV0dXJvID0gYW50ZXJpb3IgKyBjYXJhY3RlcjtcclxuICAgICAgICAgICAgICAgIGlmICggcGF0cm9uLnRlc3QoIGZ1dHVybyApICE9IHRydWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufSk7XHJcblxyXG5cclxuICJdLCJmaWxlIjoiZ2VuZXJhbC5qcyJ9
