const catwatch = {
  statistics: 'https://catwatch.opensource.zalan.do/statistics?organizations=zalando',
  projects: 'https://catwatch.opensource.zalan.do/projects?organizations=zalando&limit=3&sortBy=-stars'
};

async function getData(url) {
  const response = await fetch(url);
  return await response.json();
}

async function displayProjects(url) {
    const data = await getData(catwatch.projects);
    const projects = [];

    data.forEach((repo, index) => {
      projects.push(project(repo, index));
    });

    document.getElementById('catwatch-projects').innerHTML = projects;
};

async function displayStatistics(url) {
    const response = await getData(catwatch.statistics);
    const data = response[0];
    const metrics = [{
        key: 'contributors',
        value: data.allContributorsCount
      },
      {
        key: 'stars',
        value: data.allStarsCount
      },
      {
        key: 'repositories',
        value: data.publicProjectCount
      },
      {
        key: 'languages',
        value: data.programLanguagesCount
      }
    ];
    const statistics = [];

    metrics.forEach(metric => statistics.push(statistic(metric)));
    document.getElementById('catwatch-statistics').innerHTML = statistics;
};

displayProjects(catwatch.projects);
displayStatistics(catwatch.statistics);
