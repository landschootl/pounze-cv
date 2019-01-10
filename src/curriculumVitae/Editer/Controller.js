app.controller('CurriculumVitaeEditerController', function($scope, CurriculumVitaeService) {
    $scope.cv = CurriculumVitaeService.getCurriculumVitaeService();

    $scope.visibilites = CurriculumVitaeService.getVisibilites();

    $scope.ajouterFormation = function(){
        $scope.cv.ajouterFormation();
    };

    $scope.supprimerFormation = function(){
        $scope.cv.supprimerFormation();
    };

    $scope.ajouterExperienceProfessionnelle = function(){
        $scope.cv.ajouterExperienceProfessionnelle();
    };

    $scope.supprimerExperienceProfessionnelle = function(){
        $scope.cv.supprimerExperienceProfessionnelle();
    };

    $scope.ajouterDomaineCompetence = function(){
        $scope.cv.ajouterDomaineCompetence();
    };

    $scope.supprimerDomaineCompetence = function(){
        $scope.cv.supprimerDomaineCompetence();
    };

    $scope.ajouterCompetenceAuDomaine = function(domaine){
        $scope.cv.ajouterCompetenceAuDomaine(domaine);
    };

    $scope.supprimerCompetenceDuDomaine = function(domaine){
        $scope.cv.supprimerCompetenceDuDomaine(domaine);
    };

    $scope.ajouterCentreInteret = function(){
        $scope.cv.ajouterCentreInteret();
    };

    $scope.supprimerCentreInteret = function(){
        $scope.cv.supprimerCentreInteret();
    };

});
