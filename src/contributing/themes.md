# Themes

We use [Catppuccin](https://catppuccin.com) as our colour scheme, it includes
4 flavours and 14 accents.

> [!info] Adding a new theme
>
> Currently there are no plans to add any additional colour schemes to Schooltape.
> However, if you are interested in having a theme added please don't hesitate to open an issue or pull request on GitHub (see [contributing](/contributing)).

## Updating the theme

The theme file is located at [`src/entrypoints/catppuccin.css`](https://github.com/schooltape/schooltape/blob/main/src/entrypoints/catppuccin.css). The following CSS variables are exposed and will be updated depending on the flavour and accent:

- Background colours: `ctp-crust`, `ctp-mantle`, `ctp-base`, `ctp-surface0`, `ctp-surface1`, `ctp-surface2`, `ctp-overlay0`, `ctp-overlay1`, `ctp-overlay2`
- Typography: `ctp-text`, `ctp-subtext1`, `ctp-subtext0`
- Accent colours: `ctp-rosewater`, `ctp-flamingo`, `ctp-pink`, `ctp-mauve`, `ctp-red`, `ctp-maroon`, `ctp-peach`, `ctp-yellow`, `ctp-green`, `ctp-teal`, `ctp-sky`, `ctp-sapphire`, `ctp-blue`, `ctp-lavender`
- Current accent colour: `ctp-accent`

These variables are unwrapped HSL values, so therefore must be surrounded with `hsl()` or `hsla()`.

Example usage:

```css
h1 {
  color: hsl(var(--ctp-text));
}
```
