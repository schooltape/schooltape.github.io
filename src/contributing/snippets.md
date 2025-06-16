# Snippets

> [!warning] OUTDATED
> The information on the following page is **outdated** for the upcoming `v4.0.0` release of Schooltape.

## Public Snippets

1. Append your snippet to the bottom of `SNIPPET_INFO` in `src/utils/constants.ts`
   ```ts
   export const SNIPPET_INFO: Record<string, SnippetInfo> = {
     hidePfp: {
       name: "Hide PFP",
       description: "Hide your profile picture across Schoolbox.",
       order: 0,
     },
     // ..
     <yourSnippetName>: { // [!code ++]
       name: "<Your Snippet Name>", // [!code ++]
       description: "<Your Snippet Description>", // [!code ++]
       order: "<Next Order Number>", // [!code ++]
     }, // [!code ++]
   };
   ```
2. Append your snippet to the bottom of `snippets` in `src/utils/storage.ts`
   ```ts
   export const snippetSettings = storage.defineItem<Types.SnippetSettings>("local:snippetSettings", {
     // ..
     defaultValue: {
       // ..
       snippets: {
         hidePfp: {
           toggle: true,
         },
         // ..
         <yourSnippetName>: { // [!code ++]
           toggle: false, // [!code ++]
         }, // [!code ++]
       },
     },
   });
   ```
3. Create a new file in `src/public/snippets` with the name `<yourSnippetName>.css`
4. Put in your CSS code and [test it](/contributing/#setup)!

## User Snippets

Snippets can also be added manually by the user. Create a snippet, following [this format](https://gist.github.com/42Willow/4555f0d8fdf8e59b479fd44539740937) and then share it with your friends! These snippets are able to be removed by the user after installation.

Make sure to include the `css` comments

- Do not use quotation marks
- Make sure it is spelt correctly
- Leave a trailing newline character

```css
/* name: Hide PFP */
/* description: Hide your profile picture across Schoolbox */
```

::: tip FAQ
**Q:** How do I install my user snippet?

**A:** Copy the gist URL into the input box (`Schooltape popup` > `Snippets` > `User Snippets` > `Gist URL`)
:::

You can find and share snippets in the [Schooltape Discord](https://discord.gg/rZxtGJ98BE)
