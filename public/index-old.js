var englishCommon = ['About Me', 'Projects', 'Resume', 'TAKE A LOOK', 'DOWNLOAD IT', 'See in GitHub', 'More Info'];
var spanishCommon = ['Sobre m&iacute;', 'Proyectos', 'Curriculum Vitae', 'DAR UN VISTAZO', 'DESCARGAR', 'Ver en GitHub', 'M\u00E1s Info'];

$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();

	$('.languageSwitch').change(function() {
        if(this.checked) {
        	//Spanish
        	toSpanish();
        	getInfo("ESP");
        	$("#languageSwitch1").prop('checked', true);
        	$("#languageSwitch2").prop('checked', true);
        }
        else {
        	//English
        	toEnglish();
        	getInfo("ENG");
        	$("#languageSwitch1").prop('checked', false);
        	$("#languageSwitch2").prop('checked', false);
        }       
    });

    toEnglish();
    getInfo("ENG"); 
});

function getInfo(language) {
	fetch("https://brokenerk.github.io/languages/" + language + ".txt").then(response => response.text()).then((data) => {
		var res = data.split("\n\n");
		$(".infoContainer0").html(res[0]);

		for (var i = 1; i < res.length; i++) {
			$("#infoContainer" + i).html(res[i]);
		}
	})
}

function toEnglish() {
	$("#aboutMeContainer").html(englishCommon[0]);
	$(".projectsContainer").html(englishCommon[1]);
	$(".resumeContainer").html(englishCommon[2]);
	$(".resumeContainer").attr("href", "./cv/resume.pdf");
	$(".takeLookContainer").html(englishCommon[3]);
	$(".downloadItContainer").html(englishCommon[4]);
	$(".seeGithubContainer").attr("data-original-title", englishCommon[5]);
	$(".infoButtonContainer").attr("data-original-title", englishCommon[6]);
}

function toSpanish() {
	$("#aboutMeContainer").html(spanishCommon[0]);
	$(".projectsContainer").html(spanishCommon[1]);
	$(".resumeContainer").html(spanishCommon[2]);
	$(".resumeContainer").attr("href", "./cv/cv.pdf");
	$(".takeLookContainer").html(spanishCommon[3]);
	$(".downloadItContainer").html(spanishCommon[4]);
	$(".seeGithubContainer").attr("data-original-title", spanishCommon[5]);
	$(".infoButtonContainer").attr("data-original-title", spanishCommon[6]);
}