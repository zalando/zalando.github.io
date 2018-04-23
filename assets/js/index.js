//Catwatch urls

const catwatch = {
  statistics: 'https://catwatch.opensource.zalan.do/statistics?organizations=zalando',
  projects: 'https://catwatch.opensource.zalan.do/projects?organizations=zalando&limit=3&sortBy=-stars'
};

async function getData(url) {
  const response = await fetch(url);
  return await response.json();
}

function setStats(key, value) {
  document.getElementById(key).innerHTML = value;
}

async function getStats(url) {
    const data = await getData(catwatch.statistics);
    const stats = data[0];

    setStats('catwatch-statistics-languages', stats.programLanguagesCount);
    setStats('catwatch-statistics-projects', stats.publicProjectCount);
};

function setProject(project) {
  const domElement = `<div class="project">
    <span>Name: ${project.name}</span>
    <span>Language: ${project.primaryLanguage}</span>
    <span>Forks: ${project.forksCount}</span>
    <span>Stars: ${project.starsCount}</span>
  </div>`;

  return domElement;
}

async function getProjects(url) {
    const data = await getData(catwatch.projects);
    const projects = [];

    data.forEach(project => {
      projects.push(setProject(project));
    });

    document.getElementById('catwatch-projects').innerHTML = projects;
};

getStats(catwatch.statistics);
getProjects(catwatch.projects);
