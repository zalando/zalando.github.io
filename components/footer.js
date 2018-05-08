function footer(folder) {
  const path = store.path;
  const href = store.path ?
    `${path}index.html` :
    '';

  return `
    <div class="footer">
      <div class="footer__column">
        <div class="footer__title">
          <h2 class="dc-h2">Organisations</h2>
        </div>
        <ul class="footer__list">
          <li><a href="https://github.com/zalando" target="_blank">Zalando</a></li>
          <li><a href="https://github.com/zalando-incubator" target="_blank">Zalando Incubator</a></li>
          <li><a href="https://github.com/zalandoresearch" target="_blank">Zalando Research</a></li>
          <li><a href="https://github.com/zalando-nakadi" target="_blank">Nakadi</a></li>
          <li><a href="https://github.com/zalando-stups" target="_blank">STUPS</a></li>
          <li><a href="https://github.com/zalando-zmon" target="_blank">ZMON</a></li>
        </ul>
      </div>

      <div class="footer__column">
        <div class="footer__title">
          <h2 class="dc-h2">Outreach</h2>
        </div>
        <ul class="footer__list">
          <li><a href="https://www.cncf.io/" target="_blank">Cloud Native Computing Foundation</a></li>
        </ul>
      </div>

      <div class="footer__column">
        <div class="footer__title">
          <h2 class="dc-h2">Connect with us</h2>
        </div>
        <ul class="footer__list footer__list--social">
          <li>
            <span class="footer__icon">
              <object data="${path}assets/svg/mail-alt.svg" type="image/svg+xml"></object>
            </span>
            <a href="mailto: opensource@zalando.de">
              opensource@zalando.de
            </a>
          </li>
          <li>
            <span class="footer__icon">
              <object data="${path}assets/svg/twitter.svg" type="image/svg+xml"></object>
            </span>
            <a href="https://twitter.com/ZalandoTech" target="_blank">
              @ZalandoTech
            </a>
          </li>
          <li>
            <span class="footer__icon">
              <object data="${path}assets/svg/rss.svg" type="image/svg+xml"></object>
            </span>
            <a href="https://jobs.zalando.com/tech/blog/?tags=open%20source" target="_blank">
              Blog
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__column">
        <div class="footer__title">
          <h2 class="dc-h2">Links</h2>
        </div>
        <ul class="footer__list">
          <li><a href="${href}#os-projects">Projects</a></li>
          <li><a href="${href}#os-goals">Purpose</a></li>
          <li><a href="${href}#os-jobs">Jobs</a></li>
          <li><a href="${href}#os-articles">Articles</a></li>
          <li><a href="${href}#os-team">Team</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__stamp">
      <div>
        <a href="https://github.com/zalando/dress-code/" target="_blank">
          Built using
          <img class="footer__icon" src="${path}assets/svg/logo.svg" />
          Dress Code
        </a>
      </div>
    </div>
  `;
}
