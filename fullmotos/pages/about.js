// Helper function to get element by selector
function $(selector) {
    return document.querySelector(selector);
  }
  
  // Helper function to get elements by selector
  function $$(selector) {
    return document.querySelectorAll(selector);
  }
  
  var cards = $$('.card');
  
  cards.forEach(function(card) {
    var shineLayer = document.createElement('div');
    shineLayer.className = 'shineLayer';
    card.insertBefore(shineLayer, card.firstChild);
  });
  
  function handleMouseMove(event) {
    var card = this;
    var mouseCoord = {
      x: event.offsetX,
      y: event.offsetY
    };
  
    mouseCoord.x = Math.max(0, Math.min(mouseCoord.x, card.offsetWidth));
    mouseCoord.y = Math.max(0, Math.min(mouseCoord.y, card.offsetHeight));
  
    var transformCard = "scale3d(1.08, 1.08, 1.08) perspective(700px) ";
    transformCard += "rotateX(" + (((mouseCoord.y / card.offsetHeight) * 18) - 9) + "deg) ";
    transformCard += "rotateY(" + ((((mouseCoord.x / card.offsetWidth) * 26) - 13) * -1) + "deg) ";
    transformCard += "translateX(" + (((mouseCoord.x / card.offsetWidth) * 6) - 3) + "px) ";
    transformCard += "translateY(" + (((mouseCoord.y / card.offsetHeight) * 10) - 5) + "px)";
  
    card.style.transform = transformCard;
  
    var transformCardImage = "rotateX(" + ((((mouseCoord.y / card.offsetHeight) * 10) - 5) * -1) + "deg) ";
    transformCardImage += "rotateY(" + ((((mouseCoord.x / card.offsetWidth) * 26) - 13) * -1) + "deg)";
    /*card.querySelector("video").style.transform = transformCardImage;*/
  
    var backgroundShineLayerOpacity = ((mouseCoord.y / card.offsetHeight) * 0.3) + 0.1;
    var backgroundShineLayerDegree = (Math.atan2(mouseCoord.y - (card.offsetHeight / 2), mouseCoord.x - (card.offsetWidth / 2)) * 180 / Math.PI) - 90;
    backgroundShineLayerDegree = backgroundShineLayerDegree < 0 ? backgroundShineLayerDegree + 360 : backgroundShineLayerDegree;
    var backgroundShineLayer = "linear-gradient(" + backgroundShineLayerDegree + "deg, rgba(255,255,255," + backgroundShineLayerOpacity + ") 0%, rgba(255,255,255,0) 80%)";
    card.querySelector(".shineLayer").style.background = backgroundShineLayer;
  }
  
  function handleMouseEnter() {
    var card = this;
    $$('.card').forEach(function(c) {
      c.classList.add("blur");
    });
    card.classList.remove("blur");
  }
  
  function handleMouseLeave() {
    var card = this;
    card.style.transform = "scale3d(1, 1, 1)";
    /*card.querySelector("video").style.transform = "";*/
    card.querySelector(".shineLayer").style.background = "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 80%)";
  
    $$('.card').forEach(function(c) {
      c.classList.remove("blur");
    });
  }
  
  cards.forEach(function(card) {
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  });
  