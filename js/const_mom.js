constant_momentum = [0.7020508860581198, 0.6956474127726946, 0.6845911544566722, 0.6708727176568812, 0.6560261981743555, 0.6401913803350177, 0.6231659708851769, 0.6047156441245223, 0.5851199485604901, 0.5647564520059072, 0.5438631628441699, 0.5225226094597863, 0.5007021711910447, 0.4786980104098516, 0.4569795912512637, 0.43638625098213635, 0.41773445889529737, 0.4012481389006247, 0.3869935714977586, 0.375073939424635, 0.3656518090373524, 0.358628376304111, 0.3535695057160708, 0.3499663755982556, 0.3475540235387416, 0.34618278131114766, 0.34559130461697246, 0.3454158286431962, 0.3453964447371366, 0.34545686620821525, 0.34557996084565934, 0.34567600455195174, 0.345622081339435, 0.34538191916810734, 0.34501493300895947, 0.3445705716481131, 0.34403133570398553, 0.34337811804930163, 0.34264978419395936, 0.34191642547721535, 0.3412101278986064, 0.3405232906973235, 0.33985266211496845, 0.3392323750177343, 0.33869414628530714, 0.3382356095429475, 0.3378407685111815, 0.3375065164832433, 0.33724353488903214, 0.33704909389231985, 0.3369025453609964, 0.3367872953581806, 0.33670131405521303, 0.33664460818287995, 0.33660551330478794, 0.33656895205250387, 0.3365296699551146, 0.3364923829352716, 0.3364525155414901, 0.3364024064300713, 0.3363390894164806, 0.3362663299789709, 0.3361880325214564];

        var m = [40, 40, 40, 40]; // margins
		var w = 250 - m[1] - m[3]; // width
		var h = 200 - m[0] - m[2]; // height

    function render2(data){
    data = constant_momentum;
		var x = d3.scale.linear().domain([0, data.length]).range([0, w]);

		var y = d3.scale.linear().domain([0, 1]).range([h, 0]);

		var line = d3.svg.line()

			.x(function(d,i) { 
				return x(i); 
			})
			.y(function(d) { 
				return y(d); 
			})

			// Add an SVG element with the desired dimensions and margin.
			var graph = d3.select("#q2").append("svg:svg")
			      .attr("width", w + m[1] + m[3])
			      .attr("height", h + m[0] + m[2])
			    .append("svg:g")
			      .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

			// create yAxis
			var xAxis = d3.svg.axis().scale(x).tickValues([]);
			// Add the x-axis.
			graph.append("svg:g")
			      .attr("class", "x axis")
			      .attr("transform", "translate(0," + h + ")")
			      .call(xAxis);


			// create left yAxis
			var yAxisLeft = d3.svg.axis().scale(y).orient("left");
			// Add the y-axis to the left
			graph.append("svg:g")
			      .attr("class", "y axis")
			      .attr("transform", "translate(0,0)")
			      .call(yAxisLeft);
			

              graph.append("svg:path").attr("d", line(data));
              
              var mouseG = graph.append("g")
              .attr("class", "mouse-over-effects");
              mouseG.append("path") // this is the black vertical line to follow mouse
              .attr("class", "mouse-line2")
              .style("stroke", "black")
              .style("stroke-width", "1px")
              .style("opacity", "0");
          
              mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
              .attr('width', w) // can't catch mouse events on a g element
              .attr('height', h)
              .attr('fill', 'none')
              .attr('pointer-events', 'all')
              .on('mouseout', function() { // on mouse out hide line, circles and text
                d3.select(".mouse-line")
                  .style("opacity", "0");
                d3.select(".mouse-line1")
                  .style("opacity", "0");
                d3.select(".mouse-line2")
                  .style("opacity", "0");
                d3.select(".mouse-line3")
                  .style("opacity", "0");
           
              })
              .on('mouseover', function() { // on mouse in show line, circles and text
                d3.select(".mouse-line")
                  .style("opacity", "1");
                d3.select(".mouse-line1")
                  .style("opacity", "1");
                d3.select(".mouse-line2")
                  .style("opacity", "1");
                d3.select(".mouse-line3")
                  .style("opacity", "1");
          
              })
              .on('mousemove', function() { // mouse moving over canvas
                var mouse = d3.mouse(this);
                // console.log(mouse[0])
                d3.select(".mouse-line3")
                  .attr("d", function() {
                    var d = "M" + mouse[0] + "," + h;
                    d += " " + mouse[0] + "," + 0;
                    return d;
                  });
                d3.select(".mouse-line1")
                  .attr("d", function() {
                    var d = "M" + mouse[0] + "," + h;
                    d += " " + mouse[0] + "," + 0;
                    return d;
                  });
                d3.select(".mouse-line2")
                  .attr("d", function() {
                    var d = "M" + mouse[0] + "," + h;
                    d += " " + mouse[0] + "," + 0;
                    return d;
                  });
                d3.select(".mouse-line")
                  .attr("d", function() {
                    var d = "M" + mouse[0] + "," + h;
                    d += " " + mouse[0] + "," + 0;
                    return d;
                  });
                  updateTable(mouse[0]);
          
              });


}