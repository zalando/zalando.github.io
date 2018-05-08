function user(data) {
  return `
    <div class="dc-column user">
      <a href="${data.html_url}" target="_blank">
        <div class="user__icon" style="background-image: url(${data.avatar_url})"></div>
      </a>
      <h3 class="dc-h2">
        <a href="${data.html_url}" target="_blank" class="user__name">
          ${data.name}
        </a>
      </h3>
      <h3 class="dc-h3 user__title">${data.title}</h3>
      <p class="dc-p">${data.bio || ''}</p>
    </div>
  `;
}
