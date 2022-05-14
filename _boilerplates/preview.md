---
_boilerplate:
  path: '_previews'
  timestamp: false
  title: title
  slug: "{{ vol }}-{{ cht }}-{{ title }}"
  vol: '01'

# http://localhost:4000/chapters/{{ boilerplate.random_url }}#reader
# https://example.com/chapters/{{ boilerplate.random_url }}#reader
title: {{ boilerplate.title }}
created: {{ boilerplate.time }}
permalink: /chapters/{{ boilerplate.random_url }}
# permalink: /chapters/{{ boilerplate.slug }}
layout: chapter
chapter: {{ boilerplate.cht }}
volume: {{ boilerplate.vol }}
---

### Chapter {{ boilerplate.cht }}

# {{ boilerplate.title }}




