---
_boilerplate:
  path: '_previews'
  timestamp: false
  title: title
  slug: "{{ cht }}-{{ title }}.md"
  vol: '01'
  localhost: http://localhost:4000
  baseurl: https://example.com

# {{ boilerplate.localhost }}/chapters/{{ boilerplate.random_url }}.html#reader
# {{ boilerplate.baseurl }}/chapters/{{ boilerplate.random_url }}.html#reader
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


