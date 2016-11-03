# kd-angular2-components

This project will show how to create un-bundled components for usage in other projects.

## What we are going to do:

**NOTHING LEFT**

## What is finished:

1. Setup tsconfig.json and package.json
    * Add config files 
    * Move dependencies to devDependencies
2. Create component to use in other projects
3. Create entry point
    * Create index files to barrel all components
    * Only one main file should be exporting public interfaces
4. Compile component
    ```
    tsc
    ```
5. *Publish component*
    * For the presentation it is enough to push the results to github
    * Standard publish to npm (User required, package.json has to well configured):
    ```
    npm publish
    ```
