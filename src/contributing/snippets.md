# Snippets

> [!info]
> If you are creating a highly specific snippet that only benefits a small group of users (e.g. for your school), consider making it a user snippet instead. Please see the [user snippets documentation](/ecosystem/snippets#user-snippets) for more information.

First, you will need the following:

| Field           | Type     | Description                                   | Example                                                 |
| --------------- | -------- | --------------------------------------------- | ------------------------------------------------------- |
| `name`          | `string` | The name of your snippet in Title Case        | `Scroll Segments`                                       |
| `nameCamelCase` | `string` | The name of your snippet in camelCase         | `scrollSegments`                                        |
| `description`   | `string` | A brief description of what your snippet does | `Segments the Schoolbox page into scrollable segments.` |

Throughout this guide, you will see these between `<angle brackets>`. Replace them with the appropriate values.

## Creating a Snippet

### Boilerplate

1. Append your snippet to the `snippetConfig` record in `src/utils/storage/snippets.ts`
   ```ts
   export const snippetConfig: Record<string, Types.snippetConfig> = {
     // ...
     <nameCamelCase>: {
       name: "<name>",
       description: "<description>",
       default: true, // whether your snippet should be enabled by default
     },
     // ...
   }
   ```

2. Create your snippet function in `src/entrypoints/snippets`
   - If you are planning to include assets alongside your CSS:
     1. Create a new directory in `src/entrypoints/snippets` called `<nameCamelCase>`
     1. Inside this folder, you can create a `index.css` file for your styles, and any other files you need (e.g. `icon.png`)
   - If you do not need to include any assets:
     1. Create a new file in `src/entrypoints/snippets` called `<nameCamelCase>.css`

3. Import your snippet in `src/entrypoints/snippets.content.ts`
   ```ts
   // ...
   import <nameCamelCase> from "./snippets/<nameCamelCase>.css?inline"; // [!code ++]

   export default defineContentScript({
     matches: ["<all_urls>"],
     runAt: "document_start",
     excludeMatches: EXCLUDE_MATCHES,
     async main() {
       // ...
       defineSnippet("<nameCamelCase>", <nameCamelCase>); // [!code ++]
     },
   });
   ```

### Code!

Now you can simply modify the CSS file you created with your desired styles. Please see the [themes documentation](./themes) for details of how to use the theme variables in your snippet.

For example:

```css
/* e.g. change all headings to accent colour */
h1 {
  color: hsl(var(--ctp-accent)) !important;
}
```
