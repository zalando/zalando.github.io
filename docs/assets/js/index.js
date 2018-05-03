async function getData(url) {
  const response = await fetch(url);
  return await response.json();
}

async function getProjects(organisation, language) {
  let url = `${api.projects}&organizations=${organisation}`;

  if (language) {
    url = `${url}&language=${language}&limit=20`;
  } else {
    url = `${url}&offset=${store.offset}&limit=${store.limit}`;
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

function renderProjects(projects, isShowAll = true) {
  let projectsToDisplay = new Set();

  if (isShowAll) {
    projectsToDisplay = updateProjectsToDisplay(store.projects);
  }

  projects.forEach((repo, index) => {
    projectsToDisplay.add(project(repo, index));

    if (isShowAll) {
      store.projects.add(repo);
    }
  });

  render('catwatch-projects', [...projectsToDisplay].join(''));
}

async function displayProjects(language) {
    const organisation = store.organisations[0];
    const isShowAll = !language;
    const isMainPage = !store.path;
    let data;

    if (language || store.offset < store.totalProjects) {
      data = await getProjects(organisation, language);
    } else {
      data = store.projects;
    }

    if (isShowAll && store.offset < store.totalProjects) {
      store.offset += store.limit;
    }

    renderProjects(data, isShowAll);

    if (isMainPage || language) {
      hideLoadMoreProjects(isMainPage);
    } else {
      displayLoadMoreProjects();
    }
};

function filterByLanguage(language) {
  const filterOption = language || document.getElementById('language-options').value;

  if (filterOption === 'All') {
    displayProjects();
  } else {
    displayProjects(filterOption);
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
  if (store.offset < store.totalProjects) {
    render('load-more-projects-button', loadMoreProjects());
  } else {
    hideLoadMoreProjects();
  }
}

function hideLoadMoreProjects(isMainPage) {
  if (!isMainPage) {
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
