---
outline: deep
---

# Installation

## From web stores

The extension is available on the Chrome Web Store and the Firefox Add-ons extension store. Click on your browser's badge below to install.

<div style="display: flex; justify-content: center; gap: 1rem;">
  <a href="https://addons.mozilla.org/en-US/firefox/addon/schooltape/"><img alt="Firefox Add-ons" src="https://img.shields.io/badge/Firefox_Add--ons-f5a97f?style=for-the-badge&logo=Firefox-Browser&logoColor=24273a"></a>
  <a href="https://chromewebstore.google.com/detail/schooltape/denkadefchjkchlefgfhdmabagdcefhf"><img alt="Chrome Web Store" src="https://img.shields.io/badge/Chrome_Web_Store-b7bdf8?style=for-the-badge&logo=GoogleChrome&logoColor=24273a"></a>
</div>

::: info
Schooltape is currently unavailable in the following web stores:

- Edge Add-ons
- Opera Add-ons
- Safari Extensions
:::

## From GitHub releases

Please follow the instructions for your browser:

- [Chrome](chrome.md)
- [Firefox](firefox.md)
- [Edge](edge.md)
- [Other](chrome.md)

## From source

::: warning
Installing from source is not recommended for most users.
:::

1. Clone the repository:

   ```sh
   cd path/to/where/you/want/schooltape/to/be
   git clone https://github.com/schooltape/schooltape.git # [!code focus]
   cd schooltape
   ```

2. Install [Bun](https://bun.sh/)

   ::: code-group

   ```bash [Linux]
   curl -fsSL https://bun.sh/install | bash
   ```

   ```bash [MacOS]
   curl -fsSL https://bun.sh/install | bash
   ```

   ```powershell [Windows]
   powershell -c "irm bun.sh/install.ps1 | iex"
   ```

   :::

3. Install dependencies

   ```bash
   bun install
   ```

4. Build the extension

   ::: code-group

   ```bash [Chrome]
   bun build
   ```

   ```bash [Firefox]
   bun build:firefox
   ```

   :::

5. Load the extension:

   - For Chrome / Chromium-based:

     1. Open `chrome://extensions/`.
     2. Enable Developer mode.
     3. Click on `Load unpacked`.
     4. Select the `dist` directory in the `schooltape` directory.

   - For Firefox:
     1. Open `about:debugging#/runtime/this-firefox`.
     2. Click on `Load Temporary Add-on`.
     3. Select the `manifest.json` file in the `dist` directory in the `schooltape` directory.

::: tip
You can also use `bun dev` or `bun dev:firefox` to build the extension in development mode, which will automatically reload the extension when you make changes. More information can be found in the [contributing guide](/contributing/index.md).
:::

::: warning
Loading a temporary add-on in Firefox will remove the extension when you close the browser.
:::
