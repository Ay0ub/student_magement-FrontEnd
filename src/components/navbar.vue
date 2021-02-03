<template>
    <nav class="navbar navbar-light bg-light sticky-top fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand">Student management</a>
            <form class="d-flex">
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                        Exemple
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" @click="logout">Logout</a></li>
                    </ul>
                </div>
            </form>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        logout(){

        },
    },
}
</script>