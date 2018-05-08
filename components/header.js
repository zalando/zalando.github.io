function header() {
  const path = store.path;
  let projectClasses = 'dc-tab__element';
  let href = '';

  if (path) {
    projectClasses = `${projectClasses} dc-tab__element--active`;
    href = `${path}index.html`;
  }

  return `
    <ul class="dc-tab header">
      <li class="dc-tab__element dc-tab__element--header header__logo">
        <a href="${path}index.html">
          <img src="${path}assets/svg/logo.svg" />
        </a>
      </li>
      <li class="${projectClasses}"><a href="${href}#os-projects">Projects</a></li>
      <li class="dc-tab__element"><a href="${href}#os-goals">Purpose</a></li>
      <li class="dc-tab__element"><a href="${href}#os-jobs">Jobs</a></li>
      <li class="dc-tab__element"><a href="${href}#os-articles">Articles</a></li>
      <li class="dc-tab__element"><a href="${href}#os-team">Team</a></li>
    </ul>
  `;
}
