// Buidling Thrustdrilling animation, beginning with JQuery
$(function(){


    $('#anime1').click(function(){

        $('.column').each(function(){
            $( this ).hide( 500 );
        });
        $('.columns').each(function(){
            $( this ).show( 500 );
            
        $('#col1 h3').text('Grouting!');
        $('#col1 p:first').text('Grouting retention text will be displayed here!');

        $('#col2 h3').text('Grouting!');
        $('#col2 p:first').text('Grouting retention text will be displayed here!');

        $('#col3 h3').text('Grouting!');
        $('#col3 p:first').text('Grouting retention text will be displayed here!');

        $('#col4 h3').text('Grouting!');
        $('#col4 p:first').text('Grouting retention text will be displayed here!');

        $('#col5 h3').text('Grouting!');
        $('#col5 p:first').text('Grouting retention text will be displayed here!');
        
        $('#col6 h3').text('Grouting!');
        $('#col6 p:first').text('Grouting retention text will be displayed here!');
        });
    }).trigger('click');

    $('#anime2').click(function(){
        $('.columns').hide( 500 );
        $('.column').hide( 500 );
    });
    $('#anime2').click(function(){
        $('.col4').show( 500 );

        $('#col4 h3').text('Ground Improvements!');
        $('#col4 p:first').text('Ground Improvements text will be displayed here!');
    });

    $('#anime3').click(function(){
        $('.column').each(function(){
            $( this ).show( 500 );
        });
        $('.columns').each(function(){
            $( this ).show( 500 );
        });
        $('#col1 h3').text('Earth Retention!');
        $('#col1 p:first').text('Earth Retention retention text will be displayed here!');

        $('#col2 h3').text('Earth Retention!');
        $('#col2 p:first').text('Earth Retention retention text will be displayed here!');

        $('#col3 h3').text('Earth Retention!');
        $('#col3 p:first').text('Earth Retention retention text will be displayed here!');

        $('#col4 h3').text('Earth Retention!');
        $('#col4 p:first').text('Earth Retention retention text will be displayed here!');

        $('#col5 h3').text('Earth Retention!');
        $('#col5 p:first').text('Earth Retention retention text will be displayed here!');
        
        $('#col6 h3').text('Earth Retention!');
        $('#col6 p:first').text('Earth Retention retention text will be displayed here!');

        $('#col7 h3').text('Earth Retention!');
        $('#col7 p:first').text('Earth Retention retention text will be displayed here!');

        $('#col8').hide( 500 );
    });

    $('#anime4').click(function(){
        $('.column').each(function(){
            $( this ).show( 500 );
        });
        $('.columns').each(function(){
            $( this ).show( 500 );
        });
        $('#col1 h3').text('Structural Support!');
        $('#col1 p:first').text('Structural Support text will be displayed here!');

        $('#col2 h3').text('Structural Support!');
        $('#col2 p:first').text('Structural Support text will be displayed here!');

        $('#col3 h3').text('Structural Support!');
        $('#col3 p:first').text('Structural Support text will be displayed here!');

        $('#col4 h3').text('Structural Support!');
        $('#col4 p:first').text('Structural Support text will be displayed here!');

        $('#col5 h3').text('Structural Support!');
        $('#col5 p:first').text('Structural Support text will be displayed here!');

        $('#col6 h3').text('Structural Support!');
        $('#col6 p:first').text('Structural Support text will be displayed here!');

        $('#col7 h3').text('Structural Support!');
        $('#col7 p:first').text('Structural Support text will be displayed here!');

        $('#col8 h3').text('Structural Support!');
        $('#col8 p:first').text('Structural Support text will be displayed here!');

    });

    $('#anime5').click(function(){
        $('.column').hide( 500 );
        $('.columns').hide( 500 );
    });
    $('#anime5').click(function(){
        $('.col4').show( 500 );

        $('#col4 h3').text('Additional Technologies!');
        $('#col4 p:first').text('Additional Technologies text will be displayed here!');
    });

});
