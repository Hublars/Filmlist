(function() {
	var app = angular.module("film-directives", []);
	
	app.directive("filmitem", function() {
		return {
			restrict: "E",
			templateUrl: "filmitem.html"
		};
	});
		
	app.directive("showflexcss", function() {
		return {
			restrict: "E",
			templateUrl: "showCode/show_flex_css.html"
		};
	});
	
	app.directive("showindex", function() {
		return {
			restrict: "E",
			templateUrl: "showCode/show_index.html"
		};
	});
	
	app.directive("showappjs", function() {
		return {
			restrict: "E",
			templateUrl: "showCode/show_appjs.html"
		};
	});
	
	app.directive("showfilmsjs", function() {
		return {
			restrict: "E",
			templateUrl: "showCode/show_filmsjs.html"
		};
	});
	
	app.directive("showfilmitem", function() {
		return {
			restrict: "E",
			templateUrl: "showCode/show_filmitem.html"
		};
	});
	
	
	
	/*app.directive("titleGenre", function() {
		return {
			restrict: "E",
			templateUrl: "title-genre.html"
		};
	});
	
	app.directive("price", function() {
		return {
			restrict: "A",
			templateUrl: "price.html"
		};
	});*/
})();
