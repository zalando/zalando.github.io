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
      <div class="goal dc-column dc-column--large-4 dc-column--medium-12 dc-column--small-12">
        <div class="goal__icon">
          <object id="goal-participate" data="assets/svg/slideshare.svg" type="image/svg+xml"></object>
        </div>
        <h2 class="dc-h2">Participate</h2>
        <p class="dc-p">
            We invest in and contribute to Open Source projects which are important to us.
            We encourage Zalando employees to get involved in Open Source.
        </p>
      </div>

      <div class="goal dc-column dc-column--large-4 dc-column--medium-12 dc-column--small-12">
        <div class="goal__icon">
          <object id="goal-share" data="assets/svg/handshake-o.svg" type="image/svg+xml"></object>
        </div>
        <h2 class="dc-h2">Share</h2>
        <p class="dc-p">
            We share our code and processes with the rest of the world as we want technology to
            benefit as many people as possible.
        </p>
      </div>

      <div class="goal dc-column dc-column--large-4 dc-column--medium-12 dc-column--small-12">
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
        Currently no open positions
      </h3>
      
      <p class="dc-p">
        We do not currently have any open positions, but don't hesitate getting in touch with us anyway, 
        we are always interested in hearing from potential candidates - 
        reach us at <a href="mailto:opensource@zalando.de">opensource@zalando.de</a>  
      </p>
      
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
    await displayStatistics();
    await displayProjects();
    displayTeam();
  }
  
  init();
</script>
