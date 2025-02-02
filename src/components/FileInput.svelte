<script lang="ts">
  let fileInput : any;

  function triggerFileSelect() {
    fileInput.click();
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file.name);
    }
  }
</script>

<button onclick={triggerFileSelect} class="btn">Select File</button>
<input
  type="file"
  bind:this={fileInput}
  onchange={handleFileChange}
  style="display: none;"
/>
