---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

titleTemplate: false

hero:
  name: "Schooltape"
  text: "A free and open source extension for Schoolbox!"
  tagline: "Improving the Schoolbox experience for everyone"
  image: /schooltape.svg
  actions:
    - theme: brand
      text: Install now!
      link: /installation
    - theme: alt
      text: Contributing
      link: /contributing

features:
  - icon: 🔎
    title: Schoolbox Detection
    details: Automatic detection of any Schoolbox instance!
  - icon: 🎨
    title: Theme Customisation
    details: Save your eyes from the harsh white of Schoolbox.
  - icon: 🔌
    title: Plugin Support
    details: Built with a plugin system in mind, allowing for easy extensibility.
    link: /ecosystem/plugins
    linkText: Explore Plugins
  - icon: 🖌️
    title: Snippet Ecosystem
    details: Schooltape has a growing ecosystem of snippets, allowing for easy CSS modifications.
    link: /ecosystem/snippets
    linkText: Explore Snippets
---

## Schooltape is <span style="color: var(--vp-c-brand-3)">_the only_</span> cross compatible web extension for Schoolbox

Schooltape was built with the intention of improving the Schoolbox experience for everyone, regardless of their Schoolbox instance. Read more about how we compare [here](/compare).

![Schooltape preview](https://raw.githubusercontent.com/schooltape/schooltape/main/assets/previews/preview.webp)

<!-- <div style="margin: auto; width: 100%; max-width: 900px; text-align: center;">
  <video style="border-radius: 12px;" src="todo" controls></video>
  <br />
  <small>
    A quick demonstration of Schooltape in action
  </small>
</div> -->

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, var(--vp-c-brand-1) 30%, var(--vp-c-brand-3));

  --vp-home-hero-image-background-image: linear-gradient(-45deg, var(--vp-c-brand-1) 50%, var(--vp-c-brand-3) 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
