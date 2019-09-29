import Vue from 'vue'
import axios from 'axios'
import * as M from 'materialize-css'

export type Guitar = {
    readonly color: string
    readonly year: number
    readonly model: string
    readonly brand: string
    readonly id?: string
}

new Vue({
    computed: {
        hasGuitars() {
            return !this.isLoading && this.guitars.length > 0
        },
        noGuitars() {
            return !this.isLoading && this.guitars.length === 0
        },
    },
    data() {
        return {
            brand: '',
            color: '',
            guitars: [
                // {
                //     model: 'test model',
                //     brand: 'good brand',
                //     color: ' red',
                //     year: 1987,
                // },
            ] as Guitar[],
            isLoading: true,
            model: '',
            selectedGuitar: '',
            selectedGuitarId: 0,
            year: 0,
        }
    },
    el: '#app',
    methods: {
        addGuitar: function () {
            const guitar: Guitar = {
                brand: this.brand,
                color: this.color,
                model: this.model,
                year: this.year,
            }
            axios
                .post('/api/guitars/add', guitar)
                .then(() => {
                    this.$refs.year.focus()
                    this.brand = ''
                    this.color = ''
                    this.model = ''
                    this.year = 0
                    this.loadGuitars()
                })
                .catch((error: any) => {
                    console.log(`>> Error:`, error)
                })
        },
        loadGuitars() {
            axios
                .get('/api/guitars/all')
                .then((res) => {
                    this.isLoading = false
                    this.guitars = res.data
                })
                .catch((error: any) => {
                    console.log(`>> Error:`, error)
                })
        },
        deleteGuitar(id: string) {
            axios
                .delete(`/api/guitars/remove/${id}`)
                .then(this.loadGuitars)
                .catch((error: any) => {
                    console.log(`>> Error:`, error)
                })
        },
        confirmDeleteGuitar(id: string) {
            const guitar: Guitar = this.guitars.find((guitar) => guitar.is === id)
            this.selectedGuitar = `${guitar.year} ${guitar.brand} ${guitar.model}`
            this.selectedGuitarId = guitar.id

            const dc = this.$refs.deleteConfirm
            const modal = M.Modal.init(dc)
            modal.open()
        },
    },
    mounted() {
        return this.loadGuitars()
    },
})
