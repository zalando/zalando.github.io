function project(project, index) {
  return `
    <div class="project dc-card">
      <div class="project__header">
        <div class="project__header-icon">${index + 1}</div>
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
