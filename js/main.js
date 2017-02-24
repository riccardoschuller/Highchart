var data =  $.getJSON('https://jsonplaceholder.typicode.com/posts', function(posts) {
	console.log('posts', posts);
	var groups = _.groupBy(posts, function(p){ return p.userId})
	console.log('groups', groups)

	var series = [];



	_.each(groups, function( array, id) {
		var toAdd = {
			name : 'User #'+id,
			data: _.map(array, function(p){return p.body.length;})
		}
		console.log('Add', toAdd)
		series.push(toAdd)
	})
	console.log(series)

	Highcharts.chart('container', {

    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 2010
        }
    },

    series: series

});
/*
	
	var id = {}
		_.each(data.userId, generaNumeri)
	
		function generaNumeri(numero){id[numero] = _.filter(data, function(post){ return post.userId == numero });
	console.log(id[numero])

	var lunghezze[numero] = _.map(id[numero], function(p){
		console.log(p)
		return p.body.length;

	})
	console.log(lunghezze[numero])}
	
*/
	/*var id2 = _.filter(data, function(post){ return post.userId == 2 });
	console.log(id1)

	var lunghezze2 = _.map(id2, function(p){
		console.log(p)
		return p.body.length;

	})
	console.log(lunghezze2)

	var id3 = _.filter(data, function(post){ return post.userId == 3 });
	console.log(id3)

	var lunghezze3 = _.map(id3, function(p){
		console.log(p)
		return p.body.length;

	})
	console.log(lunghezze4)

	var id4 = _.filter(data, function(post){ return post.userId == 4 });
	console.log(id4)

	var lunghezze4 = _.map(id4, function(p){
		console.log(p)
		return p.body.length;

	})
	console.log(lunghezze4)*/


})


