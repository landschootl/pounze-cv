var app = angular.module('myApp', []);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {
	        templateUrl: 'src/accueil/view.html',
	        controller: 'AccueilController'
   		 })
		.when('/apercu', {
	        templateUrl: 'src/curriculumVitae/Apercu/view.html',
	        controller: 'CurriculumVitaeApercuController'
	    })
   		.when('/editer', {
	        templateUrl: 'src/curriculumVitae/Editer/view.html',
	        controller: 'CurriculumVitaeEditerController'
   		 })
    	.otherwise({ 
    		redirectTo: '/' 
    	});
}]);
