<template>
  <div>
  	<h1>API</h1>
  	<div>
  	  	<div class="post" v-for="post in posts":key="post.id">
  	  		<h3>Titulo: {{ post.title }}</h3>
  	  		<p>Descripción: {{post.body}}</p>
  		</div>
  	</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  mounted() {
  	var self = this;
  	axios.get('https://jsonplaceholder.typicode.com/posts')
  	.then(function(res){
  		self.posts = res.data
  		console.log('Data: ', res.data);
  	})
  	.catch(function(error){
  		console.log('Error: ', error);
  	})
  },
  // Fetches posts when the component is created.
  created() {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>