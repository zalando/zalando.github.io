---
layout: default
title: Docs
description: Zalando's Open Source Documentations
permalink: /docs
banner:
  image: laptop.jpg
---
<section class="dc--text-center page-section page-section--padding" id="os-articles">
  <div class="dc-container dc-container--limited">
  <h1 class="dc-h1 page-section__header">Documentation</h1>
    {% for entry in site.docs %}
    <div class="dc-row blog">
      <div class="dc-h2">
        <a href="{{entry.url}}">
          {{entry.title}}
        </a>
      </div>
    </div>
    {% endfor %}
  </div>
</section>
