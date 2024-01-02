<script>
import feather from 'feather-icons';

export default {
	props: ['projectInfo'],

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-14" v-if="projectInfo">
		<div class="w-full sm:w-1/3 text-left">
			<div v-if="projectInfo.companyName" class="mb-7">
				<p
					class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"
				>
					{{ projectInfo.clientHeading }}
				</p>
				<ul class="leading-loose">
					<li
						class="font-general-regular text-ternary-dark dark:text-ternary-light"
					>
						<span><b>{{ projectInfo.companyName }}</b></span>
					</li>
					<li
						v-for="info in projectInfo.companyInfos"
						:key="info"
						class="font-general-regular text-ternary-dark dark:text-ternary-light"
					>
						<span>{{ info.title }}: </span>
						<a
							:href="info.url"
							:class="
								info.title == 'Strona internetowa' || info.title == 'Telefon'
									? 'hover:underline cursor-pointer'
									: ''
							"
							aria-label="Project Website and Phone"
							>{{ info.url }}</a
						>
					</li>
				</ul>
			</div>
			<div class="mb-7">
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ projectInfo.objectivesHeading }}
				</p>
				<p
					class="text-justify font-general-regular text-primary-dark dark:text-ternary-light"
				>
					{{ projectInfo.objectivesDetails }}
				</p>
			</div>
			<div>
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ projectInfo.socialSharingsHeading }}
				</p>
				<div class="flex items-center gap-3 mt-5">
					<a
						v-for="social in projectInfo.socialSharings"
						:key="social.id"
						:href="social.url"
						target="__blank"
						aria-label="Share Project"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
						><i
							:data-feather="social.icon"
							class="w-4 lg:w-5 h-4 lg:h-5"
						></i
					></a>
				</div>
			</div>
		</div>

		<!-- Single project right section details -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
			>
				{{ projectInfo.projectDetailsHeading }}
			</p>
			<div v-if="projectInfo.projectUrl" class="mb-10 flex justify-center aspect-w-16 aspect-h-9">
				<iframe :src="projectInfo.projectUrl" width="560" height="315" class="aspect-w-16 aspect-h-9" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<p
				v-for="projectDetail in projectInfo.projectDetails"
				:key="projectDetail.id"
				class="justify-text text-justify font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
			>
				{{ projectDetail.details }}
			</p>
		</div>
	</div>
</template>
