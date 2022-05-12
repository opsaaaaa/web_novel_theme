---
_boilerplate:
  path: '_preview'
  timestamp: false
  title: title
  slug: "{{ num }}-{{ title }}.md"

title: {{ boilerplate.title }}
created: {{ boilerplate.time }}
permalink: /chapters/{{ boilerplate.random_url }}.html
# permalink: /chapters/{{ boilerplate.num }}
layout: chapter
chapter: {{ boilerplate.num }}
volume: 1
public: false
nav_exclude: false
nav_order: 0
---

### Chapter {{ page.chapter }}

# {{ page.title }}


