<template>
  <div>
 
  <br/>
  <v-row
  :align="start"
  >
     <h1>{{ page.title }}</h1>  
  </v-row>
  <br/>
   <v-dialog
      v-model="dialog"
      width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#0072B1"
          dark
          v-bind="attrs"
          v-on="on"
          style="textTransform:none; font-weight: 400;"
        >
        <v-icon left>
            mdi-pencil
            </v-icon>
          Edit
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
         Edit Post
        </v-card-title>
          <v-form v-model="valid">
            <v-container>
                  <v-text-field
                    v-model="page.title"
                    :rules="titleRules"
                    label="Title"
                    filled
                    clearable
                    required
                  ></v-text-field>
                  <v-textarea
                    v-model="page.description"
                    :rules="descriptionRules"
                    label="Description"
                    filled
                    auto-grow
                    clearable
                    required
                  ></v-textarea>
                  <v-card-actions>
                  <v-btn
                    @click="editPost()"
                    style="textTransform:none; font-weight: 400"
                    text
                    color="#0072B1"
                  >
                  <v-icon left>
                  mdi-content-save
                  </v-icon>
                    Save
                  </v-btn>

                  <v-btn
                    @click="deletePost()"
                    style="textTransform:none; font-weight: 400;"
                    text
                    color="#94072A"
                  >
                  <v-icon left>
                  mdi-delete
                  </v-icon>
                    Delete
                  </v-btn>
                  </v-card-actions>
            </v-container>
          </v-form>
      </v-card>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="#4B466F"
      class="ma-0 pa-0"
    >
    <v-btn
    text
    large
    style="textTransform:none;"
    @click="snackbar = false"
    class="ma-0"
    >
    <v-icon left>
      mdi-check-circle
    </v-icon>
      {{text}}
    </v-btn>
    </v-snackbar>
    
    <v-snackbar
      v-model="snackbar2"
      :timeout="timeout"
      color="#4B466F"
    >
    <v-btn
    text
    large
    style="textTransform:none;"
    @click="snackbar = false"
    class="ma-0"
    >
    <v-icon left>
      mdi-delete
    </v-icon>
      {{text2}}
    </v-btn>
    </v-snackbar>
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
      snackbar: false,
      snackbar2: false,
      text: 'Post successfully edited',
      text2: 'Post deleted',
      timeout: 5000,
      valid: false,
      titleRules: [
        v => !!v || 'Title is required',
      ],
      descriptionRules: [
        v => !!v || 'Description is required',
      ],
      page: [],
      id: this.$route.params.id,
      content: '# your markdown content',
      dialog: false,
      strapi_url: 'https://localhost:1337',
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
            mutation updatePage($id: ID!, $title: String!, $description: String!) {
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
          this.snackbar = true;
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
            this.snackbar2 = true;
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