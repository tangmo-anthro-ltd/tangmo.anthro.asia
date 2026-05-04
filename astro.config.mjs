import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://tangmo.anthro.asia',
    output: 'static',
    trailingSlash: 'never',
    i18n: {
        defaultLocale: 'th',
        locales: ['th', 'en', 'uwu'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    integrations: [react(), icon()],
    vite: {
        plugins: [tailwindcss()],
    },
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp',
            config: {
                limitInputPixels: false,
            },
        },
    },
});
