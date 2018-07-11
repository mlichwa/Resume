
  $(function() {

	var word_list = [
		{text: "Swift", weight: 60},
		{text: "iOS", weight: 100},
		{text: "Wordpress", weight: 60},
		{text: "Javascript", weight: 70},
		{text: "Project Management", weight: 30},
		{text: "HTML5", weight: 60},
		{text: "CSS3", weight: 60},
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
		{text: "BVB", weight: 20},
		{text: "Barcelona", weight: 40},
		{text: "Project Management", weight: 30},
		{text: "Git", weight: 50},
		{text: "Beer", weight: 20},
		{text: "Java", weight: 50},
		{text: "dog", weight: 20},
		{text: "languages", weight: 20},
		{text: "coffee", weight: 30},
		{text: "photography", weight: 20},
		{text: "watches", weight: 40},
		{text: "web development", weight: 40},
		{text: "frontend development", weight: 50},
		{text: "backend development", weight: 40},
		{text: "mobile", weight: 40}
	  ];

	$("#my_cloud").jQCloud(word_list, {shape: "rectangular"});

	$('#print').click(function(){
		window.print();	
  	});
  });