---
layout: default
title: All Posts
description: Browse all blog posts from Backyard Critter Crawls
---

<section class="hero">
    <div class="hero-content">
        <h1>All Posts</h1>
        <p>Browse through all our blog posts of explorations of local nature and wildlife</p>
    </div>
</section>

{% if site.posts.size > 0 %}
<section class="posts-list">
    {% for post in site.posts %}
    <article class="card post-card">
        <div class="post-meta">
            {{ post.date | date: "%B %d, %Y" }}
            {% if post.categories %} • {{ post.categories | join: ", " }}{% endif %}
        </div>
        <h2 class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        <div class="post-excerpt">
            {% if post.excerpt %}
                {{ post.excerpt | strip_html | truncatewords: 30 }}
            {% else %}
                {{ post.content | strip_html | truncatewords: 30 }}
            {% endif %}
        </div>
        <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
    </article>
    {% endfor %}
</section>
{% else %}
<section class="card">
    <h2>No posts yet</h2>
    <p>Check back soon for our first blog post!</p>
</section>
{% endif %} 