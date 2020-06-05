import typescript from 'rollup-plugin-typescript2';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';
import copy from 'rollup-plugin-copy';
import resolve from 'rollup-plugin-node-resolve';


export default [
    {
        input: './src/index.ts',
        output: [
            { file: './dist/uri-parse-lib.web.js', format: "iife", name: 'UriParseLib', },
            { file: './dist/' + pkg.es2015, format: 'es' },
            {
                file: "./dist/uri-parse-lib.umd.js",
                format: 'umd',
                name: 'UriParseLib',
            },
            { file: './dist/' + pkg.module, format: 'es' }
        ],
        plugins: [
            typescript(),
            terser(),
            resolve(),
            copy({
                targets: [
                    {
                        src: ["./package.json", "./README.md", './LICENSE'],
                        dest: "./dist",
                    },
                ],
            })
        ],
    }
]
