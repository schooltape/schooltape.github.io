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

Under your plugin storage item in `src/utils/storage.ts` there is a 5th optional parameter of the `createPlugin` which expects an Object with settings components.

At the time of writing, the following components are available for configuration:

- slider: a range slider (between a given minimum and maximum)
- toggle: a boolean toggle

It's easier to include an example, so here's an example for the plugin `scrollPeriod` that has one `toggle` and one `slider`:

```ts
scrollPeriod: createPlugin("scrollPeriod", "Scroll Period", "Scrolls to the current period on the timetable.", true, {
  toggle: {
    resetCooldownOnMouseMove: {
      toggle: new StorageState(
        storage.defineItem<Types.ToggleSetting>("local:plugin-scrollPeriod-resetCooldownOnMouseMove", {
          fallback: {
            toggle: true,
          },
        }),
      ),
      info: {
        name: "Reset on mouse move",
        description: "Whether to reset the scrolling cooldown when you move your mouse.",
      },
    },
  },
  slider: {
    cooldownDuration: {
      slider: new StorageState(
        storage.defineItem<Types.SliderSetting>("local:plugin-scrollPeriod-cooldownDuration", {
          fallback: {
            min: 1,
            max: 60,
            value: 10,
          },
        }),
      ),
      info: {
        name: "Cooldown duration (s)",
        description: "How long to wait before scrolling.",
      },
    },
  },
}),
```

At the moment, the way of accessing the values of these settings is a bit convoluted, I plan on making this neater in the future but for now refer to the following example:

```ts
// the value of the cooldownDuration slider
const cooldownDuration = await data.settings?.slider?.cooldownDuration?.slider?.storage?.getValue();

// the value of the resetCooldownOnMouseMove slider
const resetCooldownOnMouseMove = await data.settings?.toggle?.resetCooldownOnMouseMove?.toggle?.storage?.getValue();
```

### Code!

Now that you have finished setting up the plugin storage, you can start working on the logic. This is located in `src/entrypoints/plugins/<nameCamelCase>.ts` or `src/entrypoints/plugins/<nameCamelCase>/index.ts`, depending on which one you chose.

You can put your code inside the arrow function, which will run whenever a Schoolbox page is loaded. For a simple example you can look at `src/entrypoints/plugins/tabTitle.ts`.

> [!NOTE]
> You can access the plugin ID (`<nameCamelCase>`) and plugin data through the arguments of the arrow function.
>
> - `id`: `<nameCamelCase>`
> - `data`: plugins[`<nameCamelCase>`]
>
> ```ts
> export default function init() {
>   defineStPlugin(
>     "<nameCamelCase>",
>     () => { // [!code --]
>     (id, data) => { // [!code ++]
>       // ...
>    }
>  )
> ```
