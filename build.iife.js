const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/index.tsx'],
    outfile: 'dist/index.iife.js',
    bundle: true,
    sourcemap: true,
    minify: true,
    target: ['esnext'],
    external: ['react', 'react-dom']
  })
  .catch(() => process.exit(1));