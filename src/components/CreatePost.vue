<template>
  <v-container>
  <v-dialog
        v-model="dialog"
        width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            text
            large
            v-bind="attrs"
            v-on="on"
            style="textTransform:none; font-weight: 400;"
          >
          <v-icon left>
              mdi-plus
              </v-icon>
            Create
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
          Create Post
          </v-card-title>
            <v-form v-model="valid">
              <v-container>
                    <v-text-field
                      v-model="title"
                      :rules="titleRules"
                      label="Title"
                      filled
                      clearable
                      required
                    ></v-text-field>
                    <v-textarea
                      v-model="description"
                      :rules="descriptionRules"
                      label="Description"
                      filled
                      auto-grow
                      clearable
                      required
                    ></v-textarea>
                    <v-card-actions>
                    <v-btn
                      @click="createPost()"
                      style="textTransform:none; font-weight: 400"
                      text
                      color="#0072B1"
                    >
                    <v-icon left>
                    mdi-plus
                    </v-icon>
                      Create
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
</v-container>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      title: "",
      description: "",
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
    };
  },

  methods: {
    createPost() {
      if (this.title && this.description) {
        this.$apollo
          .mutate({
            mutation: gql`
              mutation createBlog($title: String!, $description: String!) {
                createPage(input: { data: { title: $title, description: $description } }) {
                  page {
                    title
                    description
                  }
                }
              }
            `,
            variables: {
              title: this.title,
              description: this.description,
            },
          })
          .then(() => {
            alert("Post Created");
          });
      } else {
        alert("all fields are required");
      }
    },
  },
};
</script>