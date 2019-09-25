var colors = ['#E74C3C', '#8E44AD', '#3498DB', '#1ABC9C', '#27AE60', '#F39C12', '#34495E', '#626567'];
var backgrounds = ['#FDEDEC', '#F4ECF7', '#EBF5FB', '#E8F8F5', '#E9F7EF', '#FEF5E7', '#EBEDEF', '#F8F9F9'];

document.addEventListener('DOMContentLoaded', function(){

  var colorIndex = Math.floor( Math.random()*colors.length );
  var color = colors[colorIndex];
  var bg = backgrounds[colorIndex];

  document.body.style.background = bg;

  var links = document.querySelectorAll('a');
  links.forEach(function(elem){
    elem.style.color = color;
  });

  var town = document.getElementById('town');
  var houses = document.querySelectorAll('.house');

  for(var i = town.children.length; i >= 0; i--) {
    town.appendChild(town.children[Math.random() * i | 0]);
  }

  // rearrange order of houses on load
  var elem = document.querySelector('#town');
  var pckry = new Packery( elem, {
    // options
    itemSelector: '.house',
    gutter: 10
  });

});
