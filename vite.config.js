import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:     'index.html',
        writings: 'writings/index.html',
        projects: 'projects/index.html',
        design:   'design/index.html',
        'writings-developer-blind-spots': 'writings/developer-blind-spots/index.html',
      },
    },
  },
});
