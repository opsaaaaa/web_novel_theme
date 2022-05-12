---
_boilerplate:
  path: '_chapters'
  timestamp: false
  title: title
  slug: "{{ num }}-{{ title }}.md"

title: {{ boilerplate.title }}
created: {{ boilerplate.time }}
permalink: /chapters/{{ boilerplate.random_url }}.html
layout: chapter
chapter: {{ boilerplate.num }}
public: false
nav_exclude: false
nav_order: 0
---

### Chapter {{ page.chapter }}

# {{ page.title }}


