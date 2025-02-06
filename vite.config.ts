import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig({
	
	plugins: [sveltekit(), enhancedImages()]
});
