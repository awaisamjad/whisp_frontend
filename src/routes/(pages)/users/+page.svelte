<script>
	import { onMount } from "svelte";

    /**
	 * @type {any[]}
	 */
    let users = [];
  
    async function fetchUsers() {
      const response = await fetch('http://localhost:3000/users');
      users = await response.json();
      console.log(users);
    }
  
    onMount(fetchUsers);
  </script>
  
  <ul>
    {#each users as user}
      <li>{user.Username} ({user.Email})</li>
    {/each}
  </ul>
  