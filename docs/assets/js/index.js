const api = {
  statistics: 'https://catwatch.opensource.zalan.do/statistics?organizations=zalando',
  projects: 'https://catwatch.opensource.zalan.do/projects?sortBy=-stars',
  team: 'https://api.github.com/users'
};

const team = [
  {
    username: 'therealpadams',
    title: 'Open Source Lead'
  },
  {
    username: 'perploug',
    title: 'Open Source Community Manager'
  },
  {
    username: 'princiya',
    title: 'Open Source Advocate'
  }
];

function render(id, data) {
  document.getElementById(id).innerHTML = data;
}

async function getData(url) {
  const response = await fetch(url);
  return await response.json();
}

function mapProjectToLanguage(repo) {
  let projectsPerLanguage = new Set();

  if (store.languages.has(repo.primaryLanguage)) {
    projectsPerLanguage = store.languages.get(repo.primaryLanguage);
  }

  projectsPerLanguage.add(repo);
  store.languages.set(repo.primaryLanguage, projectsPerLanguage);
}

async function getProjects(organization) {
  return await getData(`${api.projects}&offset=${store.offset}&organizations=${organization}&limit=${store.limit}`)
}

async function displayProjects(organization) {
    const data = await getProjects(organization || store.organizations[0]);
    store.offset += store.limit;

    data.forEach((repo, index) => {
      store.projects.add(project(repo, index));
      mapProjectToLanguage(repo);
    });
    render('catwatch-projects', [...store.projects].join(''));

    if (store.offset < store.totalProjects) {
      render('load-more-projects-button', loadMoreProjects());
    } else {
      render('load-more-projects-button', '');
    }
};

function displayProjectLabels() {
  const labels = ['All'];
  for (const language of store.programmingLanguages) {
    labels.push(projectLabel(language));
  }
  render('project-labels', labels.join(''));
}

function displayOrganisationLabels() {
  const labels = [];
  for (const language of store.organizations) {
    labels.push(projectLabel(language));
  }
  render('organization-labels', labels.join(''));
}

function filterByLanguage() {
  const language = document.getElementById('project-labels').value;
  const projects = store.languages.get(language);
  const projectArray = [...projects];
  console.log('projects', projects);
  const displayProjects = []

  projectArray.forEach((repo, index) => {
    displayProjects.push(project(repo, index));
  });
  render('catwatch-projects', displayProjects.join(''));
}

async function filterByOrganisation() {
  const organization = document.getElementById('organization-labels').value;
  const projects = await getProjects(organization, 0);
  projects.forEach((repo, index) => {
    store.projects = new Set();
    store.projects.add(project(repo, index));
    // mapProjectToLanguage(repo);
  });
  render('catwatch-projects', [...store.projects].join(''));
}

async function displayStatistics() {
    const response = await getData(api.statistics);
    const data = response[0];
    const statistics = [];
    store.totalProjects = data.publicProjectCount;

    // statistics.push(statistic(data));
    // render('catwatch-statistics', statistics.join(''));
};

async function displayTeam() {
  const users = [];
  let response;

  for (let member of team) {
    response = await getData(`${api.team}/${member.username}`);
    response.title = member.title;
    users.push(user(response));
  }

  render('os-team-data', users);
};

async function init() {
  await displayStatistics();
  await displayProjects();
  displayProjectLabels();
  displayOrganisationLabels();
};
init();
