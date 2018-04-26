function project(project, index) {
  const language = project.primaryLanguage ?
    `<div class="project__language">${project.primaryLanguage}</div>` :
    '';

  return `
    <div class="project dc-card">
      <a href="${project.url}" target="_blank">
        <div class="project__header">
          <div class="project__header-content">
            <div class="project__header-content-text">
              ${project.name}
            </div>
          </div>
          ${language}
        </div>
        <div class="project__content">
          <p class="dc-p project__description">${project.description}</p>
        </div>
      </a>
    </div>
  `;
}
