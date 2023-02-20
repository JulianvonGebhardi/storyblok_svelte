import Feature from '../components/Feature.svelte';
import Grid from '../components/Grid.svelte';
import Page from '../components/Page.svelte';
import Food from '../components/Food.svelte';

import Teaser from '../components/Teaser.svelte';
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

/** @type {import('./$types').LayoutLoad} */

export async function load() {
	storyblokInit({
		accessToken: 'Q8rGd47d7Q9qD3dTTUC5qAtt',
		use: [apiPlugin],
		components: {
			feature: Feature,
			grid: Grid,
			page: Page,
			teaser: Teaser,
			food: Food
		}
	});

	let storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi
	};
}
