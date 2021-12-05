const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/index.tsx'],
    outdir: 'dist',
    bundle: true,
    sourcemap: true,
    minify: true,
    splitting: true,
    format: 'esm',
    target: ['es2015'],
    external: ['react', 'react-dom']
  })
  .catch(() => process.exit(1));