/* imports */
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

/* build config */
export default {
    input: "src/index.js",
    output: [
        { file: "dist/jolt.esm.js", format: "esm" },
        { file: "dist/jolt.cjs.js", format: "cjs" },
        { file: "dist/jolt.umd.js", format: "umd", name: "Jolt" }
    ],
    plugins: [
        babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
            presets: [
                [
                    "@babel/preset-env",
                    {
                        "targets": "> 1.5%, not dead"
                    }
                ]
            ],
            plugins: ["@babel/plugin-proposal-class-properties"]
        }),
        terser({
            output: {
                preamble: "/* Copyright (c) 2020 Outwalk Studios */"
            }
        })
    ]
}