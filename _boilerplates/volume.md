---
# boilerplate volume vol=00 -T 'Title'
_boilerplate:
  path: '_volumes'
  timestamp: false
  title: title
  slug: "{{ vol }}-{{ title }}"

title: {{ boilerplate.title }}
created: {{ boilerplate.time }}
volume: {{ boilerplate.vol }}
---


Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.


