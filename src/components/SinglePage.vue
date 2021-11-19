<template>
  <div>
 
  <br/>
  <v-row
  :align="start"
  >
     <h1>{{ page.title }}</h1>  
  </v-row>
  <br/>
  <v-row
        :align="start"
        no-gutters
        style="height: 20px;"
      >
        <v-col style="max-width: 150px;"
        >
          <v-btn @click="deletePost()">Delete</v-btn>

        </v-col>
        <v-col style="max-width: 170px;"
        >
          <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#0072B1"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Edit Dialog
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
         Edit Post
        </v-card-title>
        <v-container>
          <v-combobox
          v-model="select"
          :items="items"
          label="Title"
          outlined
          dense
        ></v-combobox>

        <v-combobox
          label="Description"
          outlined
          dense
        ></v-combobox>

        <v-btn
          color="#0072B1"
          dark
          @click="editPost()"
        >
          Save
        </v-btn>
        <br/>
        <br/>
        <v-btn
          color="red lighten-2"
          dark
          @click="deletePost()"
        >
          Delete
        </v-btn>

        </v-container>

        
        <v-card-text v-model="page.title">
          Title
        </v-card-text>

        <v-card-text v-model="page.title">
          {{page.title}}
        </v-card-text>

        <v-divider></v-divider>
        <v-container>
          <h3>Debug area</h3>
          <label>Title</label>
          <br/>
          <input type="text" v-model="page.title" class="form-control" />
          <br/>
          <br/>
          <label>Description</label>
          <br/>
          <input type="text" v-model="page.description" class="form-control" />
        </v-container>
      </v-card>
    </v-dialog>
        </v-col>
      </v-row>
  <br/>
  <br/>
      <markdown-it-vue class="md-body" :content="page.description"/>
  </div>
</template>

<script>
import gql from "graphql-tag";
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: "SinglePage",
  components: {
    MarkdownItVue
  },
  data() {
    return {
      page: [],
      id: this.$route.params.id,
      content: '# your markdown content',
      dialog: false,
      strapi_url: 'https://localhost:1337',
      items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify',
      ],
    };
  },
  // computed: {
  //   changed_post_content: function () {
  //       return post_content.split('/uploads/').join(`${this.strapi_url}/uploads/` );
  //   }
  // },

  methods: {
    editPost() {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation updatePage($id: ID!, $Title: String!, $Body: String!) {
              updatePage(
                input: {
                  where: { id: $id }
                  data: { title: $title, description: $description }
                }
              ) {
                page {
                  title
                  description
                }
              }
            }
          `,
          variables: {
            id: this.id,
            title: this.page.title,
            description: this.page.description,
          },
        })
        .then(() => {
          // console.log(res);
          alert("Edited");
        });
    },

    deletePost() {
      const check = confirm();
      if (check) {
        this.$apollo
          .mutate({
            mutation: gql`
              mutation deletePage($id: ID!) {
                deletePage(input: { where: { id: $id } }) {
                  page {
                    title
                    description
                  }
                }
              }
            `,
            variables: {
              id: this.id,
            },
          })
          .then(() => {
            // console.log(res);
          });
      } else {
        return false;
      }
    },
  },

  apollo: {
    page: {
      query: gql`
        query page($id: ID!) {
          page(id: $id) {
            id
            title
            description
          }
        }
      `,
      variables() {
        return {
          id: this.id,
        };
      },
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