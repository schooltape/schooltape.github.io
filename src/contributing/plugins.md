# Plugins

> [!warning] OUTDATED
> The information on the following page is **outdated** for the upcoming `v4.0.0` release of Schooltape.

> [!important]
> For CSS only modifications, see [snippets](snippets.md)

First, you will need these things:

- `name`: The name of your plugin (e.g. `My New Plugin`)
- `nameCamelCase`: The name of your plugin in camelCase (e.g. `myNewPlugin`)
- `description`: A brief description of what your plugin does, without a period at the end (e.g. `Adds a new button to the top bar`)
- `targets` (optional): An array of CSS selectors which Schooltape will wait for to load into the DOM before injecting the plugin (e.g. `[".timetable"]`)

Throughout this guide, you will see these between `<angle brackets>`. Replace them with the appropriate values.

## Creating a Plugin

> [!info]
> For a real life example, see [this](https://github.com/schooltape/schooltape/commit/721f6b76adcb6d6265ee25e78dc59ef345efa29f) commit!

### Boilerplate

1. Append your plugin `nameCamelCase` to the union type `PluginId` in `src/utils/constants.ts`

```ts
export type PluginId =
  | "subheader"
  | "scrollSegments"
  // ...
  | "<nameCamelCase>"; // [!code ++]
```

2. Append your plugin information to the `PLUGIN_INFO` object in `src/utils/constants.ts`

<!-- prettier-ignore -->
```ts
export const PLUGIN_INFO: Record<Types.PluginId, Types.PluginInfo> = {
  subheader: {
    name: "Subheader Revamp",
    description: "Adds a clock and current period info to the subheader",
  },
  scrollSegments: {
    name: "Scroll Segments",
    description: "Segments the Schoolbox page into scrollable sections",
  },
  // ...
  <nameCamelCase>: { // [!code ++]
    name: "<name>", // [!code ++]
    description: "<description>", // [!code ++]
  }, // [!code ++]
};
```

3. Append your plugin settings to the `plugins` record in `src/utils/storage.ts`

<!-- prettier-ignore -->
```ts
export const plugins: Record<Types.PluginId, WxtStorageItem<Types.PluginGeneric, any>> = {
  subheader: storage.defineItem<Types.PluginGeneric>("local:plugin-subheader", {
    fallback: {
      toggle: true,
    },
  }),
  scrollSegments: storage.defineItem<Types.PluginGeneric>("local:plugin-scrollSegments", {
    fallback: {
      toggle: true,
    },
  }),
  // ...
  <nameCamelCase>: storage.defineItem<Types.PluginGeneric>("local:plugin-<nameCamelCase>", { // [!code ++]
    fallback: { // [!code ++]
      // here you can define the default settings for your plugin // [!code ++]
      toggle: true, // [!code ++]
    }, // [!code ++]
  }), // [!code ++]
};
```

4. Import your plugin in `src/entrypoints/plugins.content.ts`

```ts
// @ts-ignore
import subheader from "./plugins/subheader";
import scrollSegments from "./plugins/scrollSegments";
// ...
import <nameCamelCase> from "./plugins/<nameCamelCase>"; // [!code ++]

export default defineContentScript({
  matches: ["<all_urls>"],
  runAt: "document_start",
  excludeMatches: EXCLUDE_MATCHES,
  async main() {
    subheader();
    scrollSegments();
    // ...
    <nameCamelCase>(); // [!code ++]
  },
});
```

5. Create your plugin function in `src/entrypoints/plugins` with the name of your plugin in camelCase
   - If you are planning to include CSS, HTML, or Svelte alongside your TypeScript:
     1. Create a new folder in `src/entrypoints/plugins` with the name of your plugin in camelCase (e.g. `myNewPlugin`).
     2. Inside this folder, you can create a `index.ts` file for your TypeScript, and any other files you need (e.g. `styles.css`)
   - If you are only planning to include TypeScript:
     1. Create a new file in `src/entrypoints/plugins` with the name of your plugin in camelCase (e.g. `myNewPlugin.ts`)

Now, in your TypeScript file, copy the following boilerplate:

```ts
export default function init() { // [!code ++]
  defineStPlugin( // [!code ++]
    "<nameCamelCase>", // [!code ++]
    () => { // [!code ++]
      // Your code here // [!code ++]
    }, // [!code ++]
    [<targets>], // [!code ++]
  ); // [!code ++]
} // [!code ++]
```

### Code!

Now that you have dealt with all that boilerplate, you can start actually building your plugin!
