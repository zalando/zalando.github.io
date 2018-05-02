function render(id, data) {
  document.getElementById(id).innerHTML = data;
}

function renderProjects(projects, doMapProjectToLanguage = false) {
  projects.forEach((repo, index) => {
    store.projects.add(project(repo, index));

    if (doMapProjectToLanguage) {
      mapProjectToLanguage(repo);
    }
  });

  render('catwatch-projects', [...store.projects].join(''));
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
    const organisation = /* document.getElementById('organisation-options') &&
      document.getElementById('organisation-options').value || */
      store.organisations[0];

    if (!doLoadMoreProjects) {
      store.offset = 0;
      store.projects = new Set();
    } else {
      store.offset += store.limit;
    }

    const data = await getProjects(organisation);

    renderProjects(data, true);

    /* if (store.offset < store.totalProjects) {
      render('load-more-projects-button', loadMoreProjects());
    } else {
      render('load-more-projects-button', '');
    } */
};

function displayProjectLabels() {
  const labels = [];
  for (const language of store.programmingLanguages) {
    labels.push(filterOption(language));
  }
  render('language-options', labels.join(''));
}

function displayOrganisationLabels() {
  const labels = [];
  for (const organisation of store.organisations) {
    labels.push(filterOption(organisation));
  }
  render('organisation-options', labels.join(''));
}

function filterByLanguage(language) {
  const filterOption = language || document.getElementById('language-options').value;
  const projects = store.languages.get(filterOption);

  store.projects = new Set();
  renderProjects(projects, false);
}

function displayTopProgrammingLanguages() {
  const labels = [];
  for (const language of store.topProgrammingLanguages) {
    labels.push(filterLabel(language));
  }
  render('top-programming-languages', labels.join(''));
}

async function displayStatistics() {
    const response = await getData(api.statistics);
    const data = response[0];
    store.totalProjects = data.publicProjectCount;

    const statisticDomElement = document.getElementById('catwatch-statistics');
    if (statisticDomElement) {
      const statistics = [];
      statistics.push(statistic(data));
      render('catwatch-statistics', statistics.join(''));
    }
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
