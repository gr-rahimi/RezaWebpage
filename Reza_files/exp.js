   $(document).ready(function(){
       var o = $('#menu').offset();
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var h = $('#menu').outerHeight()+8;
        var target = this.hash;
        $target = $(target);

	var ypos=$target.offset().top-h;
        $('html, body').stop().animate({'scrollTop': ypos}, 900, 'swing');
    });
//       $(window).scroll(function () {
//	   if ($(window).scrollTop() > o.top) {
	       var w = $('#menu').width();
               $('#menu').addClass('fixed');
	       $('#menu').css('z-index',10);
	       $('#menu').width(w);
	       $('#menu').offset({left: $('#menu').left});//o.left});
//	   } else {
//               $('#menu').removeClass('fixed');
//	   }
//       });
//     $("divtitle").prepend("<img class=icon-expand src=images/icon-expand.gif border=0 style='float:left; padding-right: 10px; padding-left: 6px'>");
//     $("divtitle").prepend("<img class=icon-collapse src=images/icon-collapse.gif border=0 style='float:left; padding-right: 10px; padding-left: 6px; display:none'>");
     $( "divtitle" ).wrap( "<span class=expander></span>");
     $( "divtitle" ).wrap( "<a href='' title='expand/collapse'></a>");
//     $( ".expandable" ).wrap( "<div class='fader'></div>" );
//     $( ".expandable" ).after( "<div class='fadeout'></div>" );
//     $( ".expandable" ).append( "<div class='sectionfooter'><span class=expander><a href='' class=icon-expand title='expand/collapse'><img src=images/icon-expand.gif border=0 style='float:left ; padding-right: 10px; padding-left: 6px'>See all...</a></span><span class=expander><a href='' class=icon-collapse title='expand/collapse' style='display:none'><img  src=images/icon-collapse.gif border=0 style='float:left; padding-right: 10px; padding-left: 6px'>Hide</a></div></span>" );
     $( ".expandable" ).append( "<div class='sectionfooter'><span class=expander><a href='' class=icon-expand title='expand/collapse'>See all...</a></span><span class=expander><a href='' class=icon-collapse title='expand/collapse' style='display:none'>Hide</a></div></span>" );
//     $( ".expandable" ).append( "<div class='sectionfooter'><span class=expander><a href='' class=icon-expand title='expand/collapse'>...see all</a></span><span class=expander><a href='' class=icon-collapse title='expand/collapse' style='display:none'>Hide</a></div></span>" );
     $( ".expandable" ).attr("expanded","0");

     $(".expander a").click(function(event){
       event.preventDefault();
       var isExpanded = $(this).parents("div").eq(0).attr("expanded");
       if (isExpanded == "0") {
         $('html, body').animate({scrollTop:$(this).parents("div").eq(0).offset().top}, 'slow');
         $(this).parents("div").eq(0).attr("expanded","1");
       }
       else {
         $(this).parents("div").eq(0).attr("expanded","0");
       }
       $(this).parents("div").eq(1).find(".hidable").toggle('slow');
       $(this).parents("div").eq(1).find(".icon-expand").toggle();
       $(this).parents("div").eq(1).find(".icon-collapse").toggle();
     });
   });
