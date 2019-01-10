app.controller('compteurVisiteController', function($scope, $http) {
    $scope.getNombreDeVisite = function(){
    	$http.post("script.php").success(function(data){
	    	return data;
	    });
   	};
})