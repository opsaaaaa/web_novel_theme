---
title: Web Novel Theme for Jekyll
permalink: /
layout: page
start_chapter: 1
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet suspendisse interdum. Ut porttitor leo a diam sollicitudin tempor id eu nisl.  
{: .big-text}


{% assign cht1 = site.chapters | find: 'chapter', page.start_chapter %}
[Read Now]({{ cht1.url | relative_url}}#reader){: .mega-link}



ToDo. Find a way to put a cover image here