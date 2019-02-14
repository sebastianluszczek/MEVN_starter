<template>
  <div class="board">
    <h1>Posts Board</h1>
    <div class="posts">
      <div class="post" v-for="post in posts" :key="post._id">
        <div class="control">
          <i
            class="fas fa-pencil-alt"
            @click="$router.push({name: 'edit', params: {id: post._id}})"
          ></i>
          <i class="fas fa-trash-alt" @click="deletePost(post._id)"></i>
        </div>
        <h4>{{post.title}}</h4>
        <p>{{post.body}}</p>
        <div class="infos">
          <span class="author">{{post.author}}</span>
          <span class="time">{{new Date(post.createdAt).toLocaleString()}}</span>
        </div>
      </div>
    </div>
    <button id="add-post-btn" class="btn" @click="$router.push({name: 'add'})">Add Post</button>
  </div>
</template>

<script>
import AddPost from "@/components/AddPost";
import EditPost from "@/components/EditPost";

import axios from "axios";

export default {
  name: "board",
  data() {
    return {
      posts: [],
      addModal: false,
      editModal: false,
      postID: ""
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await axios.get("http://localhost:8080/api/posts");
      this.posts = response.data;
    },
    async deletePost(id) {
      const response = await axios.delete(
        `http://localhost:8080/api/posts/${id}`
      );
      this.$router.go({ name: "board" });
    }
  }
};
</script>

<style lang="scss">
.board {
  .posts {
    width: 70%;
    max-width: 700px;
    margin: 0 auto;

    .post {
      padding: 20px 20px 30px;
      border: 1px solid #444;
      border-radius: 10px;
      text-align: left;
      position: relative;
      margin-top: 10px;

      h4 {
        margin-bottom: 10px;
      }

      .infos {
        position: absolute;
        bottom: 10px;
        right: 10px;
      }

      span {
        padding: 0 10px;
      }

      .control {
        position: absolute;
        top: 10px;
        right: 10px;

        .fas {
          padding: 0 10px;
        }
      }
    }
  }

  #add-post-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
  }
}
</style>


