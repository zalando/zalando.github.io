function project(project, index) {
  const language = project.primaryLanguage;
  const languageLabel = language ?
    `<div class="project__language">${language}</div>` :
    '';
  const bgImage = /* language ?
    `background-image: url('../assets/svg/languages/${language}.svg')` : */
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
        </div>
      </a>
    </div>
  `;
}
