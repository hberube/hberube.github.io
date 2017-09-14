<script>

        var leaderD3;
        var xScale;
        var yScale;
        var svg;
        var w = 150;
        var h = 175;
        var padding = 20;
        var ticksNbr = 5;
        var topPoolersToShow = 10;
        var leadersDataset = [];

        //Define key function, to be used when binding data
        var key = function(d) {
            return d.key;
        };

        d3.json("json/leaders.json", function (data){

            leaderD3 = data.leaders.slice(0,topPoolersToShow);



            for (i = 0; i < leaderD3.length; i++) {

                console.log(leaderD3.teamName);
                // var myKey = {};
                //  myKey['key'] = leaderD3.teamName;

                var myObj = {};
                myObj['value'] = leaderD3[i];
                myObj['key'] = leaderD3[i].teamName;



                leadersDataset[i] = myObj;

            }


            xScale = d3.scale.linear()
                .domain([0, data.topTotalScore])
                .range([0, w]);

            yScale = d3.scale.ordinal()
                .domain(d3.range(topPoolersToShow))
                .rangeRoundBands([padding,h-padding], 0.1);



            svg = d3.select(".chart")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

            var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient("bottom")
                .ticks(ticksNbr);

            //svg.selectAll("rect").remove();

            svg.selectAll("line")
                .data(xScale.ticks(20))
                .enter().append("svg:line")
                .attr("x1", xScale)
                .attr("x2", xScale)
                .attr("y1", padding)
                .attr("y2", h-padding)
                .attr("stroke", "#ccc");

            //Create bars
            svg.selectAll("rect")
                //.data(leaderD3)
                .data(leadersDataset, key)
                .enter()
                .append("rect")
                .attr("x", function(d, i) {
                    0;
                })
                .attr("y", function(d,i) {
                    console.log('yScale('+i+')='+yScale(i));
                    return yScale(i);
                })
                .attr("width", function(d) { return xScale(d.value.points) + "px"; })
                .style("height", yScale.rangeBand())
                .attr("fill", function(d) {
                    return "#337ab7";
                })
                .on("mouseover", function(d) {

                    //Get this bar's x/y values, then augment for the tooltip
                    var xPosition = 150;//w-(parseFloat(d3.select(this).attr("x")) + xScale(d.points));
                    var yPosition = parseFloat(d3.select(this).attr("y")) / 2 + h / 2;

                    //Update the tooltip position and value
                    d3.select("#tooltip")
                        .style("left", xPosition + "px")
                        .style("top", yPosition + "px")
                        .select("#team")
                        .text(d.value.teamName);

                    d3.select("#goals")
                        .text(+d.value.goals);
                    d3.select("#passes")
                        .text(d.value.passes);
                    d3.select("#wins")
                        .text(d.value.wins);
                    d3.select("#shutouts")
                        .text(d.value.shutOuts);
                    d3.select("#points")
                        .text(d.value.points);

                    //Show the tooltip
                    d3.select("#tooltip").classed("hidden", false);
                    d3.select(this)
                        .attr("fill", "orange");

                })
                .on("mouseout", function() {

                    //Hide the tooltip
                    d3.select("#tooltip").classed("hidden", true);
                    d3.select(this)
                        .transition()
                        .duration(250)
                        .attr("fill", "#337ab7");

                });


            //Create labels

            svg.selectAll("text")
                .data(leadersDataset, key)
                .enter()
                .append("text")
                .text(function(d) {
                    return d.value.teamName + "       " + d.value.points + " pts";
                })
                .attr("text-anchor", "middle")
                .attr("x", function(d, i) {
                    return 100;
                })
                .attr("y", function(d,i) {
                    return yScale(i)+10;
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", "11px")
                .attr("fill", "lightgrey");


            svg.append("svg:line")
                .attr("y1", padding)
                .attr("y2", h-padding)
                .attr("stroke", "#000");

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0,"+(h-20)+")")
                .call(xAxis)
                //.selectAll("text")
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", "-.55em")
            ;


        });

        function refreshGraph() {

            //console.log("refreshing...");

            d3.json("json/leaders.json", function (data) {

                    //console.log("reading json...")

                    leaderD3 = data.leaders.slice(0,topPoolersToShow);
                    console.log(leaderD3);

                    for (i = 0; i < leaderD3.length; i++) {

                        console.log(leaderD3.teamName);
                        // var myKey = {};
                        //  myKey['key'] = leaderD3.teamName;

                        var myObj = {};
                        myObj['value'] = leaderD3[i];
                        myObj['key'] = leaderD3[i].teamName;



                        leadersDataset[i] = myObj;

                    }

                    xScale = d3.scale.linear()
                        .domain([0, data.topTotalScore])
                        .range([0, w]);

                    yScale = d3.scale.ordinal()
                        .domain(d3.range(topPoolersToShow))
                        .rangeRoundBands([padding,h-padding], 0.1);

                    var xAxis = d3.svg.axis()
                        .scale(xScale)
                        .orient("bottom")
                        .ticks(ticksNbr);

                    svg.selectAll("rect").remove();
                    svg.selectAll(".x.axis").remove();
                    svg.selectAll("text").remove();
                    svg.selectAll("line").remove();

                    var bars = svg.selectAll("rect")			//Select all bars
                        .data(leadersDataset, key);

                    svg.selectAll("line")
                        .data(xScale.ticks(20))
                        .enter().append("svg:line")
                        .attr("x1", xScale)
                        .attr("x2", xScale)
                        .attr("y1", padding)
                        .attr("y2", h-padding)
                        .attr("stroke", "#ccc");

                    //Enter…
                    bars.enter()								//References the enter selection (a subset of the update selection)
                        .append("rect")							//Creates a new rect
                        .attr("x", function(d, i) {
                            0;
                        })
                        .attr("y", function(d,i) {
                            console.log('yScale('+i+')='+yScale(i));
                            return yScale(i);
                        })
                        .attr("width", function(d) { return xScale(d.value.points) + "px"; })
                        .style("height", yScale.rangeBand())
                        .attr("fill", function(d) {
                            return "#337ab7";
                        });

                    //Update…
                    bars.transition()							//Initiate a transition on all elements in the update selection (all rects)
                        .duration(500)
                        .attr("x", function(d, i) {
                            0;
                        })
                        .attr("y", function(d,i) {
                            console.log('yScale('+i+')='+yScale(i));
                            return yScale(i);
                        })
                        .attr("width", function(d) { return xScale(d.value.points) + "px"; })
                        .style("height", yScale.rangeBand())
                        .attr("fill", function(d) {
                            return "#337ab7";
                        });

                    //Create labels

                    var teamLabels = svg.selectAll("text").data(leadersDataset, key);

                    //Enter…
                    teamLabels.enter()
                        .append("text")
                        .text(function(d) {
                            return d.value.teamName + "       " + d.value.points + " pts";
                        })
                        .attr("text-anchor", "middle")
                        .attr("x", function(d, i) {
                            return 100;
                        })
                        .attr("y", function(d,i) {
                            return yScale(i)+10;
                        })
                        .attr("font-family", "sans-serif")
                        .attr("font-size", "11px")
                        .attr("fill", "lightgrey");

                    //Update…
                    teamLabels.transition()
                        .duration(500)
                        .attr("x", function(d, i) {
                            return 100;
                        });

                    //Exit…
                    teamLabels.exit()
                        .transition()
                        .duration(500)
                        .attr("x", -100)
                        .remove();



                    svg.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0,"+(h-20)+")")
                        .call(xAxis)
                        //.selectAll("text")
                        .style("text-anchor", "end")
                        .attr("dx", "-.8em")
                        .attr("dy", "-.55em")
                    ;

                }
            );

        }


       /* var leaderD3;
        var xScale;
        var yScale;
        var svg;
        var w = 900;
        var h = 175;
        var padding = 20;
        var ticksNbr = 5;
        var topPoolersToShow = 10;
        var leadersDataset = [];

        d3.json("json/leaders.json", function (data){

            leaderD3 = data.leaders.slice(0,9);

            xScale = d3.scale.linear()
                .domain([1000, data.topTotalScore])
                .range([0, w]);

            yScale = d3.scale.ordinal()
                .domain(d3.range(10))
                .rangeRoundBands([0,h], 0.1);

            svg = d3.select(".chart")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

            //Create bars
            svg.selectAll("rect")
                .data(leaderD3)
                .enter()
                .append("rect")
                .attr("x", function(d, i) {
                    0;
                })
                .attr("y", function(d,i) {
                    console.log('yScale('+i+')='+yScale(i));
                    return yScale(i);
                })
                .attr("width", function(d) { return xScale(d.points) + "px"; })
                .style("height", yScale.rangeBand())
                .attr("fill", function(d) {
                    return "#337ab7";
                })
                .on("mouseover", function() {
                    d3.select(this)
                        .attr("fill", "orange");
                })
                .on("mouseout", function(d) {
                    d3.select(this)
                        .transition()
                        .duration(250)
                        .attr("fill", "#337ab7");
                });

            //Create labels

            svg.selectAll("text")
                .data(leaderD3)
                .enter()
                .append("text")
                .text(function(d) {
                    return d.teamName + "       " + d.points + " pts";
                })
                .attr("text-anchor", "middle")
                .attr("x", function(d, i) {
                    return xScale(d.points)-75;//0+w/6;
                })
                .attr("y", function(d,i) {
                    return yScale(i)+10;
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", "11px")
                .attr("fill", "white");


/!*            d3.select(".chart")
                .selectAll("div")
                .data(leaderD3)
                .attr("y", function(d) {
                    return yScale(d.points);
                })
                .enter().append("div")
                .style("width", function(d) { console.log(d.points); return xScale(d.points) + "px"; })
                .style("height", function (d){return yScale(d.points);})
                .text(function(d) { return d.teamName + "  " + d.points + " pts"; })
                .append("title")
                .text(function(d) {
                    return d.teamName + "  " + d.points + " pts";
                });*!/

        });

        function refreshGraph() {

            //console.log("refreshing...");

            d3.json("json/leaders.json", function (data) {

                    //console.log("reading json...")

                    leaderD3 = data.teams.slice(0,topPoolersToShow);
                    console.log(leaderD3);

                    for (i = 0; i < leaderD3.length; i++) {

                        console.log(leaderD3.teamName);
                        // var myKey = {};
                        //  myKey['key'] = leaderD3.teamName;

                        var myObj = {};
                        myObj['value'] = leaderD3[i];
                        myObj['key'] = leaderD3[i].teamName;



                        leadersDataset[i] = myObj;

                    }

                    xScale = d3.scale.linear()
                        .domain([0, data.topTotalScore])
                        .range([0, w]);

                    yScale = d3.scale.ordinal()
                        .domain(d3.range(topPoolersToShow))
                        .rangeRoundBands([padding,h-padding], 0.1);

                    var xAxis = d3.svg.axis()
                        .scale(xScale)
                        .orient("bottom")
                        .ticks(ticksNbr);

                    svg.selectAll("rect").remove();
                    svg.selectAll(".x.axis").remove();
                    svg.selectAll("text").remove();
                    svg.selectAll("line").remove();

                    var bars = svg.selectAll("rect")			//Select all bars
                        .data(leadersDataset, key);

                    svg.selectAll("line")
                        .data(xScale.ticks(20))
                        .enter().append("svg:line")
                        .attr("x1", xScale)
                        .attr("x2", xScale)
                        .attr("y1", padding)
                        .attr("y2", h-padding)
                        .attr("stroke", "#ccc");

                    //Enter…
                    bars.enter()								//References the enter selection (a subset of the update selection)
                        .append("rect")							//Creates a new rect
                        .attr("x", function(d, i) {
                            0;
                        })
                        .attr("y", function(d,i) {
                            console.log('yScale('+i+')='+yScale(i));
                            return yScale(i);
                        })
                        .attr("width", function(d) { return xScale(d.value.points) + "px"; })
                        .style("height", yScale.rangeBand())
                        .attr("fill", function(d) {
                            return "#337ab7";
                        });

                    //Update…
                    bars.transition()							//Initiate a transition on all elements in the update selection (all rects)
                        .duration(500)
                        .attr("x", function(d, i) {
                            0;
                        })
                        .attr("y", function(d,i) {
                            console.log('yScale('+i+')='+yScale(i));
                            return yScale(i);
                        })
                        .attr("width", function(d) { return xScale(d.value.points) + "px"; })
                        .style("height", yScale.rangeBand())
                        .attr("fill", function(d) {
                            return "#337ab7";
                        });

                    //Create labels

                    var teamLabels = svg.selectAll("text").data(leadersDataset, key);

                    //Enter…
                    teamLabels.enter()
                        .append("text")
                        .text(function(d) {
                            return d.value.name + "       " + d.value.points + " pts!!!";
                        })
                        .attr("text-anchor", "middle")
                        .attr("x", function(d, i) {
                            return 100;
                        })
                        .attr("y", function(d,i) {
                            return yScale(i)+10;
                        })
                        .attr("font-family", "sans-serif")
                        .attr("font-size", "11px")
                        .attr("fill", "lightgrey");

                    //Update…
                    teamLabels.transition()
                        .duration(500)
                        .attr("x", function(d, i) {
                            return 100;
                        });

                    //Exit…
                    teamLabels.exit()
                        .transition()
                        .duration(500)
                        .attr("x", -100)
                        .remove();



                    svg.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0,"+(h-20)+")")
                        .call(xAxis)
                        //.selectAll("text")
                        .style("text-anchor", "end")
                        .attr("dx", "-.8em")
                        .attr("dy", "-.55em")
                    ;

                }
            );

        }*/



    </script>