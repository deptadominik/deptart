<script>
import feather from 'feather-icons';
import AboutCounter from '@/components/about/AboutCounter';
import VueScrollTo from 'vue-scrollto';

export default {
	directives: {
    scrollTo: VueScrollTo.directive,
  },
	name: 'Home',
	data: () => {
		return {
			theme: '',
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {
	},
	components: {
		AboutCounter,
	},
};
</script>

<template>
	<section
		class="flex flex-col sm:justify-around items-center sm:flex-row mt-12 sm:mt-10"
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-2/4 text-left">
			<h1
				class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-center text-ternary-dark dark:text-primary-light uppercase"
				style="margin-bottom: 10%"
			>
				Twoje filmowe marzenia zaczynają się tutaj!
			</h1>
			<p
				class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-center leading-none text-gray-400"
			>
				Twórcza wizja, profesjonalna realizacja - <br>Twoje filmy, moja pasja.
			</p>
			<div class="flex justify-center smooth-scroll">
				<a
					href="#"
					v-scroll-to="'#projects'"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-green-700 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-green-50 focus:ring-1 focus:ring-green-700 hover:bg-green-700 text-gray-500 hover:text-white duration-300"
					aria-label="Show projects"
				>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Moje projekty</span
					>
					<i
						data-feather="arrow-down-circle"
						class="ml-0 sm:ml-1 mr-2 w-5 sm:w-6 duration-100"
						style="margin-right: -0.1rem;"
					></i>
				</a>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="w-4/5 md:w-2/5 text-right float-right">
			<img
				src="@/assets/images/profile.jpg"
				alt="Profile"
				class="rounded-3xl"
			/>
		</div>
	</section>

		<!-- About counter -->
		<AboutCounter />
</template>
<style scoped></style>
