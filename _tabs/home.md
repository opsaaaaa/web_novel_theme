---
title: Home
permalink: /
layout: home
order: 0
---

# {{ site.novel.title }}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet suspendisse interdum. Ut porttitor leo a diam sollicitudin tempor id eu nisl.  
{: .big-text}


{% assign cht1 = site.chapters | find: 'chapter', page.start_chapter %}
[Read Now]({{ cht1.url | relative_url}}#reader){: .mega-link}