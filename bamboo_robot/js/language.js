//author:蕭溥辰
$(document).ready(function() {
  $('#advertisement_1').on('mouseenter','.goods', function() {
    console.log("highlight");
    $(this).addClass('highlight');
  });
 $('#advertisement_1').on('mouseleave','.goods', function() {
  console.log("not highlight");
    $(this).removeClass('highlight');
  });
 $('#advertisement_1').on('click','.goods', function() {
    var first="http://127.0.0.1/lt_envico/index.php/project/product/";
    var last=$(this).find('.goodsid').text();
    first=first+last;
    //alert(first);
    var tempWeb = '<iframe id="shopView" src="'+first+'"  width="100%" frameborder="0" name="frm2" id="frm2"></iframe></div>';
    $('#hikashop').html(tempWeb);
    $('#advertisement_1').html('');
    $('#advertisement_1').css('display','none');
    setTimeout(startButton,10000);
  });
 $('#advertisement_1').on('click','.story', function() {
    console.log('講故事');
    var last=$(this).find('.goodsid').text();
    var route="./voice/story/"+last+".wav";
    var sound = new Audio(route);
    sound.play();
    //alert(first);
  });
});