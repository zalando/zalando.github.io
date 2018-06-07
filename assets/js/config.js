const api = {
  statistics: 'https://catwatch.opensource.zalan.do/statistics?organizations=zalando,zalando-incubator,zalandoresearch,zalando-stups,zalando-nakadi,zalando-zmon',
  projects: 'https://catwatch.opensource.zalan.do/projects?sortBy=-stars',
  team: 'https://api.github.com/users'
};

/*
* To add a new member, open a browser and type https://api.github.com/users/${github-username}
* Get the relevant fields from the output and add it to to below team array.
*/
const team = [
  {
    username: 'therealpadams',
    title: 'Open Source Lead',
    name: 'Paul Adams',
    html_url: 'https://github.com/therealpadams',
    avatar_url: 'https://avatars2.githubusercontent.com/u/16607448?v=4',
    bio: 'Engineering Leader ■ Certified Scrum Master ■ Team Builder ■ Open Source Advocate ■ Chartered Engineer'
  },
  {
    username: 'perploug',
    title: 'Open Source Community Manager',
    name: 'Per Ploug',
    html_url: 'https://github.com/perploug',
    avatar_url: 'https://avatars1.githubusercontent.com/u/1492043?v=4',
    bio: 'Open source enabler | Tinker | Community Builder | Teacher | Semi-Pro Bio writer'
  },
  {
    username: 'princiya',
    title: 'Open Source Advocate',
    name: 'Princiya Marina Sequeira',
    html_url: 'https://github.com/princiya',
    avatar_url: 'https://avatars3.githubusercontent.com/u/8022693?v=4',
    bio: 'A little extra JavaScript enthusiast.'
  }
];
