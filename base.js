window.addEventListener('load', function() {
	
	var model = {
		cats: [
			{
				id: 1,
				class: 'cat',
				name: 'Super Cat',
				imgSrc: 'img/cat1.jpg',
				num: 0
			},
			{
				id: 2,
				class: 'cat',
				name: 'Black Cat',
				imgSrc: 'img/cat2.jpg',
				num: 0
			},
			{
				id: 3,
				class: 'cat',
				name: 'Super Cat',
				imgSrc: 'img/cat1.jpg',
				num: 0
			}
		]
	};

	var home = document.getElementById('home');

	var controller = {
		createCat: function() {

		},
		addClick: function() {

		},
		getVisibleCats: function() {
			return model.cats;
		},
		init: function() {
			view.init();
		}
	}

	var view = {
		init: function() {
			this.render();
		},
		render: function() {
			var catsList = controller.getVisibleCats();
			catsList.forEach(function(cat) {
				var catTemplate = document.querySelectorAll('script[data-template]')[0];
				var catNode = catTemplate.innerHTML.replace(/{{id}}/g, cat.id);

				var home = document.getElementById('home');

				home.innerHTML = home.innerHTML + catNode;


			});
		}
	};

	controller.init();


});