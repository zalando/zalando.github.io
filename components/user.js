function user(data) {
  return `
    <div class="dc-column user">
      <a href="${data.html_url}" target="_blank" aria-label="View ${data.name}'s external profile">
        <div class="user__icon" style="background-image: url(${data.avatar_url})"></div>
      </a>
      <div class="dc-h2">
        <a href="${data.html_url}" target="_blank" class="user__name">
          ${data.name}
        </a>
      </div>
      <div class="dc-h3 user__title">${data.title}</div>
      <p class="dc-p">${data.bio || ''}</p>
    </div>
  `;
}
