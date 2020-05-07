		constant_Nesterov_momentum = [0.7020508860581198, 0.6901891826308713, 0.6756983813808151, 0.6600421674882603, 0.6435027474118009, 0.6257314677256853, 0.6067135442314988, 0.5867128407608277, 0.5659136781839769, 0.5443953998306937, 0.5221063863244829, 0.499411138001215, 0.4768924831788748, 0.45513069184914134, 0.4347206619650487, 0.41619926616711, 0.3999701455970274, 0.3862080721858592, 0.3749050932098266, 0.36589751368492157, 0.3589638611420652, 0.35380095352836, 0.3500934779161435, 0.34753605403134585, 0.34584704062975985, 0.3447921991323716, 0.3441646641065438, 0.34380082313764027, 0.34358052930522687, 0.3434133731318633, 0.34324058926936907, 0.3430265519827332, 0.34275100995036495, 0.34240899769751015, 0.3420039213421669, 0.34154740928433047, 0.3410539872454848, 0.340541324246933, 0.340023179574225, 0.33951499119777007, 0.33902781136141974, 0.3385723364558359, 0.3381562939574252, 0.3377842474183857, 0.33746269548364954, 0.33718849796803113, 0.3369618045915079, 0.33677621121538975, 0.3366266460706557, 0.3365076539203393, 0.33641389576093306, 0.33634141938794343, 0.33628366781978664, 0.33623536437693036, 0.3361927087511248, 0.33615290129431186, 0.33611230191055164, 0.33606908487398024, 0.33602216416021735, 0.3359724873542082, 0.3359191988721276];
    

    var m = [40, 40, 40, 40]; // margins
		var w = 250 - m[1] - m[3]; // width
		var h = 200 - m[0] - m[2]; // height
		// var data = constant_Nesterov_momentum
    // render3(data);
    function render3(data){

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
			var graph = d3.select("#q3").append("svg:svg")
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
              .attr("class", "mouse-line1")
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
          
              });

            }