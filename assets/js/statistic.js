function metricIcon(key) {
  return `
    <span class="statistic__icon">
      <object id="statistic-${key}-icon" data="assets/svg/${key}.svg" type="image/svg+xml"></object>
    </span>
  `;
}

function statistic(metric) {
  return `
    <div class="statistic" title="${metric.key}">
      <span class="statistic__icon">
        <object id="statistic-${metric.key}-icon" data="assets/svg/${metric.key}.svg" type="image/svg+xml"></object>
      </span>
      <span class="statistic__value" id="statistic-${metric.key}">${metric.value}</span>
    </div>
  `;
}

/*
<div class="statistic dc-p">
  There are currently ${metricIcon('repositories')} <strong>${metric.publicProjectCount}</strong> active Zalando projects
  written in <strong>${metric.programLanguagesCount}</strong> different languages,
  with <strong>${metric.allStarsCount}</strong> stars
  and <strong>${metric.allContributorsCount}</strong> active contributors.
</div>

<div class="statistic dc-card">
  <span class="statistic__icon">
    <object id="statistic-${metric.key}-icon" data="assets/svg/${metric.key}.svg" type="image/svg+xml"></object>
  </span>
  <span class="statistic__key">${metric.key}</span>
  <span class="statistic__value" id="statistic-${metric.key}">${metric.value}</span>
</div>
*/
