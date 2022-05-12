---
# boilerplate volume vol=00 -T 'Title'
_boilerplate:
  path: '_volumes'
  timestamp: false
  title: title
  slug: "{{ vol }}-{{ title }}.md"

title: {{ boilerplate.title }}
created: {{ boilerplate.time }}
layout: volume
volume: {{ boilerplate.vol }}
public: false
---

### Chapter {{ page.chapter }}

# {{ page.title }}


