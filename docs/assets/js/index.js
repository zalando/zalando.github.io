function render(id, data) {
  document.getElementById(id).innerHTML = data;
}

async function getData(url) {
  const response = await fetch(url);
  return await response.json();
}

async function getProjects(organisation) {
  return await getData(`${api.projects}&offset=${store.offset}&organizations=${organisation}&limit=${store.limit}`)
}

function mapProjectToLanguage(repo) {
  let projectsPerLanguage = new Set();

  if (store.languages.has(repo.primaryLanguage)) {
    projectsPerLanguage = store.languages.get(repo.primaryLanguage);
  }

  projectsPerLanguage.add(repo);
  store.languages.set(repo.primaryLanguage, projectsPerLanguage);
}

async function displayProjects(doLoadMoreProjects = false) {
    const organisation = document.getElementById('organisation-labels').value ||
      store.organisations[0];

    if (!doLoadMoreProjects) {
      store.offset = 0;
      store.projects = new Set();
    } else {
      store.offset += store.limit;
    }

    const data = await getProjects(organisation);

    renderProjects(data, true);

    if (store.offset < store.totalProjects) {
      render('load-more-projects-button', loadMoreProjects());
    } else {
      render('load-more-projects-button', '');
    }
};

function renderProjects(projects, doMapProjectToLanguage = false) {
  projects.forEach((repo, index) => {
    store.projects.add(project(repo, index));

    if (doMapProjectToLanguage) {
      mapProjectToLanguage(repo);
    }
  });
  render('catwatch-projects', [...store.projects].join(''));
}

function displayProjectLabels() {
  const labels = [];
  for (const language of store.programmingLanguages) {
    labels.push(filterLabel(language));
  }
  render('project-labels', labels.join(''));
}

function displayOrganisationLabels() {
  const labels = [];
  for (const organisation of store.organisations) {
    labels.push(filterLabel(organisation));
  }
  render('organisation-labels', labels.join(''));
}

function filterByLanguage() {
  const language = document.getElementById('project-labels').value;
  const projects = store.languages.get(language);

  store.projects = new Set();
  renderProjects(projects, false);
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

function init() {
  displayStatistics();
  displayProjects();
  displayProjectLabels();
  displayOrganisationLabels();
};
init();
