<template>
  <div class="contact" id="contact">
    <h2>Contact 💌</h2>
    <p>It's getting serious! Please use the contact form to get in touch! You can use the contact form for questions, interest in our products or if you want to collaborate. We look forward hearing from you!</p>
    
    <!-- <form v-if="unlockField == 'okay'" ref="form" @submit.prevent="sendEmail"> -->
    <form v-if="unlockField == 'okay'" ref="form">
      <label for="name">Your Name:</label>
      <input type="text" id="name" name="name" placeholder="Please type in your name here" required />
      <label for="email">Your Email:</label>
      <input type="email" id="email" name="email" placeholder="Please type in your email here" required />
      <label for="message">Your Message:</label>
      <textarea id="message" name="message"></textarea>
      <button type="submit" value="Send" class="submit-button">Send!</button>
    </form> 
  
    <form v-else>
      <p>Please note that spam and advertising are strictly forbidden. Type "okay" to unlock the contact form:</p>
      <label for="riddle"></label>
      <input type="text" id="riddle" name="riddle" placeholder="Just type 'okay' in here" v-model="unlockField" required />
    </form>
  </div>
</template>

<script lang="ts">
  // eslint-disable-next-line
  // @ts-ignore
  // import emailjs from '@emailjs/browser';
  // const emailService = process.env.EMAIL_SERVICE;
  // const emailTemplate = process.env.EMAIL_TEMPLATE;
  // const emailUser = process.env.EMAIL_USER;

  const unlockField = "";


  export default {
    data() {
      return {
        unlockField
      }
    },
    // methods: {
    //   sendEmail() {
    //     emailjs.sendForm(emailService, emailTemplate, this.$refs.form, emailUser)
    //       .then((result: any) => {
    //           console.log(result.text);
    //       }, (error: any) => {
    //           console.log(error.text);
    //       });
    //   }
    // } 
  }
</script>

