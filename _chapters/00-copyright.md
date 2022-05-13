---
title: Copyright
created: 2022-05-12 11:26:46 -0600
# permalink: /chapters/00
layout: chapter
chapter: 00.2
hide_num: true
volume: 01
---


# {{ page.title }}


{% assign copyright = site.pages | find: 'path', 'COPYRIGHT.md' %}

{{ copyright.content | markdownify }}


