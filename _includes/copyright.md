
{% assign copyright = site.novel.copyright.short %}
{% assign warning = site.novel.copyright.warning %}

<small class="copyright" id="copyright">
    {{ copyright | markdownify }}
</small>

{% if warning %}
<small class="legal-warning" id="legal-warning">    
    {{ warning | markdownify }}
</small>
{% endif %}

