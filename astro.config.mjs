import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import vercelStatic from '@astrojs/vercel/static';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: 'https://karuhundeveloper.com/',
    output: 'static',
    adapter: vercelStatic(),
    integrations: [
        partytown({
            config: {
                forward: ["dataLayer.push"]
            }
        }),
        sitemap(),
    ]
});
