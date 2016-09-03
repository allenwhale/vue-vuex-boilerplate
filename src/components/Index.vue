<<<<<<< 6d311138268c7dd40ceb995ca9974a0f1c96cb8b
<template>
    <div>
        <document-title :title="title">
            <h1>this is /index!</h1>
            <h2>{{ example.msg }}</h2>
            <h2>{{ computedMsg }}</h2>
            <h2>{{ data1 }}</h2>
            <button @click="onClick">Click Me</button>
        </document-title>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    import DocumentTitle from 'src/components/utils/DocumentTitle'

    export default {
        components: {
            'document-title': DocumentTitle
        },
        props: {
        },
        data () {
            return {
                data1: 'this is data1',
                title: 'title'
            }
        },
        computed: {
            ...mapGetters(['example']),
            computedMsg () {
                return this.example.msg + ' computed!'
            }
        },
        methods: {
            ...mapActions(['exampleGet', 'changeMsg']),
            onClick () {
                alert('On Click')
            }
        },
        mounted () {
            this.changeMsg('Index')
            this.exampleGet().then(() => {
                console.log('after example get')
            })
            setInterval(() => {
                this.title = Math.random().toString()
            }, 2000)
        }
    }

</script>
<style scoped lang="sass">
    h1
        color: red
</style>
=======
<template src="src/components/templates/Index.html"> </template>
<script src="src/components/scripts/Index.js"> </script>
<style src="src/components/styles/Index.css" scoped></style>
>>>>>>> init commit
