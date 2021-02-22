
  $(function() {

	var word_list = [
		{text: "Swift", weight: 60},
		{text: "iOS", weight: 100},
		{text: "Wordpress", weight: 60},
		{text: "Watch Collector", weight: 70},
		{text: "Javascript", weight: 70},
		{text: "Machine Learning", weight: 50},
		{text: "AI", weight: 50},
		{text: "CrossFit", weight: 60},
		{text: "Project Management", weight: 30},
		{text: "Tinkering", weight: 60},
		{text: "Raspberry Pi", weight: 60},
		{text: "Hiking", weight: 60},
		{text: "Drupal", weight: 20},
		{text: "Android", weight: 20},
		{text: "Node", weight: 60},
		{text: "servers", weight: 20},
		{text: "Linux", weight: 20},
		{text: "watchOS", weight: 50},
		{text: "objC", weight: 50},
		{text: "MustacheJS", weight: 30},
		{text: "Ruby", weight: 30},
		{text: "MySQL", weight: 30},
		{text: "Photoshop", weight: 40},
		{text: "Ilustrator", weight: 40},
		{text: "biking", weight: 60},
		{text: "running", weight: 80},
		{text: "21km", weight: 50},
		{text: "Poland", weight: 40},
		{text: "BVB", weight: 30},
		{text: "Barcelona", weight: 40},
		{text: "Project Management", weight: 30},
		{text: "photography", weight: 20},
		{text: "watches", weight: 40},
		{text: "Web Dev", weight: 40},
		{text: "Frontend Dev", weight: 50},
		{text: "backend development", weight: 40},
		{text: "mobile", weight: 40}
	  ];

	$("#my_cloud").jQCloud(word_list, {shape: "rectangular"});

	$('#print').click(function(){
		window.print();	
  	});
  });