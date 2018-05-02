function filterLabel(label) {
  return `
    <div class="filter-label" onclick="filterByLanguage('${label}')">${label}</div>
  `;
}
