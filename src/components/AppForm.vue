<script>
import axios from 'axios';

export default {
    name: 'AppForm',

    data() {
        return {
            isLoading: false,
            isFormSent: false,
            success: false,

            formName: '',
            formEmail: '',
            formContent: '',

            emailMessage: '',
        }
    },

    methods: {
        sendEmail() {
            this.isLoading = true;
            this.isFormSent = false;
            this.success = false;

            axios.post('http://127.0.0.1:8000/api/email/store', {
                name: this.formName,
                email: this.formEmail,
                content: this.formContent,
            })
                .then(res => {
                    console.log(res);
                    this.isFormSent = true;

                    this.emailMessage = res.data.message;
                    this.success = res.data.success;

                    this.isLoading = false;
                });
        }
    }
}
</script>

<template>
    <form @submit.prevent="sendEmail()">
        <h2>Contattami</h2>

        <div class="input-group mb-3">
            <label class="input-group-text" for="name">Nome</label>
            <input type="text" class="form-control" name="name" id="name" v-model="formName" maxlength="100" required>
        </div>

        <div class="input-group mb-3">
            <label class="input-group-text" for="email">Email</label>
            <input type="email" class="form-control" name="email" id="email" v-model="formEmail" maxlength="100" required>
        </div>

        <div class="input-group mb-3">
            <label class="input-group-text" for="content">Descrizione</label>
            <textarea class="form-control" name="content" id="content" v-model="formContent" required></textarea>
        </div>

        <div class="input-group mb-3">
            <button type="submit" class="btn btn-primary">Invia</button>
        </div>

        <div v-if="isLoading" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else-if="isFormSent" class="alert" :class="success ? 'alert-success' : 'alert-danger'" role="alert">
            {{ emailMessage }}
        </div>
    </form>
</template>

<style lang="scss" scoped></style>