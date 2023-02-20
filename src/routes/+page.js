export async function load({ parent }) {
	const { storyblokApi } = await parent();

	const dataStory = await storyblokApi.get('cdn/stories/food', {
		version: 'draft'
	});

	console.log(dataStory, 'dataStory');
	return {
		story: dataStory.data.story
	};
}
