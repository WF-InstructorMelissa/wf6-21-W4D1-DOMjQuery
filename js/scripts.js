$(document).ready(function() {
    $('#hide').click(function() {
        $('nav').hide();
    })
    $('#show').click(function() {
        $('nav').show();
    })
    $('#toggle').click(function() {
        $('h1').animate( {
            width: 'toggle'
        })
    })
    $('#fadeOut').click(function(){
        $('#flying').fadeOut();
    })
    $('#fadeIn').click(function(){
        $('#flying').fadeIn();
    })
    // $('#css').click(function(){
    //     $('#marvin').css('border', '5px groove red')
    // })
    $('#css').click(function(){
        $('#marvin').css({'border': '5px groove red', 'border-radius': '20%'})
    })
    $('#alert').hover(function(){
        alert('You hovered over my favorite Toon!')
    })
    $('#append').append(' Folks!')
})
// create a function that will hide the navigation
// click event to activate the function
// target the nav with in the function