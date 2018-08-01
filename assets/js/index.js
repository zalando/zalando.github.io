async function getData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    hideSpinner();
    console.log(e);
  }
}

var _repoData;
async function getRepositoriesData() {
  if (!_repoData) {
    _repoData = await getData("/data/repositories.json");
  }

  return _repoData;
}

var _statsData;
async function getStatisticsData() {
  if (!_statsData) {
    _statsData = await getData("/data/statistics.json");
  }

  return _statsData;
}

let repoFilter = {
  page: 0,
  maxItems: 6,
  language: undefined
};

async function getProjects(options) {
  if (options) {
    repoFilter = options;
  }

  var repos = await getRepositoriesData();
  var response = {
    page: repoFilter.page,
    maxItems: repoFilter.maxItems,
    totalItems: repos.length,
    data: []
  };

  if (repoFilter.language) {
    repos = repos.filter(x => x.language === repoFilter.language);
  }

  var numOfItems = repoFilter.maxItems * (repoFilter.page + 1);
  if (numOfItems < response.totalItems) {
    repos = repos.slice(0, numOfItems);
  }

  response.data = repos;

  return response;
}

function render(id, data) {
  document.getElementById(id).innerHTML = data;
}

async function displayProjects(filter) {
  showSpinner();

  if (filter) {
    repoFilter = filter;
  }

  let projects = await getProjects(repoFilter);

  // Build a html string
  const html = projects.data.map(x => project(x)).join("");

  // inject into this div...
  render("catwatch-projects", html);

  if (repoFilter.showButton) {
    render("load-more-projects-button", loadMoreProjectsButton());
  }

  hideSpinner();
}

async function displayMoreProjects() {
  repoFilter.page++;
  displayProjects(repoFilter);
}

function updateSelectOption(language) {
  const element = document.getElementById("language-options");
  element.value = language;
}

function filterByLanguage(language) {
  if (language) {
    updateSelectOption(language);
  }

  var lang = document.getElementById("language-options").value;

  repoFilter.language = lang === "All" ? undefined : lang;
  repoFilter.page = 0;

  displayProjects(repoFilter);
}

function displayLanguageOptions() {
  const labels = [];

  labels.push(filterOption("All"));
  for (const language of store.programmingLanguages) {
    labels.push(filterOption(language));
  }
  render("language-options", labels.join(""));
}

function displayTopProgrammingLanguages() {
  const labels = [];
  for (const language of store.topProgrammingLanguages) {
    labels.push(filterLabel(language));
  }
  render("top-programming-languages", labels.join(""));
}

function showLoadMoreProjects() {
  if (store.offset < store.totalProjects) {
    render("load-more-projects-button", loadMoreProjects());
  } else {
    hideLoadMoreProjects();
  }
}

function hideLoadMoreProjects(isMainPage) {
  if (!isMainPage) {
    render("load-more-projects-button", "");
  }
}

function showSpinner() {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "flex";
}

function hideSpinner() {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "none";
}

async function displayStatistics() {
  const response = await getStatisticsData();

  if (response) {
    var html = statistic(response);
    render("catwatch-statistics", html);
  }
}

async function displayTeam() {
  const users = [];

  for (let member of team) {
    users.push(user(member));
  }

  render("os-team-data", users.join(""));
}

function addEventListeners() {
  const accordion = document.getElementsByClassName("accordion");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
      const panel = this.nextElementSibling;
      const getComputedStyle = window.getComputedStyle(panel);
      const getComputedMaxHeight = getComputedStyle.maxHeight;

      this.classList.toggle("accordion--active");
      if (!getComputedMaxHeight || getComputedMaxHeight === "0px") {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = 0;
      }
    });
  }
}
