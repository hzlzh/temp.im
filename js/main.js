jQuery(document).ready(function($) {


      var init = function() {

          $('.copyright').tooltip({
            placement: 'top'
          });
          $('img.p1,img.p2').tooltip({
            placement: 'bottom'
          });
          $('img').tooltip({
            placement: 'top'
          });

      };


init();

$('.code').hover(function(){
    $(this).find('input').select();
})

});