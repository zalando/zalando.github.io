async function getData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    hideSpinner();
    console.log(e);
  }
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

  if (projectsToDisplay.size < store.totalProjects) {
    projects.forEach((repo, index) => {
      projectsToDisplay.add(project(repo, index));

      if (isShowAll && store.projects.size < store.totalProjects) {
        store.projects.add(repo);
      }
    });
  }

  if (projectsToDisplay.size > 0) {
    render('catwatch-projects', [...projectsToDisplay].join(''));
  } else {
    render('catwatch-projects', 'We could not fetch projects at the moment. Please try again later!');
    const projectsWrapper = document.getElementById('projectsWrapper');
    projectsWrapper.style.minHeight = '50px';
  }
  hideSpinner();
}

async function displayProjects(language) {
    showSpinner();

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
      showLoadMoreProjects();
    }
};

function updateSelectOption(language) {
  const element = document.getElementById('language-options');
  element.value = language;
}

function filterByLanguage(language) {
  if (language) {
    updateSelectOption(language);
  }

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

function showLoadMoreProjects() {
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

function showSpinner() {
  const spinner = document.getElementById('spinner');
  spinner.style.display = 'flex';
}

function hideSpinner() {
  const spinner = document.getElementById('spinner');
  spinner.style.display = 'none';
}

async function displayStatistics() {
  const response = await getData(api.statistics);
  if (response) {
    const data = response[0];

    store.totalProjects = data.publicProjectCount;

    const statistics = [];
    statistics.push(statistic(data));
    render('catwatch-statistics', statistics.join(''));
  }
};

async function displayTeam() {
  const users = [];

  for (let member of team) {
    users.push(user(member));
  }

  render('os-team-data', users.join(''));
};
