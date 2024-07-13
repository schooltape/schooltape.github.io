# Contributing

First off, thanks for taking the time to contribute :tada:!

[[toc]]

## Setup

Before you do anything, you need to setup a development environment.
If you haven't used Git before, I'd highly recommend reading [Pro Git](https://git-scm.com/book/en/v2) (it's 100% free and open source)

1. Fork this repository

   - [What is a fork?](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
   - [Fork Schooltape](https://github.com/schooltape/schooltape/fork)

2. Clone your fork

   - Make sure you have [Git](https://git-scm.com/) installed
   - [What is cloning?](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
   - Clone Schooltape

   ```bash
   cd /path/to/your/working/directory
   git clone https://github.com/your_username/schooltape # [!code focus]
   cd schooltape
   ```

3. Install [Bun](https://bun.sh/)

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

4. Install dependencies

   ```bash
   bun install
   ```

5. Build the extension

   ::: code-group

   ```bash [Chrome]
   bun dev
   ```

   ```bash [Firefox]
   bun dev:firefox
   ```

   :::

## Develop

1. [Open an issue](https://github.com/schooltape/schooltape/issues/new?assignees=42willow&labels=enhancement&projects=&template=feature_request.yml) describing your change to get your idea approved

2. Please read the specific guides on how to contribute your own:
   - [Plugins](./plugins.md)
   - [Themes](./themes.md)
   - [Snippets](./snippets.md)

3. Then, how you can submit a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to get your changes implemented!

## Pull Request

To merge your changes into this repository you can create a pull request (PR).

Here is a handy guide on [what a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) is and [how to make one](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

## Contributing Guidelines

Finally, and importantly, please ensure to follow the styling and contributing guidelines outlined [here](https://github.com/schooltape/schooltape/blob/main/CONTRIBUTING.md).
