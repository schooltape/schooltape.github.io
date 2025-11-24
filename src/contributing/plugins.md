# Plugins

> [!important]
> For CSS only modifications, see [snippets](snippets.md)

First, you will need the following:

| Field | Type | Description | Example |
| - | - | - | - |
| `name` | `string` | The name of your plugin in Title Case | `Scroll Segments` |
| `nameCamelCase` | `string` | The name of your plugin in camelCase | `scrollSegments` |
| `description` | `string` | A brief description of what your plugin does | `Segments the Schoolbox page into scrollable segments.` |
| `targets` (optional) | `string[]` | An array of CSS selectors to wait for to load before injecting the plugin | `["#content", "#footer"]` |

Throughout this guide, you will see these between `<angle brackets>`. Replace them with the appropriate values.

## Creating a Plugin

### Boilerplate

1. Append your plugin to the `pluginConfig` record in `src/utils/storage/plugins.ts`

```ts
export const pluginConfig: Record<Types.PluginId, Types.PluginConfig> = {
  // ...
  <nameCamelCase>: {
    name: "<name>",
    description: "<description>",
    default: true, // whether your plugin should be enabled by default
  },
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
     1. Inside this folder, you can create a `index.ts` file for your TypeScript, and any other files you need (e.g. `styles.css`)
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

In `src/utils/storage/plugins.ts` there is an optional settings field which can be used to define configurable settings components:

- **slider**: select a numerical value between a minimum and maximum
  ```ts
  type Slider = {
    value: number;
    min: number;
    max: number;
  };
  ```
- **toggle**: select a boolean value
  ```ts
  type Toggle = {
    toggle: boolean;
  }
  ```

> [!note]
> This list will be updated as new configurable options are introduced. If you require assistance or would like an input to be added, please open a GitHub issue or contact me.

Say we are developing a command palette plugin, and want to add a slider for the number of results shown in the popup. We can add the following code to our plugin definition:

```ts
export const pluginConfig: Record<Types.PluginId, Types.PluginConfig> = {
  // ...
  <nameCamelCase>: {
    name: "<name>",
    description: "<description>",
    default: true,
    settings: { // [!code ++]
      maxResults: { // [!code ++]
        type: "slider", // [!code ++]
        name: "Max Results",  // [!code ++]
        description: "How many search results are shown per query.", // [!code ++]
        default: { min: 1, max: 60, value: 10 }, // [!code ++]
      }, // [!code ++]
    }, // [!code ++]
  },
  // ...
}
```

### Code!

Now that you have finished setting up the plugin storage, you can start working on the logic. This is located in `src/entrypoints/plugins/<nameCamelCase>.ts` or `src/entrypoints/plugins/<nameCamelCase>/index.ts`, depending on which one you chose.

You can put your code inside the arrow function, which will run whenever a Schoolbox page is loaded. For a simple example you can look at `src/entrypoints/plugins/tabTitle.ts`.

To access the value of storage items you can simply add the settings parameter to the arrow function.

```ts
export default function init() {
  defineStPlugin(
    "<nameCamelCase>",
    () => { // [!code --]
    (settings) => { // [!code ++]
      // your logic here ... // [!code ++]

      // e.g. log the value of the maxResults setting // [!code ++]
      logger.info(settings?.slider.maxResults); // [!code ++]

      // e.g. change all headings to accent colour // [!code ++]
      document.querySelectorAll("h1").forEach((el) => el.style.color = "hsl(var(--ctp-accent))"); // [!code ++]
    }
  )
}
```
