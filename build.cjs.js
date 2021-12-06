const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/index.tsx'],
    outfile: 'dist/index.cjs',
    bundle: true,
    sourcemap: true,
    minify: true,
    platform: 'node',
    target: ['node10.4'],
    external: ['react', 'react-dom']
  })
  .catch(() => process.exit(1));