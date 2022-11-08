- `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`
    - `create-react-app` docs give [directions to upgrade](https://create-react-app.dev/docs/adding-typescript/#installation)
- Add TypeScript config at the root level: `tsconfig.json`. or add it using the command `npx tsc --init`

- Now we're ready to implement TypeScript in our code.
    - Important to note that just bc you installed TS, it doesn't mean that you have to convert everything at once.
    - Change the file from .js to .tsx
- We'll start with `Affirmation.js`
    - we should install package to help with TypeScript. Intellisense?
    - Add notes


There's a lot of red squiggles at the bottom after the return. If you hover, you should see the following message:

> (property) React.
> HTMLAttributes<HTMLDivElement>. 
> className?: string | undefined
> Cannot use JSX unless the '--jsx' 
> flag is provided.ts(17004)

    line three in tsconfig.json

- hover over the 'e' in handleSubmit -> see what it says.

- We still have the red on line 9, what happens if we add `React.FormEvent<HTMLInputElement>`? Where does the red move to now? What does that tell us?

- using : React.ChangeEventHandler<HTMLTextAreaElement> "enforces a type of the delegate provided by @types/react" -> https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/