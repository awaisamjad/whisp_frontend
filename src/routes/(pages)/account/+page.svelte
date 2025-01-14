<script>
    // TODO Get account name from store / something and then navigate there
    import { goto } from "$app/navigation";
    let username = "awais"
    goto(`/account/${username}`)
</script>