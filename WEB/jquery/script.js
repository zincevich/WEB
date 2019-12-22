$(document).ready(function() {
    $(".FIA").css("color", "#FF0000");
	$(".FIA").css("fontSize", "30px");
    $(".instagram").css("fontSize", "20px");
	$(".instagram").css("color", "#F08080");
    $(".twitter").css("color", "#4169E1");
	$(".twitter").css("fontSize", "15px");
    $("input").attr("disabled", true);


	$("a").attr("target","_blank");
	_check=true
	$("#erase").click(function(){
		if (_check){
			_check=false;
			$("a").text((i,a) => a.slice(1));
			$("a").removeAttr("target");
		}
	});


    $("[href]").prepend("↗");
    $("[href]").each(function() {
        $(this).attr("href", $(this).attr("href").replace("http://", "https://"));
    });
    

    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    let cellText = document.createElement("div");
    cell.appendChild(cellText);
    cellText.innerHTML = "Text";
    let cell2 = document.createElement("td");
    let cellText2 = document.createElement("div");
    cell2.appendChild(cellText2);
    cellText2.innerHTML = "Animation";
    row.appendChild(cell);
    row.appendChild(cell2);
    tableBody.appendChild(row);
    for (var i = 0; i < 5; i++) {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        let cellText = document.createElement("div");
        cellText.setAttribute("class", i);
        cellText.innerHTML = "Here we go";
        cell.appendChild(cellText);
        row.appendChild(cell);
        let cell2 = document.createElement("td");
        let cellText2 = document.createElement("button");
        cellText2.setAttribute("class", i);
        cell2.appendChild(cellText2);
        row.appendChild(cell2);
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    document.getElementsByTagName('body')[0].appendChild(table);
    table.setAttribute('border', '2');
    $("button.0").html("hide");
    $("button.0").click(function() {
        $("div.0").hide();
    });
    $("div.1").hide();
    $("button.1").html("show");
    $("button.1").click(function() {
        $("div.1").show();
    });
	$("div.2").hide();
    $("button.2").html("fadeIn");
    $("button.2").click(function() {
        $("div.2").fadeIn();
    });
    $("div.3").hide();
    $("button.3").html("fadeToggle");
    $("button.3").click(function() {
        $("div.3").fadeToggle();
    });
	$("div.4").hide();
    $("button.4").html("slideDown");
    $("button.4").click(function() {
        $("div.4").slideDown();
    });

    


});