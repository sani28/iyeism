
/* Parallax for equiposes */
$(function(){
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
      clipRelativeInput: true
    });
    var scene = document.getElementById('equipose');
    var parallaxInstance = new Parallax(scene, {
      clipRelativeInput: true
    });
    var scene = document.getElementById('equipose-2');
    var parallaxInstance = new Parallax(scene, {
      clipRelativeInput: true,
      originX: 0.8
    });
    var scene = document.getElementById('equipose-3');
    var parallaxInstance = new Parallax(scene, {
      clipRelativeInput: true,
      originX:1
    });
 });
 
