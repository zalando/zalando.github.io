const store = {
  totalProjects: 0,
  offset: 0,
  limit: 10,
  projects: new Set,
  programmingLanguages: [
    'Python',
    'Swift',
    'Go',
    'Java',
    'CSS',
    'JavaScript',
    'Scala',
    'Shell',
    'Elm',
    'Kotlin',
    'Clojure'
  ],
  topProgrammingLanguages: [
    'Java',
    'Python',
    'Scala',
    'CSS',
    'Go'
  ],
  organisations: [
   'zalando', // 43
   'zalando-incubator', // 22
   'zalando-stups' // 77
  ],
  path: '',
  trackingId: 'UA-53633993-31',

  setLimit(value) {
    this.limit = value;
  },

  setPath(value) {
    this.path = value;
  }
};
