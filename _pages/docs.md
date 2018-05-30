---
layout: default
title: Projects
description: Zalando's Repositories On GitHub
permalink: /docs
banner:
  image: laptop.jpg
---


<section class="dc--text-center page-section page-section--padding page-section--background-secondary" id="os-articles">
  <div class="dc-container dc-container--limited">
  <h1 class="dc-h1 page-section__header">Articles</h1>
    {% for documentation in site.docs %}
    <div class="dc-row blog">
      <div class="dc-h2">
        <a href="{{documentation.url}}">
          {{documentation.title}}
        </a>
      </div>
    </div>
    {% endfor %}
  </div>
</section>
