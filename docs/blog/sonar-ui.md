# Schoolbox "Sonar UI" updates

> [!info] Versions
>
> - Schooltape `>=4.5.4`
> - Schoolbox `>=26.0.0`

> [!info]
> This update (`v4.5.4`) accidentally broke styles for schools with sonar UI disabled, a release has been published (`v4.5.5`) and may take a few hours to roll out via extension web stores - sorry!
> Please see [issue #393](https://github.com/schooltape/schooltape/issues/393) for the latest information.

**tl;dr** "Sonar UI" is now disabled when themes are enabled, and broken functionality of the extension has been fixed.

This update rolls back Schoolbox's "Sonar UI" when themes are enabled. Unfortunately this doesn't work for when themes are disabled due to [technical limitations](#technical-info). I meant to get to this around three weeks ago when they published the changes on their documentation site, but have been busy, sorry about that!
If you find any issues, please report them on the [GitHub issue tracker](https://github.com/schooltape/schooltape/issues/new?template=bug.yml) or on the Discord server ([invite](https://discord.gg/rZxtGJ98BE)) - I wouldn't be surprised as I rushed this in an evening.

This is my first and last blog post for Schooltape so you don't need to worry about opting out of these for every update, I just thought it was informative because of the major changes.

## change log

- themes
  - disable "Sonar UI" while themes are enabled
- plugins
  - fix "Progress Bar" not appearing with themes disabled
  - fix "Modern Icons" not working

## immediate future plans

Over the next coming days and weeks I hope to:

- themes
  - add a slider to adjust "Sonar UI" corner rounding
  - add a slider to disable "Sonar UI" margins
  - optionally use "Sonar UI" for themeing (phasing out the legacy theme)
- snippets
  - retire "Rounded Corners" snippet in favour of the "Sonar UI" slider
  - "Fix Sonar UI" snippet that fixes missing styling such as sharp corners
  - replace "User Snippets" with "Quick CSS"

These will likely be the last updates I will make to Schooltape.

## looking for a maintainer

I'm finishing school this year, if you're interested in picking up maintainership, please contact me via the discord or directly via [email](mailto:42willow@pm.me)
Experience in HTML, CSS, and JS required - Typescript and Svelte is preferred.

## bonus technical info {#technical-info}

The "Sonar UI" update may look bad, but Schoolbox made some very nice changes to the CSS styling, consolidating most of it into a set of CSS variables rather than the mess that was before.

Changes made to Schooltape can be seen on [this branch](https://github.com/schooltape/schooltape/tree/sb-26.1).

At the moment Schooltape rolls back by disabling the `sbx-core.css` and `skin.css.php` stylesheets. This works because most of the old variables are fallbacks, so if the new ones are missing it reverts to them.

Unfortunately `skin.css.php` no longer contains the legacy CSS variables, meaning there are a plethora of issues if you simply delete these without manually specifying them. It may be possible to derive the old CSS variables from the new ones, but I'm not going to invest time into that if the old CSS variables may be phased out completely in future updates.

"Sonar UI" will no longer be under an optional toggle for school IT admins following the v26.2 release in the coming weeks. ([source](https://help.schoolbox.com.au/homepage/5808#:~:text=Sonar%20UI%20is%20now%20available%20to%20review%20and%20test%20before%20it%20becomes%20the%20only%20option%20in%20v26.2.)). Hopefully this doesn't mean this upcoming release will remove all the old fallbacks, as that would mean the current method of rolling back to the old styles would no longer work.

## bonus history

It's been over 3 years since the [v1 release](https://github.com/schooltape/schooltape/releases/tag/v1.0.0) of Schooltape. It has been an important learning experience, and I have enjoyed making something that helps a few people \:)

There's still a bunch of improvements that could be implemented in Schooltape, but weren't due to lack of time/motivation and technical complexity. I plan to release the Quick CSS editor as a small replacement to "User Snippets" for making small local CSS changes, this obviously doesn't aim to be a full blown userstyles manager like Stylus. Other than that there were also plans to have a "Quick Switcher" - a plugin that opens a popup to quickly fuzzy search and navigate between homepages, but I ran into trouble mounting the Svelte component due to the way plugins are currently dynamically imported (it destroyed the build time unfortunately). There was also an account system that would allow for user creation and distribution of CSS snippets on a per-school basis using hashes of the domain, but this was scrapped due to complexity and privacy concerns. I also made a small wrapper / scraping library called [serrator](https://github.com/schooltape/serrator) (like a tape dispenser yk) which could be used as a library for building a [desktop app](https://github.com/schooltape/washi) - or a Schoolbox plugin, for example custom components to replace the current ones. It would also be nice to support additional colour scheme.

Take care of yourselves. Bye 👋
