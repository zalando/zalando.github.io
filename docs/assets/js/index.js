const api = {
  statistics: 'https://catwatch.opensource.zalan.do/statistics?organizations=zalando',
  projects: 'https://catwatch.opensource.zalan.do/projects?organizations=zalando&limit=6&sortBy=-stars',
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
  document.getElementById(id).innerHTML = data.join('');
}

async function getData(url) {
  const response = await fetch(url);
  return await response.json();
}

async function displayProjects() {
    const data = await getData(`${api.projects}&offset=${store.offset}`);
    store.offset += store.limit;

    data.forEach((repo, index) => {
      store.projects.push(project(repo, index));
    });
    render('catwatch-projects', store.projects);
};

async function displayStatistics() {
    const response = await getData(api.statistics);
    const data = response[0];
    const statistics = [];

    statistics.push(statistic(data));
    render('catwatch-statistics', statistics);
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

displayProjects();
displayStatistics();
