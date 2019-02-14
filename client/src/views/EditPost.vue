<template>
  <div class="add-modal">
    <div class="modal">
      <span class="close-modal" @click="$router.push({name: 'board'})">X</span>
      <h2>Edit Post</h2>
      <div class="inputs-wrapper">
        <input class="input-elem" type="text" v-model="title" placeholder="title...">
        <textarea class="input-elem" cols="30" rows="10" v-model="body" placeholder="body..."></textarea>
        <input class="input-elem" type="text" v-model="author" placeholder="author...">
      </div>
      <button class="btn" @click="editPost">Edit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "edit-modal",
  data() {
    return {
      title: "",
      body: "",
      author: ""
    };
  },
  props: ["posts"],
  async created() {
    const response = await axios.get(
      `http://localhost:8080/api/posts/${this.$route.params.id}`
    );
    this.title = response.data.title;
    this.body = response.data.body;
    this.author = response.data.author;
  },
  methods: {
    async editPost() {
      const newPost = {
        title: this.title,
        body: this.body,
        author: this.author
      };
      const response = await axios.put(
        `http://localhost:8080/api/posts/${this.$route.params.id}`,
        newPost
      );
      this.title = "";
      this.body = "";
      this.author = "";
      this.$router.push({ name: "board" });
    }
  }
};
</script>

<style lang="scss">
.add-modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: #000000aa;

  .modal {
    position: absolute;
    border: 1px solid #444;
    border-radius: 20px;
    padding: 40px 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 600px;
  }

  .inputs-wrapper {
    padding: 0 30px;

    .input-elem {
      display: block;
      width: 90%;
      padding: 10px 20px;
      margin-top: 10px;
      border: 1px solid #777;
      border-radius: 8px;
      font-size: 16px;
    }
  }

  .close-modal {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
}
</style>


