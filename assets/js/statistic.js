function formatNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function statistic(metric) {
  return `
    <p class="dc-p statistic">
      There are currently <span class="statistic__value">${metric.publicProjectCount}</span> active Zalando
      <span class="statistic__key">projects</span>
      written in <span class="statistic__value">${metric.programLanguagesCount}</span> different
      <span class="statistic__key">languages</span>,
      with <span class="statistic__value">${formatNumber(metric.allStarsCount)}</span>
      <span class="statistic__key">stars</span>
      and <span class="statistic__value">${metric.allContributorsCount}</span> active
      <span class="statistic__key">contributors</span>.
    </p>
  `;
}
