var project_active = false;
function on_active(eventName, itemIndex) {
	if(!project_active) {
		project_active = true;
		$('.project-header').show();
	}
  	$('.project-active').toggleClass('project-active');
  	var $project = $('#project' + itemIndex);
  	$project.toggleClass('project-active');
  	link = $('.project-title a');
  	link.text($project.attr('project_name'));
  	link.attr('href', 'https://github.com/pabloufrn/' + $project.attr('project_name'));
  	var $container = $('.project-container');
  	$container.scrollTop(0);
  	var offset = $container.height() - $project.height() + $(".project-active > #pro-down").position().top - $(".project-header").height();
  	if(offset > 0)
  	{
  		$project.height($project.height() + offset);
  	}
    $("html, body").animate({scrollTop: $container.position().top - $(".site-header").height()}, 500);
};
function on_project_scroll(e) {
    var dir = '';
    var d = e.originalEvent.deltaY,
        dir = d < 0 ? 'up' : 'down',
    stop = (dir == 'up' && this.scrollTop == 0);
    stop && $("html, body").animate({scrollTop: $(".frame").offset().top - $(".site-header").height()}, 500);
}
var ts;
function on_project_scroll_mobile_start(e) {
    ts = e.originalEvent.touches[0].clientY;
}
$(document).ready(function (){
    var $container =  $('.project-container');
	$container.scroll(function (event) {
		if(!project_active) {
			return;
		} 
	    var offset = $container.offset().top + $(".project-header").height() + 40;
	    if(offset  < $(".project-active > #pro-req").offset().top) {
	    	$('.project-header .page-link.active').toggleClass('active');
	    	$('.project-header .page-link#bt-pro-desc').toggleClass('active');
	    }
	    else {
	    	if(offset < $(".project-active > #pro-down").offset().top )
	    	{
	    		$('.project-header .page-link.active').toggleClass('active');
	    		$('.project-header .page-link#bt-pro-req').toggleClass('active');
	    	} else {
	    		$('.project-header .page-link.active').toggleClass('active');
	    		$('.project-header .page-link#bt-pro-down').toggleClass('active');
	    	}
	    }
	});
	$("#bt-pro-desc").click(function (){
        $container.animate({
            scrollTop: 0
        }, 1000);
        $("html, body").animate({scrollTop: $container.position().top - $(".site-header").height()}, 1000);
    });
    $("#bt-pro-req").click(function (){
        $container.animate({
            scrollTop: $(".project-active > #pro-req").offset().top - $container.offset().top + $container.scrollTop() - $('.project-header').height() 
        }, 1000);
        $("html, body").animate({scrollTop: $container.position().top - $(".site-header").height()}, 1000);
    });
    $("#bt-pro-down").click(function (){
        $container.animate({
            scrollTop: $(".project-active > #pro-down").offset().top - $container.offset().top + $container.scrollTop() - $('.project-header').height() 
        }, 1000);
        $("html, body").animate({scrollTop: $container.position().top - $(".site-header").height()}, 1000);
    });
    $container.on('wheel', on_project_scroll);
    var $el = $('.page');
    $(window).on('scroll', function () {
        var scroll = $(document).scrollTop();
        $el.css({
            'background-position':'50% '+(-.4*scroll)+'px'
        });
    });
});
// https://raw.githubusercontent.com/pabloufrn/{{project.name}}/master/down.md

//https://raw.githubusercontent.com/pabloufrn/{{project.name}}/download/linux/amd64/{{project.name}}.rar
