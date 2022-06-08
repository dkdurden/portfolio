<script>
  import { onMount } from "svelte";

  let showNav = false;
  let width;

  let currentPath;

  onMount(() => {
    currentPath = window.location.pathname;
  });

  function toggleNav() {
    showNav = !showNav;
  }
</script>

<svelte:window bind:innerWidth={width} />

<header>
  <div>
    <img src="/images/logo.svg" alt="" />
  </div>

  {#if width < 768}
    <button
      on:click={toggleNav}
      aria-label="Open nav menu"
      aria-expanded={showNav}
      aria-controls="menu"
    >
      {#if showNav}
        <img src="/images/icons/close.svg" alt="" />
      {:else}
        <img src="/images/icons/hamburger.svg" alt="" />
      {/if}
    </button>
  {/if}

  <nav>
    {#if showNav || width >= 768}
      <ul id="menu">
        <li><a href="/" class:active={currentPath === "/"}>Home</a></li>
        <li>
          <a href="portfolio" class:active={currentPath === "/portfolio"}
            >Portfolio</a
          >
        </li>
        <li>
          <a href="/contact" class:active={currentPath === "/contact"}
            >Contact Me</a
          >
        </li>
      </ul>
    {/if}
  </nav>
</header>

<style>
  header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 32px;
    margin-top: 2rem;
    margin-bottom: 2.5rem;
  }

  nav {
    position: absolute;
    top: 100%;
    right: 0;
  }

  ul {
    position: relative;
    z-index: 10;
    background-color: var(--pc-3);
    padding: 2.5rem 4rem;
    list-style: none;
    margin: 0;
  }

  li {
    text-align: center;
  }

  li:first-of-type,
  li:nth-of-type(2) {
    margin-bottom: 2rem;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 2px;
    font-family: var(--ff-2);
    color: white;
  }

  a:global(.active),
  a:hover {
    color: var(--pc-1);
  }

  @media (min-width: 768px) {
    nav {
      position: relative;
      top: auto;
      right: auto;
    }

    ul {
      display: flex;
      background: none;
      padding: 0;
    }

    li:first-of-type,
    li:nth-of-type(2) {
      margin-bottom: 0;
      margin-right: 2.5rem;
    }

    a {
      color: var(--pc-3);
    }
  }
</style>
