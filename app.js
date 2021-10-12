const app = Vue.createApp({
data(){
    return{
        title: 'The Final Empire',
        author: 'Brandon Sanderson',
        age: 45
    }
},
methods: {
    changeTitle(title){
        //this.title = 'Word of Radinance'
        this.title=title
    }
}
})

app.mount('#app')
