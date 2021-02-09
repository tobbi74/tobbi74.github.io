// create play/pause button on video
console.log("video play");
$('.video2').parent().click(function () {
  if($(this).children(".video2").get(0).paused){
    $(this).children(".video2").get(0).play();
    $(this).children(".playpause").fadeOut();
  }
  else{
    $(this).children(".video2").get(0).pause();
    $(this).children(".playpause").fadeIn();
  }
});

// change to crew's information when hover on crew's image
console.log("crew info");
$(function(){
  $("#ryan").on({
   mouseenter: function(){
    $(this).attr('src','content/ryan-info.png');
  },
  mouseleave: function(){
    $(this).attr('src','content/ryan.png');
  }
  });
});
$(function(){
  $("#shamma").on({
   mouseenter: function(){
    $(this).attr('src','content/shamma-info.png');
  },
  mouseleave: function(){
    $(this).attr('src','content/shamma.png');
  }
  });
});
$(function(){
  $("#tobbi").on({
   mouseenter: function(){
    $(this).attr('src','content/tobbi-info.png');
  },
  mouseleave: function(){
    $(this).attr('src','content/tobbi.png');
  }
  });
});
$(function(){
  $("#tona").on({
   mouseenter: function(){
    $(this).attr('src','content/tona-info.png');
  },
  mouseleave: function(){
    $(this).attr('src','content/tona.png');
  }
  });
});
