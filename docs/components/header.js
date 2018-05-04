function header() {
  const path = store.path;
  const activeTab = path || '';
  let projectClasses = 'dc-tab__element';

  if (path) {
    projectClasses = `${projectClasses} dc-tab__element--active`;
  }

  return `
    <ul class="dc-tab header">
      <li class="dc-tab__element dc-tab__element--header header__logo">
        <a href="${path}index.html">
          <img src="${path}assets/svg/logo.svg" />
        </a>
      </li>
      <li class="${projectClasses}"><a href="${path}index.html#os-projects">Projects</a></li>
      <li class="dc-tab__element"><a href="${path}index.html#os-goals">Purpose</a></li>
      <li class="dc-tab__element"><a href="${path}index.html#os-jobs">Jobs</a></li>
      <li class="dc-tab__element"><a href="${path}index.html#os-articles">Articles</a></li>
      <li class="dc-tab__element"><a href="${path}index.html#os-team">Team</a></li>
    </ul>
  `;
}
