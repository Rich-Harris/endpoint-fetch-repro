import adapter from '@sveltejs/adapter-static';

const prod = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		paths: {
			base: prod ? '/custom-base' : '',
			assets: prod ? 'https://cdn.example.com/assets' : ''
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
