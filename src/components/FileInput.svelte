<!-- <script lang="ts">
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
/> -->

<script lang="ts">
    let file;

    function triggerFileInput() {
        document.getElementById("fileInput")?.click();
    }

    function handleFileChange(event) {
        file = event.target.files[0];
        if (file) {
            uploadFile(file);
        }
    }

    async function uploadFile(file) {
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("http://localhost:8000/upload", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            console.log("Success:", data);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    }
</script>

<button onclick={triggerFileInput} class="btn" >Upload File</button>
<input id="fileInput" type="file" onchange={handleFileChange} style="display: none;" accept="image/*">
