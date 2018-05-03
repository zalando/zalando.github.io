function project(project, index, folder) {
  const language = project.primaryLanguage;
  const languageLabel = language ?
    `<div class="project__language">${language}</div>` :
    '';
  const path = folder || '';
  const bgImage = /* language ?
    `background-image: url('${path}assets/svg/languages/${language}.svg')` :*/
    '';

  return `
    <div class="project dc-card" style="${bgImage}">
      <a href="${project.url}" target="_blank">
        <div class="project__header">
          <div class="project__header-content">
            <div class="project__header-content-text">
              ${project.name}
            </div>
          </div>
          ${languageLabel}
        </div>
        <div class="project__content">
          <p class="dc-p project__description">${project.description}</p>
          <div class="project__metrics">
            <div class="project__metric" title="Stars">
              <div class="project__metric-icon"><img src="../assets/svg/star.svg" /></div>
              <div class="project__metric-value">${project.starsCount}</div>
            </div>
            <div class="project__metric" title="Forks">
              <div class="project__metric-icon"><img src="../assets/svg/fork.svg" /></div>
              <div class="project__metric-value">${project.forksCount}</div>
            </div>
            <div class="project__metric" title="Contributors">
              <div class="project__metric-icon"><img src="../assets/svg/user.svg" /></div>
              <div class="project__metric-value">${project.contributorsCount}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  `;
}
