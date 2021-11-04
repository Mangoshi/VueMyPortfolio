<template>
<div>
    <b-container fluid>
        <b-col>
            <b-row cols="3" align-h="center">
                <div class="search-box">
                    <input type="text" v-model="term" v-on:keyup.enter="searchGiphy()"/>
                    <b-button class="flex" variant="primary" @click="searchGiphy()">Search</b-button>
                    <b-button class="flex" variant="danger" @click="searchRandomGiphy()">Feeling lucky, punk?</b-button>
                </div>
            </b-row>
            <b-row>
                <b-button-group class="buttons-box">
                    <b-button variant="info" @click="trendingGiphy()">Trending</b-button>
                    <b-button variant="danger" @click="randomGiphy()">Random</b-button>
                </b-button-group>
            </b-row>
        </b-col>
    </b-container>
    <b-container fluid>
        <b-col>
            <b-row>
                <b-card-group columns>
                    <b-card
                        v-for="gif in gifs"
                        :key="gif.id"
                        :img-src="gif.images.original.url"
                        :img-alt="gif.title"
                        :title="gif.title"
                        img-top
                        >
                        <b-card-text>
                            <a :href="gif.url" target="_blank">{{ gifs.title}}</a>
                        </b-card-text>
                    </b-card>
                </b-card-group>
            </b-row>
        </b-col>
    </b-container>
</div>
</template>

<script>
    import axios from 'axios'

    const GIPHY_URL =  'https://api.giphy.com/v1/gifs'
    const API_KEY = 'yTGnegHqwrTn3Mkz1sMA45O5He0EiJdn'

    export default {
        name: 'GiphyViewer',
        data() {
            return {
                gifs: []
            }
        },
        // Making a HTTP request for trending GIFs in mounted() since we want it to happen first.
        // Could use 'fetch' for this, but instead will use 'axios', a promise-based HTTP client for the browser and node.js 
        // More info @ https://axios-http.com/, https://github.com/axios/axios and https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
        mounted(){
            this.trendingGiphy();
        },
        methods: {
            trendingGiphy() {
                axios
                    .get(`${GIPHY_URL}/trending?api_key=${API_KEY}`)
                    .then((response) => {
                        console.log(response.data.data)
                        this.gifs = response.data.data
                        })
                    .catch(error => console.log(error))
            },
            randomGiphy() {
                axios
                    .get(`${GIPHY_URL}/random?api_key=${API_KEY}`)
                    .then((response) => {
                        console.log(response.data.data)
                        this.gifs = [response.data.data]
                        })
                    .catch(error => console.log(error))
            },
            searchGiphy() {
                if(!this.term) {
                    // this.$bvToast.toast('Please enter a search term!', {
                    //     title: 'Warning',
                    //     variant: 'danger',
                    //     toaster: 'b-toaster-top-center',
                    //     autoHideDelay: 5000,
                    //     solid: true
                    //     })
                    alert("Please enter a search term!")
                    return
                }
                axios
                    .get(`${GIPHY_URL}/search?api_key=${API_KEY}&q=${this.term}&limit=20`)
                    .then((response) => {
                        console.log(response.data.data)
                        this.gifs = response.data.data
                    })
                    .catch(error => console.log(error))
                    // Reset the searchbox
                    this.term = ""
            },
            searchRandomGiphy() {
                if(!this.term) {
                    alert("Please enter a search term!")
                    return
                }
                axios
                    .get(`${GIPHY_URL}/random?api_key=${API_KEY}&tag=${this.term}`)
                    .then((response) => {
                        console.log(response.data.data)
                        this.gifs = [response.data.data]
                    })
                    .catch(error => console.log(error))
            }
        }
    }
</script>

<style>
    .search-box{
        margin: 20px 0;
    }
    .card{
        margin-bottom: 20px;
    }
    @media (min-width: 34em) {
        .card-columns {
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2;
        }
    }
    @media (min-width: 48em) {
        .card-columns {
            -webkit-column-count: 3;
            -moz-column-count: 3;
            column-count: 3;
        }
    }
    @media (min-width: 62em) {
        .card-columns {
            -webkit-column-count: 4;
            -moz-column-count: 4;
            column-count: 4;
        }
    }
    @media (min-width: 75em) {
        .card-columns {
            -webkit-column-count: 5;
            -moz-column-count: 5;
            column-count: 5;
        }
    }
</style>