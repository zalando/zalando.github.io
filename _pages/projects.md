---
layout: default
title: Projects
description: Zalando's Repositories On GitHub
permalink: /projects/
banner:
  image: laptop.jpg
---
<section class="dc--text-center page-section page-section--padding page-section--padding-small page-section--background-white" id="os-projects">
  <div class="dc-container dc-container--limited">
    <div id="catwatch-statistics" class="statistics"></div>

    <div class="filter__panel">
      <div class="filter-dropdown__wrapper">
        <h3 class="dc-p filter__title">Filter by Programming Language</h3>
        <select class="dc-select filter-dropdown" id="language-options" onchange="filterByLanguage()"></select>
      </div>
      <div class="filter-labels__wrapper">
        <label class="dc-p filter__title">Top Programming Languages</label>
        <div class="filter-labels" id="top-programming-languages"></div>
      </div>
    </div>

    <div class="projects__wrapper" id="projectsWrapper">
      <div class="spinner-overlay" id="spinner">
        <div class="dc-spinner"></div>
      </div>
      <div id="catwatch-projects" class="projects"></div>
    </div>

    <div id="load-more-projects-button" class="projects"></div>
  </div>
</section>

<script src="../components/filterOption.js" type="text/javascript"></script>
<script src="../components/filterLabel.js" type="text/javascript"></script>
<script src="../components/loadMoreProjects.js" type="text/javascript"></script>

<script type="text/javascript">
  async function init() {
    displayLanguageOptions();
    displayTopProgrammingLanguages();

   
    repoFilter.showButton = true;
    await displayStatistics();
    await displayProjects(repoFilter);
  }
  init();
</script>
