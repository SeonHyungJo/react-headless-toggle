const esbuild = require('esbuild');

esbuild
    .build({
        entryPoints: ['src/index.ts'],
        outfile: 'dist/index.iife.js',
        bundle: true,
        sourcemap: true,
        minify: true,
        target: ['esnext']
    })
    .catch(() => process.exit(1));