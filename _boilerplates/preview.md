---
_boilerplate:
  path: '_previews'
  timestamp: false
  title: title
  slug: "{{ vol }}-{{ cht }}-{{ title }}"
  vol: '01'

title: {{ boilerplate.title }}
created: {{ boilerplate.time }}
chapter: {{ boilerplate.cht }}
volume: {{ boilerplate.vol }}

share_link: https://example.com/chapters/{{ boilerplate.random_url }}#reader
preview_id: {{ boilerplate.random_url }}
permalink: /chapters/{{ boilerplate.random_url }}
---

### Chapter {{ boilerplate.cht }}

# {{ boilerplate.title }}




