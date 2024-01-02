<script>
import FormInput from "../reusable/FormInput.vue";
import FormTextarea from "../reusable/FormTextarea.vue";
import emailjs from "emailjs-com";

export default {
  components: { FormInput, FormTextarea },
  name: "ContactUs",
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
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
    >
      <p
        class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
      >
        Formularz kontaktowy
      </p>
      <form @submit.prevent="sendEmail" class="font-general-regular space-y-7">
        <FormInput label="Imię i nazwisko" v-model="name" inputIdentifier="name" />
        <FormInput label="E-mail" v-model="email" inputIdentifier="email" inputType="email" />
        <FormInput label="Temat" v-model="projectType" inputIdentifier="projectType" />
        <FormTextarea label="Wiadomość" v-model="message" textareaIdentifier="message" />

        <div>
          <button
			:title="isLoading ? 'Wysyłanie...' : 'Wyślij wiadomość'"
            class="px-4 py-2.5 text-white tracking-wider bg-green-700 hover:bg-green-900 focus:ring-1 focus:ring-green-900 rounded-lg duration-500"
            type="submit"
            aria-label="Wyślij wiadomość"
			:key="componentKey"
			:disabled="isLoading"
          >
			<span v-if="!isLoading">Wyślij wiadomość</span>
			<span v-if="isLoading">Wysyłanie...</span>
			</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
