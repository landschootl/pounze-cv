app.controller('CurriculumVitaeApercuController', function($scope, CurriculumVitaeService) {
    $scope.cv = CurriculumVitaeService.getCurriculumVitaeService();

    $scope.visibilites = CurriculumVitaeService.getVisibilites();
})

