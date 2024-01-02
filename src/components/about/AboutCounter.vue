<script>
export default {
	data: () => {
		return {
			experienceTitle: 'ukazujące esencję i zalety Twojej marki, produktu lub usługi',
			githubTitle: 'doskonale oddające emocje i atmosferę utworu muzycznego',
			feedbackTitle: 'piękne, pełne emocji zdjęcia, które będą niezapomnianą pamiątką',
			projectsTitle: 'nagrywane z drona, ukazując ich atuty w najlepszy sposób',
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20 bg-green-50 dark:bg-ternary-dark shadow-sm rounded-2xl">
		<div
			class="font-general-regular container mx-auto py-10 px-10 block sm:flex sm:justify-between sm:items-center"
		>
			<div class="mb-10 mt-10 w-48 text-center mx-auto flex flex-col items-center">
				<h4 class="font-general-medium text-2xl font-bold text-secondary-dark dark:text-secondary-light mb-2">filmy promocyjne</h4>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ experienceTitle }}
				</span>
			</div>
			<div class="mb-10 mt-10 w-48 text-center mx-auto flex flex-col items-center">
				<h4 class="font-general-medium text-2xl font-bold text-secondary-dark dark:text-secondary-light mb-2">teledyski</h4>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
					>{{ githubTitle }}</span
				>
			</div>
			<div class="mb-10 mt-10 w-48 text-center mx-auto flex flex-col items-center">
				<h4 class="font-general-medium text-2xl font-bold text-secondary-dark dark:text-secondary-light mb-2">sesje plenerowe</h4>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ feedbackTitle }}
				</span>
			</div>
			<div class="mb-10 mt-10 w-48 text-center mx-auto flex flex-col items-center">
				<h4 class="font-general-medium text-2xl font-bold text-secondary-dark dark:text-secondary-light mb-2">nieruchomości</h4>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ projectsTitle }}
				</span>
			</div>
		</div>
	</div>
</template>
