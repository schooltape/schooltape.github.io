# Plugins

> [!important]
> For CSS only modifications, see [snippets](snippets.md)

First, you will need these things:

- `name`: The name of your plugin (e.g. `My New Plugin`)
- `nameCamelCase`: The name of your plugin in camelCase (e.g. `myNewPlugin`)
- `description`: A brief description of what your plugin does, without a period at the end (e.g. `Adds a new button to the top bar`)
- `targets` (optional): An array of CSS selectors which Schooltape will wait for to load into the DOM before injecting the plugin (e.g. `[".timetable"]`)

Throughout this guide, you will see these between `<angle brackets>`. Replace them with the appropriate values.

## Creating a Plugin

### Boilerplate

1. Append your plugin to the `plugins` record in `src/utils/storage.ts`

```ts
export const plugins: Record<Types.PluginId, Types.PluginData> = {
  // ...
  <nameCamelCase>: createPlugin(
    "<nameCamelCase>",
    "<name>", // the Title Case name of your plugin
    "<description>", // a short description of what your plugin does, please use punctuation and end with a full stop
    true, // whether your plugin should be enabled by defualt
  ),
  // ...
}
```

You can also have settings for your plugin, this will be covered in the [settings](#plugin-settings) section.

2. Import your plugin in `src/entrypoints/plugins.content.ts`

```ts
// ...
import <nameCamelCase> from "./plugins/<nameCamelCase>"; // [!code ++]

export default defineContentScript({
  matches: ["<all_urls>"],
  runAt: "document_start",
  excludeMatches: EXCLUDE_MATCHES,
  async main() {
    // ...
    <nameCamelCase>(); // [!code ++]
  },
});
```

3. Create your plugin function in `src/entrypoints/plugins` with the name of your plugin in camelCase
   - If you are planning to include CSS, HTML, or Svelte alongside your TypeScript:
     1. Create a new directory in `src/entrypoints/plugins` called `<nameCamelCase>`
     2. Inside this folder, you can create a `index.ts` file for your TypeScript, and any other files you need (e.g. `styles.css`)
   - If you are only planning to include TypeScript:
     1. Create a new file in `src/entrypoints/plugins` called `<nameCamelCase>.ts`

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

### Plugin Settings

> [!important]
> This section of the documentation is under construction, please check back later :)

<!--Under your plugin storage item in `src/utils/storage.ts`-->
