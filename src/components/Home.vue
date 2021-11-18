<template>
  <v-container>
    <h3>Latest</h3>
    <br/>
    <div v-for="page in pages" :key="page.id" >
                <router-link
                  class="nav-link"
                  :to="{ path: '/page/' + page.id }"
                  style="text-decoration:none; color: #434343;"
                >
                  <!-- <div class="container">
                    <div class="customCard">
                      <div
                        class="
                          card
                          shadow-lg
                          p-3
                          mb-5
                          bg-white
                          rounded
                          mr-5
                          ml-5
                        "
                      >
                        <div class="card-head" style="padding: 4rem">
                          <h1 style="font-size: 6rem">
                            {{ page.title }}
                            <hr />
                          </h1>
                        </div>
                        <div class="card-body text-center">
                          <p style="line-height: 26pt">{{ page.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div> -->
                  <v-card
                    elevation="2"
                    v-ripple
                  >
                  <v-card-title>{{ page.title }}</v-card-title>
                  <v-card-text>
                  <markdown-it-vue class="md-body" :content="page.description"/>
                  </v-card-text>
                  </v-card>
                </router-link>
                <br />
              </div>
  </v-container>
</template>

<script>
import gql from "graphql-tag";
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
export default {
  name: "Home",
  components: {
    MarkdownItVue
  },
  data() {
    return {
      pages: [],
    };
  },

  apollo: {
    pages: {
      query: gql`
        query {
          pages {
            id
            title
            description
          }
        }
      `,
    },
  },
};
</script>

<style>
.customPadding {
  margin-top: 12rem !important;
  margin-bottom: 12rem !important;
  /* padding: 4rem; */
}
</style>