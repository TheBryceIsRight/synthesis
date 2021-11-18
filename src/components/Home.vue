<template>
  <div>
    <div class="container">
      <div class="container">
        <div class="customPadding">
          <div class="row">
            <div class="col-sm">
              <div class="customCard">
                <h2
                  style="
                    font-size: 3rem;
                    text-align: center;
                    padding-bottom: 6rem;
                  "
                >
                 Release Notes
                </h2>
              </div>
              <div v-for="page in pages" :key="page.id">
                <router-link
                  class="nav-link"
                  :to="{ path: '/page/' + page.id }"
                >
                  <div class="container">
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
                  </div>
                </router-link>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "Home",
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