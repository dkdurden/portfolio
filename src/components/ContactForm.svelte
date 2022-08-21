<script>
  let submitted = false;
  let nameInvalid = false;
  let emailInvalid = false;
  let msgInvalid = false;
</script>

<form method="POST" class:submitted data-netlify="true">
  <div class="form-group">
    <label for="name">Name</label>
    <input
      class="form-control"
      type="text"
      name="name"
      id="name"
      placeholder="Insert your name here..."
      required
      on:invalid={() => (nameInvalid = true)}
      on:input={() => (nameInvalid = false)}
    />

    {#if nameInvalid}
      <span class="invalid-text">This field is required</span>
    {/if}
  </div>

  <div class="form-group">
    <label for="email">Email Address </label>
    <input
      class="form-control"
      type="email"
      name="email"
      id="email"
      placeholder="example@email.com"
      required
      on:invalid={() => (emailInvalid = true)}
      on:input={() => (emailInvalid = false)}
    />

    {#if emailInvalid}
      <span class="invalid-text">This field is required</span>
    {/if}
  </div>

  <div class="form-group">
    <label for="message">Message </label>
    <textarea
      class="form-control"
      type="text"
      name="message"
      id="message"
      placeholder="How can I help?"
      required
      on:invalid={() => (msgInvalid = true)}
      on:input={() => (msgInvalid = false)}
    />

    {#if msgInvalid}
      <span class="invalid-text">This field is required</span>
    {/if}
  </div>

  <button class="button__secondary" on:click={() => (submitted = true)}>
    <span class="button__text">Send Message</span>
  </button>
</form>

<style lang="scss">
  label {
    margin: 0.5rem 0;
    font-size: 0.8125rem;
    line-height: 2.31;
    font-weight: var(--fw-bold);
    font-family: var(--ff-2);
  }

  textarea {
    max-width: 100%;
  }
</style>
