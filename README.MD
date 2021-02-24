# Transpiler Typescript

> Transpiler Typescript using Webpack 5

As a SPA Developer, I want to use TypeScript, so that I can take advantage of strongly typed Javascript

## Before and After

Before and after for Transpiler Typescript using Webpack 5

<table>
<tr>
  <th>Before</th>
  <th>After</th>
</tr>
<tr>
  <td>
  
  ![Before](shot-before.png 'Before screenshot')

  Run It

  ![Run](shot-run.png 'Run screenshot')
    
  </td>
  
  <td>
  
  ![After](shot-after.png 'After screenshot')
  
  </td>
</tr>
</table>
 
## Development


Work through the following commands

```bash
# cd [YouCustomDevFolder]
git clone git@github.com:klueless-html-samples/TranspilerTypescript.git && cd TranspilerTypescript

# Run transpiler directly or via webpack
# if you use the transpiler directly, the code will be quite readable
# if you run via webpack, it is currently compressed and minified (hard to read)

# Run the transpiler directly (best option for test/debugging)
npm run transpile
# or command line call
npx tsc src/index.ts --outfile dist/index.js
# or 
# Run the transpiler via webpack (best option for development)
npm run build

# Play around with the queries inside browserlists to see different transpile outputs
edit .browserslistrc

# Run the transpiler

# Run via package
npm run execute
# or via command line call
node dist/index.js

# Run the code
node dist/index.js
```

## License

The code is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Copyright

Copyright (c) David Cruwys. See [MIT License](LICENSE.txt) for further details.
