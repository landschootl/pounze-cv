app.service('CurriculumVitaeService', [function() {
	this.curriculumVitae = {
        "nom" : "LANDSCHOOT",
        "prenom" : "Ludovic",
        "urlPhoto" : "http://blog.santelog.com/wp-content/uploads/2015/04/POMME-VISUEL.jpg",
        "status" : "Etudiant / DUT2 informatique",
        "object" : "Candidature à l'IUT artois de Lens",
        "permis" : true,
        "age" : "19",
        "dateNaissance" : "29/08/1995",
        "codePostal" : "59112",
        "ville" : "Annoeullin",
        "pays" : "France",
        "telephone" : "06.08.88.86.65",
        "mail" : "Ludovic.isn@hotmail.fr",
        "adresse" : "17 rue Pierre Mendès France",
        "description" : "Je suis un simple étudiant en deuxième année de DUT informatique à l'université artois de Lens. J'ai 19 ans et je suis actuellement en stage en tant que analyste développeur chez l'entreprise pictime à villeneuve d'ascq. Je compte intégrer  l année prochaine la licence 3 Miage à Lille 1 car j'aime la double formation qu elle propose 'informatique / gestion d'entreprise'. Je suis également animateur en centre de loisir, je possède mon BAFA et ma qualification SB 'surveillant beignade'.",
        "formations" : [{
                "dateDebut" : "2015",
                "dateFin" : "2015",
                "diplome" : "DUT Informatique",
                "specification" : "Option : ISN",
                "ecole" : "IUT Artois de Lens",
                "ville" : "Lens",
                "pays" : "France"
            },
            {
                "dateDebut" : "2015",
                "dateFin" : "2015",
                "diplome" : "DUT Informatique",
                "specification" : "",
                "ecole" : "IUT Artois de Lens",
                "ville" : "Lens",
                "pays" : "France"
            }
        ],
        "experiencesProfessionnelles" : [{
                "dateDebut" : "13/04/2015",
                "dateFin" : "03/07/2015",
                "fonction" : "Analyste développeur",
                "entreprise" : "Pictime Groupe",
                "mission" : "Refonte du dataService du site de Kiabi"
            },
            {
                "dateDebut" : "13/04/2015",
                "dateFin" : "03/07/2015",
                "fonction" : "Analyste développeur",
                "entreprise" : "Pictime Groupe",
                "mission" : "Refonte du dataService du site de Kiabi"
            }
        ],
        "domainesCompetences" : [{
                "domaine" : "Langue vivante",
                "competences" : [{"label":"Anglais","note":"5"}, {"label":"Espagnol", "note":"2"}]
            },
            {
                "domaine" : "Informatique",
                "competences" : [{"label":"Java","note":"5"}, {"label":"C++", "note":"2"}]
            },
            {
                "domaine" : "Informatique",
                "competences" : [{"label":"Java","note":"5"}, {"label":"C++", "note":"2"}]
            },
            {
                "domaine" : "Informatique",
                "competences" : [{"label":"Java","note":"5"}, {"label":"C++", "note":"2"}]
            }
        ],
        "centresInteret" : [{
                "loisir" : "Sport",
                "details" : "Natation, course à pied, vélo, football"
            },
            {
                "loisir" : "Musique",
                "details" : "Guitare"
            }
        ],
        ajouterFormation: function(){
            this.formations.push({
                "dateDebut" : "",
                "dateFin" : "",
                "diplome" : "",
                "specification" : "",
                "ecole" : "",
                "ville" : "",
                "pays" : ""
            });
        },
        supprimerFormation: function(){
            this.formations.pop();
        },
        ajouterExperienceProfessionnelle: function(){
            this.experiencesProfessionnelles.push({
                "dateDebut" : "",
                "dateFin" : "",
                "fonction" : "",
                "entreprise" : "",
                "mission" : ""
            });
        },
        supprimerExperienceProfessionnelle: function(){
            this.experiencesProfessionnelles.pop();
        },
        ajouterDomaineCompetence: function(){
            this.domainesCompetences.push({
                "domaine" : "",
                "competences" : []
            });
        },
        supprimerDomaineCompetence: function(){
            this.domainesCompetences.pop();
        },
        ajouterCompetenceAuDomaine: function(domaine){
            domaine.competences.push({"label":"","note":""});
        },
        supprimerCompetenceDuDomaine: function(domaine){
            domaine.competences.pop();
        },
        ajouterCentreInteret: function(){
            this.centresInteret.push({
                "loisir" : "",
                "details" : ""
            });
        },
        supprimerCentreInteret: function(){
            this.centresInteret.pop();
        }
    };

    this.visibilites = {
        "description" : true,
        "formations" : true,
        "experiencesProfessionnelles" : true,
        "domainesCompetences" : true,
        "centresInteret" : true
    };

    this.getCurriculumVitaeService = function(){
    	return this.curriculumVitae;
    };

    this.getVisibilites = function(){
        return this.visibilites;
    };
}])