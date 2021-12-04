const esbuild = require('esbuild');

esbuild
    .build({
        entryPoints: ['src/index.ts'],
        outfile: 'dist/index.cjs',
        bundle: true,
        sourcemap: true,
        minify: true,
        platform: 'node',
        target: ['node10.4'],
    })
    .catch(() => process.exit(1));