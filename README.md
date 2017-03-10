To test:
```
npm run webpack-dev-server
echo "console.log('banana')" > entry1.ts
```

expected output:
```
webpack: Compiling...
LOADING:  /Users/toby/append/entry1.ts [ '/Users/toby/append/entry1.ts',
  '/Users/toby/append/module.d.ts',
  '/Users/toby/append/node_modules/typescript/lib/lib.d.ts' ]
Hash: 9ba5ebc9763df0e0b710
Version: webpack 2.2.1
Time: 243ms```

actual output:
```
webpack: Compiling...
LOADING:  /Users/toby/append/entry2.ts [ '/Users/toby/append/entry2.ts',
  '/Users/toby/append/module.d.ts',
  '/Users/toby/append/node_modules/typescript/lib/lib.d.ts',
  '/Users/toby/append/component.vue.ts' ]
LOADING:  /Users/toby/append/component.vue [ '/Users/toby/append/component.vue.ts',
  '/Users/toby/append/module.d.ts',
  '/Users/toby/append/node_modules/typescript/lib/lib.d.ts' ]
LOADING:  /Users/toby/append/entry1.ts [ '/Users/toby/append/entry1.ts',
  '/Users/toby/append/module.d.ts',
  '/Users/toby/append/node_modules/typescript/lib/lib.d.ts' ]
Hash: 3f65d5e094f4464b9b3e
Version: webpack 2.2.1
Time: 374ms
```
