---
# boilerplate chapter cht=00 -T 'Title'
_boilerplate:
  path: '_chapters'
  timestamp: false
  title: title
  slug: "{{ vol }}-{{ cht }}-{{ title }}.md"
  vol: '01'

title: {{ boilerplate.title }}
created: {{ boilerplate.time }}
# permalink: /chapters/{{ boilerplate.random_url }}.html
permalink: /chapters/{{ boilerplate.cht }}
layout: chapter
chapter: {{ boilerplate.cht }}
volume: {{ boilerplate.vol }}
---



### Chapter {{ page.chapter }}

# {{ page.title }}


