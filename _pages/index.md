---
layout: default
title: Zalando Open Source
permalink: /
banner:
  height: 450px
---

<section class="dc--text-center page-section page-section--padding page-section--background-white" id="os-projects">
  <div class="dc-container dc-container--limited">
    <h1 class="dc-h1 page-section__header">Projects</h1>

    <div id="catwatch-statistics" class="statistics"></div>

    <div class="projects__wrapper" id="projectsWrapper">
      <div class="spinner-overlay" id="spinner">
        <div class="dc-spinner"></div>
      </div>
      <div id="catwatch-projects" class="projects"></div>
    </div>

    <a class="dc-btn dc-btn--primary" href="projects/index.html">Explore All Projects</a>

  </div>
</section>

<section class="dc--text-center page-section page-section--padding page-section--background page-section--background-gradient strategy" id="os-goals">
  <div class="dc-container dc-container--limited">
    <h1 class="dc-h1 page-section__header">
      Purpose
    </h1>

    <p class="dc-p strategy__subtitle">
      The Open Source Team works across departments at Zalando to scale open culture and
      promote best practices of Open Source development. We ensure that Zalando is
      a good Open Source citizen, from understanding and respecting Open Source licensing to enabling
      Zalando employees to take active part in the creation of Open Source.
    </p>

    <br>

    <div class="dc-row">
      <div class="goal dc-column">
        <div class="goal__icon">
          <object id="goal-participate" data="assets/svg/slideshare.svg" type="image/svg+xml"></object>
        </div>
        <h2 class="dc-h2">Participate</h2>
        <p class="dc-p">
            We invest in and contribute to Open Source projects which are important to us.
            We encourage Zalando employees to get involved in Open Source.
        </p>
      </div>

      <div class="goal dc-column">
        <div class="goal__icon">
          <object id="goal-share" data="assets/svg/handshake-o.svg" type="image/svg+xml"></object>
        </div>
        <h2 class="dc-h2">Share</h2>
        <p class="dc-p">
            We share our code and processes with the rest of the world as we want technology to
            benefit as many people as possible.
        </p>
      </div>

      <div class="goal dc-column">
        <div class="goal__icon">
          <object id="goal-promote" data="assets/svg/gg.svg" type="image/svg+xml"></object>
        </div>
        <h2 class="dc-h2">Promote</h2>
        <p class="dc-p">
          We enable and prioritize Open Source code in our engineering teams.
          We encourage an open culture as we see the practices of the Open Source movement
          as the best way to collaborate.
        </p>
      </div>
    </div>

  </div>
</section>

<section class="page-section page-section--padding page-section--background-white jobs" id="os-jobs">
  <div class="dc-container dc-container--limited">
    <h1 class="dc-h1 page-section__header page-section__header--center">Jobs</h1>
    <div class="dc-row job">
      <h3 class="dc-h2">
        <a href="https://jobs.zalando.com/jobs/965101-open-source-community-manager-senior/" target="_blank">
          Open Source Community Manager (Senior)
        </a>
      </h3>
      <p class="dc-p">We are looking for a Senior Open Source Community Manager / Evangelist to foster a strong and active community both internally and externally; to continue to drive Zalando’s Open Source strategy, presence, leadership, and contributions; to shepherd teams to contribute to Open Source for the good of themselves, Zalando, and the global Open Source community.</p>
    </div>
    <div class="dc-divider"></div>
    <div class="dc-row job">
      <h3 class="dc-h2">
        <a href="https://jobs.zalando.com/jobs/1108784-inner-source-manager/" target="_blank">
          Inner Source Manager
        </a>
      </h3>
      <p class="dc-p">We are looking for an Inner Source Manager to foster the spirit and best practices of Open Source within Zalando engineering; to continue to drive Zalando’s Open Source strategy, presence, leadership, and contributions; to shepherd teams to contribute to Open Source for the good of themselves, Zalando, and the global Open Source community.</p>
    </div>
  </div>
</section>

{% include recent-posts.html %}

<section class="dc--text-center page-section page-section--padding page-section--background-white team" id="os-team">
  <div class="dc-container dc-container--limited">
    <h1 class="dc-h1 page-section__header">The Team</h1>
    <div id="os-team-data" class="users"></div>
  </div>
</section>

<script src="{{ 'components/user.js' | relative_url }}" type="text/javascript"></script>

<script type="text/javascript">
  async function init() {
    store.setLimit(6);
    await displayStatistics();
    await displayProjects();
    displayTeam();
  }
  init();
</script>
