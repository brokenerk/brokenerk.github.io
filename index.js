var englishCommon = ['About Me', 'Projects', 'My Resume', 'TAKE A LOOK', 'DOWNLOAD IT'];
var spanishCommon = ['Sobre m&iacute;', 'Proyectos', 'Curriculum Vitae', 'DAR UN VISTAZO', 'DESCARGAR'];

$(document).ready(function() {
	$('#languageSwitch').change(function() {
        if(this.checked) {
        	//Spanish
        	toSpanish();
        	getInfo("spanish"); 
        }
        else {
        	//English
        	toEnglish();
        	getInfo("english"); 
        }       
    });

    toEnglish();
    getInfo("english"); 
});

function getInfo(language) {
	fetch("https://brokenerk.github.io/" + language + ".txt").then(response => response.text()).then((data) => {
		var res = data.split("\n\n");
		for (var i = 0; i < res.length; i++) {
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
}

function toSpanish() {
	$("#aboutMeContainer").html(spanishCommon[0]);
	$(".projectsContainer").html(spanishCommon[1]);
	$(".resumeContainer").html(spanishCommon[2]);
	$(".resumeContainer").attr("href", "./cv/cv.pdf");
	$(".takeLookContainer").html(spanishCommon[3]);
	$(".downloadItContainer").html(spanishCommon[4]);
}