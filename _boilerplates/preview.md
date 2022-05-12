---
_boilerplate:
  path: '_preview'
  timestamp: false
  title: title
  slug: "{{ cht }}-{{ title }}.md"
  vol: 01

title: {{ boilerplate.title }}
created: {{ boilerplate.time }}
permalink: /chapters/{{ boilerplate.random_url }}.html
# permalink: /chapters/{{ boilerplate.cht }}
layout: chapter
chapter: {{ boilerplate.cht }}
volume: {{ boilerplate.vol }}
public: false
---

### Chapter {{ page.chapter }}

# {{ page.title }}

