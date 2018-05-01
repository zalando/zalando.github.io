const store = {
  totalProjects: 0,
  offset: 0,
  limit: 10,
  projects: new Set,
  languages: new Map,
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
  organisations: [
   'zalando', // 43
   'zalando-incubator', // 22
   'zalando-stups' // 77
  ]
};

/*
@TODO
- add ESLINT
- add options {
    showStaticButton
    loadMoreButton
    folder
  } as param to displayProjects
- get svg icons for all programmingLanguages
- change catwatch endpoints
  - get all Organisations
  - get all languages per organisation
  - get statistics per organisations
- show project based statistics
- rename languages in store to projectLanguageMap
- component to load all JS files
- benchmark performance for Map, Set
- browser support for Map, Set
*/
