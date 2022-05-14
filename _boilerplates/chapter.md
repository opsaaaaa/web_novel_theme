---
_boilerplate:
  path: '_chapters'
  timestamp: false
  title: title
  slug: "{{ vol }}-{{ cht }}-{{ title }}"
  vol: '01'

title: {{ boilerplate.title }}
created: {{ boilerplate.time }}
# permalink: /chapters/{{ boilerplate.random_url }}
permalink: /chapters/{{ boilerplate.slug }}
layout: chapter
chapter: {{ boilerplate.cht }}
volume: {{ boilerplate.vol }}
---



### Chapter {{ boilerplate.cht }}

# {{ boilerplate.title }}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.


