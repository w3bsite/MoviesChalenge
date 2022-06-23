// FILE: vite.config.js
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import path from "path";
import Components from "unplugin-vue-components/vite";
import { QuasarResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import svgLoader from "vite-svg-loader";
import { presetIcons } from "unocss";
import presetWind from "@unocss/preset-wind";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "~": path.resolve(__dirname, "./src"),
        },
    },
    plugins: [
        Vue({
            template: { transformAssetUrls },
        }),
        quasar({
            sassVariables: "src/quasar-variables.sass",
        }),
        Pages({
            exclude: ["**/blank/*.vue"],
        }),
        Layouts(),
        Components({
            resolvers: [QuasarResolver()],
            // relative paths to the directory to search for components.
            dirs: ["src/components"],
            dts: true,
            // Allow subdirectories as namespace prefix for components.
            // directoryAsNamespace: true,
        }),
        AutoImport({
            imports: ["vue", "pinia", "vue-router", "quasar", "vitest"],
            dts: true,
        }),
        svgLoader(),
        Unocss({
            shortcuts: [
                ["ccontainer", "container mx-auto"],

                [/^cgrid-col-(.*)$/, ([, c]) => `grid grid-cols-${c}`],
                [/^cgrid-row-(.*)$/, ([, c]) => ` grid-rows-${c}`],
                [/^ccol-(.*)$/, ([, c]) => `col-span-${c}`],
            ],
            presets: [
                presetWind({}) as any,
                // presetAttributify(),
                presetIcons({
                    scale: 1.2,
                }),
            ],
        }),
    ],
});
