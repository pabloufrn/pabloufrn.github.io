var last_project = "none";
var last_item = null;
$(document).ready(function(){
	$(".circle-item").click(function(){		
		curr_project = "#" + $(this).attr("project_name");
		if(last_project == curr_project){
			$(this).css("background-color", "");
			$(last_project).hide("slow");
			last_project = "none";
			last_item = null;
			return;
		}
		if(last_project != "none"){
			last_item.css("background-color", "");
			$(last_project).hide();
		}
		last_item = $(this);
		last_project = curr_project;
		last_item.css("background-color", "blue");
		$(last_project).show("slow");
	});
});