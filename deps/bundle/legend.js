function appendLegend(container){
	var legend = container.append("g")
		.attr("transform", "translate(10,10)")
		.attr("width", w)
		.attr("height", h)
		.attr("id", "legend");
		
	legend.append("rect")
		.attr("width", w)
		.attr("height", h);
		
	legend.append("line")
		.attr("x1", 20).attr("x2", w-20)
		.attr("y1", 20).attr("y2", 20)
		.attr("class", "link source")

	legend.append("text")
		.attr("x", 20).attr("dx", "-.30em")
		.attr("y", 20).attr("dy", ".30em")
		.attr("text-anchor", "end")
		.attr("class", "var")
		.text("a");

	legend.append("text")
		.attr("x", w-20).attr("dx", ".30em")
		.attr("y", 20).attr("dy", ".30em")
		.attr("text-anchor", "start")
		.attr("class", "var")
		.text("b");
		
	ab = legend.append("text")
		.attr("x", w/2)
		.attr("y", 20).attr("dy", "-.35em")
		.attr("text-anchor", "middle");
		
	ab.append("tspan").text("a").attr("class", "var");
	ab.append("tspan").text(" depends on ");
	ab.append("tspan").text("b").attr("class", "var");


	legend.append("line")
		.attr("x1", 20).attr("x2", w-20)
		.attr("y1", 45).attr("y2", 45)
		.attr("class", "link target");

	legend.append("text")
		.attr("x", 20).attr("dx", "-.30em")
		.attr("y", 45).attr("dy", ".30em")
		.attr("text-anchor", "end")
		.attr("class", "var")
		.text("c");

	legend.append("text")
		.attr("x", w-20).attr("dx", ".30em")
		.attr("y", 45).attr("dy", ".30em")
		.attr("text-anchor", "start")
		.attr("class", "var")
		.text("d");
		
	var cd = legend.append("text")
		.attr("x", w/2)
		.attr("y", 45).attr("dy", "-.35em")
		.attr("text-anchor", "middle");
		
	cd.append("tspan").text("c").attr("class", "var");
	cd.append("tspan").text(" is depended on by ");
	cd.append("tspan").text("d").attr("class", "var");
	
	return legend;
}