d3.json("json/all.team.stats.json", function (data) {

  	var poolData = [];
  	console.log(data)

  	var nbrGameday = 0;

  	data.forEach(function(d, i) {

  		var item = [d.teamName];
  		d.pointsPerDay.forEach(function(j) {
  			item.push(j);
  		});

  		if (nbrGameday == 0) {
			nbrGameday = item.length;
			console.log(nbrGameday);
		}

  		poolData.push(item);

  	});



    var chart = c3.generate({
    	    data: {
		        columns:poolData,
		        type: 'spline'
    		},
    		axis: {
    			y: {
    				label: {
    					text: 'Points',
    					position: 'outer-middle'
    				}
    			}
    		},
    		//subchart: {
    		//	show: true
    		//}
    	    zoom: {
		        enabled: true,
		  		rescale: true

    		},

    });

    setTimeout(function () {
		/*
		if (nbrGameday > 5) {
			var lowerBound = nbrGameday-7;
			var topBound = nbrGameday-2;
			console.log('chart.zoom('+lowerBound+', '+topBound+');');
			chart.zoom(5, 10);
		}*/
	}, 1000);

/*
    setTimeout(function () {
	    chart.transform('donut');
	}, 1000);

	setTimeout(function () {
	    chart.transform('line');
	}, 2000);

	setTimeout(function () {
	    chart.transform('pie');
	}, 3000);

	setTimeout(function () {
	    chart.transform('donut');
	}, 4000);
*/

  });

