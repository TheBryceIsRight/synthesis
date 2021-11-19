<template>
  <div class="container">
    <div class="mt-5">
      <div class="card-head" style="padding: 4rem">
        <h1 style="font-size: 6rem">
          Create New Post
          <hr />
        </h1>
      </div>
      <div class="card card shadow-lg p-3 mb-5 bg-white rounded mr-5 ml-5">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">title:</label>
            <input type="text" v-model="title" class="form-control" />
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">description:</label>
            <textarea class="form-control" rows="8" v-model="description"></textarea>
          </div>
        </form>
        <div>
          <button type="button" class="btn btn-primary" @click="createPost()">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      title: "",
      description: "",
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