function project(repo) {
  const language = repo.language;
  const languageLabel = language
    ? `<div class="project__language">${language}</div>`
    : "";
  const bgImage = language
    ? `background-image: url('/assets/svg/languages/${language}.svg')`
    : "";

  return `
    <div class="dc-column dc-column--large-4 dc-column--medium-12 dc-column--small-12">
      <div class="project dc-card" style="${bgImage}">
        <a href="https://github.com/${repo.full_name}" target="_blank">
          <div class="project__header">
            <div class="project__header-content">
              <div class="project__header-content-text">
                ${repo.name}
              </div>
            </div>
            ${languageLabel}
          </div>
          <div class="project__content">
            <p class="dc-p project__description">${repo.description}</p>
            <div class="project__metrics">
              <div class="project__metric" title="Stars">
                <div class="project__metric-icon"><img src="/assets/svg/star.svg" /></div>
                <div class="project__metric-value">${repo.stars}</div>
              </div>
              <div class="project__metric" title="Forks">
                <div class="project__metric-icon"><img src="/assets/svg/fork.svg" /></div>
                <div class="project__metric-value">${repo.forks}</div>
              </div>
              <div class="project__metric" title="Contributors">
                <div class="project__metric-icon"><img src="/assets/svg/user.svg" /></div>
                <div class="project__metric-value">${repo.watchers}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  `;
}
