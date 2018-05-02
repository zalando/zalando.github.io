async function getData(url) {
  const response = await fetch(url);
  return await response.json();
}

async function getProjects(organisation, language) {
  let url = `${api.projects}&offset=${store.offset}&organizations=${organisation}&limit=${store.limit}`;

  if (language) {
    url = `${url}&language=${language}`;
  }

  return await getData(url);
}

function render(id, data) {
  document.getElementById(id).innerHTML = data;
}

function updateProjectsToDisplay(projects) {
  let projectsToDisplay = new Set();

  projects.forEach((repo, index) => {
    projectsToDisplay.add(project(repo, index));
  });

  return projectsToDisplay;
}

function renderProjects(projects, isMapProjectToLanguage = false, isShowAll = true) {
  let projectsToDisplay = new Set();

  if (isShowAll) {
    projectsToDisplay = updateProjectsToDisplay(store.projects);
  }

  projects.forEach((repo, index) => {
    projectsToDisplay.add(project(repo, index));

    if (isMapProjectToLanguage) {
      mapProjectToLanguage(repo);
      store.projects.add(repo);
    }
  });

  render('catwatch-projects', [...projectsToDisplay].join(''));
}

function mapProjectToLanguage(repo) {
  let projectsPerLanguage = new Set();

  if (store.languages.has(repo.primaryLanguage)) {
    projectsPerLanguage = store.languages.get(repo.primaryLanguage);
  }

  projectsPerLanguage.add(repo);
  store.languages.set(repo.primaryLanguage, projectsPerLanguage);
}

async function displayProjects(language) {
    const organisation = store.organisations[0];

    if (language) {
      store.offset = 0;
    } else {
      store.offset += store.limit;
    }

    const data = await getProjects(organisation, language);
    renderProjects(data, true, !language);
    displayLoadMoreProjects();
};

function filterByLanguage(language) {
  const filterOption = language || document.getElementById('language-options').value;

  if (filterOption === 'All') {
    displayProjects();
  } else {
    if (store.offset + store.limit < store.totalProjects) {
      displayProjects(filterOption);
    } else {
      const projects = store.languages.get(filterOption);
      renderProjects(projects, false);
    }
  }
}

function displayLanguageOptions() {
  const labels = [];

  labels.push(filterOption('All'));
  for (const language of store.programmingLanguages) {
    labels.push(filterOption(language));
  }
  render('language-options', labels.join(''));
}

function displayTopProgrammingLanguages() {
  const labels = [];
  for (const language of store.topProgrammingLanguages) {
    labels.push(filterLabel(language));
  }
  render('top-programming-languages', labels.join(''));
}

function displayLoadMoreProjects() {
  if (store.offset + store.limit < store.totalProjects) {
    render('load-more-projects-button', loadMoreProjects());
  } else {
    render('load-more-projects-button', '');
  }
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
