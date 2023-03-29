<template>
    <div class="page" v-if="contact">
        <h4>Thêm liên hệ</h4>
        <ContactForm
            :contact="contact"
            @submit:contact="createContact" 
        />
        <p> {{ message }} </p>
    </div>
</template>

<script >
import ContactForm from '../components/ContactForm.vue';
import ContactService from "../services/contact.service";
export default{
    components: {
        ContactForm,
    },
    data(){
        return{
            contact:{
                name: "",
                email: "",
                phone: "",
                address: ""
            },
            message:"",
        };
        
    },
    methods:{
        async createContact (contact){
            try{
                await ContactService.create(contact);
                this.message = ("Tạo liên hệ thành công.");
            }catch(error){
                console.log(error);
            }
        }
     },
    created(){
        this.createContact(this.contact)
        this.message = "" ;
    },
}
</script>