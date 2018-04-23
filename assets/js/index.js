//Catwatch urls
var catwatch = {
    statistics: "https://catwatch.opensource.zalan.do/statistics?organizations=zalando",
    projects: "https://catwatch.opensource.zalan.do/projects?organizations=zalando",
}

// good ol callback, lets not make this too complicated
var getUrl = function(url, cb){
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            cb(JSON.parse( request.responseText ));
        } else {
            // do nothing ... 
            console.log("catwatch did not return status:200")
        }
    };

    request.onerror = function(err) {
        console.log(err);
    };

    request.send();
}

//fetch the first 4 project
getUrl(catwatch.projects + "&limit=4&sortBy=-stars", function(projects){
    var template = document.getElementById("catwatch-projects-template");
    var element = document.getElementById('catwatch-projects');

    console.log(projects);

    var html =  Mustache.render(template.innerHTML, {projects: projects.splice(2)} );
    html +=  Mustache.render(template.innerHTML, {projects: projects.splice(0,2)} );

    element.innerHTML = html;
});

//fetch the stats
getUrl(catwatch.statistics, function(stats){
    var template = document.getElementById("catwatch-statistics-template");
    var element = document.getElementById('catwatch-statistics');
    element.innerHTML = Mustache.render(template.innerHTML, stats[0]);
});

