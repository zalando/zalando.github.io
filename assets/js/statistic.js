function statistic(metric) {
  return `
    <div class="statistic dc-card">
      <span class="statistic__icon">
        <object id="statistic-${metric.key}-icon" data="assets/svg/${metric.key}.svg" type="image/svg+xml"></object>
      </span>
      <span class="statistic__key">${metric.key}</span>
      <span class="statistic__value" id="statistic-${metric.key}">${metric.value}</span>
    </div>
  `;
}
