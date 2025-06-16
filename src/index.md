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
    link: /compare
    linkText: How we compare
  - icon: 🎨
    title: Theme Customisation
    details: A selection of the 4 flavours and 14 accents of Catppuccin.
    link: https://catppuccin.com
    linkText: Explore Catppuccin
  - icon: 🔌
    title: Plugin Ecosystem
    details: A variety of plugins that add extra functionality to Schoolbox.
    link: /ecosystem/plugins
    linkText: Explore plugins
  - icon: 🖌️
    title: Snippet Ecosystem
    details: Use pre-made snippets or create your own!
    link: /ecosystem/snippets
    linkText: Explore snippets
---

## Schooltape is <span style="color: var(--vp-c-brand-3)">_the only_</span> cross compatible web extension for Schoolbox

Schooltape works on any Schoolbox out of the box, with no need to reach out to get your school supported. Read more about how we compare [here](/compare)!

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
