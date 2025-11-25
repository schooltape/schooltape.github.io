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
