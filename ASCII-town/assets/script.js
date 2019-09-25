var colors = ['#E74C3C', '#2ECC71', '#F4D03F', '#16A085', '#F39C12', '#8E44AD'];

document.addEventListener('DOMContentLoaded', function(){
  // var objDate = new Date();
  // var hours = objDate.getHours();
  // console.log(hours);
  // if(hours > 7 && hours < 18){
  //       $('body').addClass('day');
  // }
  // else{
  //       $('body').addClass('night');
  // }
  // if(hours == 6 || hours == 18){
  //       $('body').addClass('dusk');
  // }

  // rearrange order of houses on load
  var elem = document.querySelector('.grid');
  var pckry = new Packery( elem, {
    // options
    itemSelector: '.house',
    gutter: 20
  });


  // for(var i = 0; i < houses.length; i++){
  //     var target = Math.floor(Math.random() * houses.length -1) + 1;
  //     var target2 = Math.floor(Math.random() * houses.length -1) +1;
  //     houses.eq(target).before(houses.eq(target2));
  // }
  //
  // // fit houses together
  // $('#town').packery({
  //   itemSelector: '.house',
  //   gutter: 20
  // });
});
