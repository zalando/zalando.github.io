function project(project, index) {
  const language = project.primaryLanguage || '';
  return `
    <div class="project dc-card">
      <div class="project__header">
        <div class="project__header-content">
          <div class="project__header-content-text">
            ${project.name}
          </div>
        </div>
        <div class="project__language">${language}</div>
      </div>
      <div class="project__content">
        <p class="dc-p project__description">${project.description}</p>
      </div>
    </div>
  `;
}
