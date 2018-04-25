function project(project, index) {
  return `
    <div class="project dc-card">
      <div class="project__header">
        <div class="project__header-icon">
          <object id="project-language-icon" data="assets/svg/${project.primaryLanguage}.svg" type="image/svg+xml">
            <img src="assets/svg/languages.svg" />
          </object>
        </div>
        <div class="project__header-content">
          <div class="project__header-content-text">
            ${project.name}
          </div>
        </div>
        <div class="project__language">${project.primaryLanguage}</div>
      </div>
      <div class="project__content">
        <p class="dc-p project__description">${project.description}</p>
      </div>
    </div>
  `;
}
