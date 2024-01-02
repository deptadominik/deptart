<script>
import feather from 'feather-icons';
import FormInput from './reusable/FormInput.vue';
import FormTextarea from './reusable/FormTextarea.vue';
import emailjs from "emailjs-com";

export default {
	props: ['showModal', 'modal', 'categories'],
	components: { FormInput, FormTextarea },
	data() {
    return {
		componentKey: 0,
      name: "",
      email: "",
      projectType: "",
      message: "",
		isLoading: false,
    };
  },
  methods: {
    async sendEmail(e) {
		this.isLoading = true;
		this.componentKey += 1;
		this.$forceUpdate()
      try {
         await emailjs.sendForm(
          "service_usp8yan",
          "template_f4earga",
          e.target,
          "7xKDLeX_1dS9sZY4k",
          {
            name: this.name,
            email: this.email,
            projectType: this.projectType,
            message: this.message,
          }
        ).then((response) => {
        console.log("Email sent successfully:", response);
        
        alert("Wiadomość została wysłana!");


      }).catch((error) => {
        console.log("Error sending email:", error);

        alert("Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się z administratorem.");

      });
      } catch (error) {
        console.log({ error });
      }
		finally {
        this.isLoading = false; 
      }
      this.name = "";
      this.email = "";
      this.projectType = "";
      this.message = "";
    },
  },
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	}
};
</script>

<template>
	<transition name="fade">
		<div v-show="modal" class="font-general-regular fixed inset-0 z-30">
			<!-- Modal body background as backdrop -->
			<div
				v-show="modal"
				@click="showModal()"
				class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
			></div>
			<!-- Modal content -->
			<main
				class="flex flex-col items-center justify-center h-full w-full"
			>
				<transition name="fade-up-down">
					<div
						v-show="modal"
						class="modal-wrapper flex items-center z-30"
					>
						<div
							class="modal max-w-md mx-5 md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"
						>
							<div
								class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"
							>
								<h5
									class="text-primary-dark dark:text-primary-light text-xl"
								>
									Jaki projekt Cię interesuje?
								</h5>
								<button
									class="px-4 text-primary-dark dark:text-primary-light"
									@click="showModal()"
								>
									<i data-feather="x"></i>
								</button>
							</div>
							<div class="modal-body p-5 w-full h-full">
								<form @submit.prevent="sendEmail" class="max-w-xl m-4 text-left">
									<FormInput
										label="Imię i nazwisko"
										inputIdentifier="name"
										class="mb-2"
										v-model="name"
									/>
									<FormInput
										label="E-mail"
										v-model="email"
										inputIdentifier="email"
										inputType="email"
									/>

									<div class="mt-6 mb-4">
										<label
											class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
											for="project"
											>Typ projektu</label
										>
										<select
											class="w-full px-5 py-3 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="project"
											name="project"
											type="text"
											required=""
											aria-label="Project Category"
											v-model="projectType"
										>
											<option
												v-for="category in categories"
												:key="category.id"
												:value="category.name"
											>
												{{ category.name }}
											</option>
										</select>
									</div>

									<FormTextarea
										label="Szczegóły"
										v-model="message"
										textareaIdentifier="message"
									/>

									<div class="mt-2 pb-4 sm:pb-1">
										<button
											:title="isLoading ? 'Wysyłanie...' : 'Wyślij wiadomość'"
											class="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-green-700 hover:bg-green-900 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
											type="submit"
											aria-label="Submit Request"
											:key="componentKey"
											:disabled="isLoading"
										>
										<span v-if="!isLoading">Wyślij wiadomość</span>
										<span v-if="isLoading">Wysyłanie...</span>
										</button>
									</div>
								</form>
							</div>
							<div
								class="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"
							>
							</div>
						</div>
					</div>
				</transition>
			</main>
		</div>
	</transition>
</template>

<style scoped>
.modal-body {
	max-height: 570px;
	overflow-y: auto;
}
.bg-gray-800-opacity {
	background-color: #2d374850;
}
@media screen and (max-width: 768px) {
	.modal-body {
		max-height: 400px;
	}
}
.fade-up-down-enter-active {
	transition: all 0.3s ease;
}
.fade-up-down-leave-active {
	transition: all 0.3s ease;
}
.fade-up-down-enter {
	transform: translateY(10%);
	opacity: 0;
}
.fade-up-down-leave-to {
	transform: translateY(10%);
	opacity: 0;
}

.fade-enter-active {
	-webkit-transition: opacity 2s;
	transition: opacity 0.3s;
}
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
