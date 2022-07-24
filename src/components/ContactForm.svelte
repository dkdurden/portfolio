<script>
  let submitted = false;
</script>

<form action="" class:submitted>
  <div class="form-group">
    <label for="name">Name</label>
    <input
      class="form-control"
      type="text"
      name="name"
      id="name"
      placeholder="Insert your name here..."
      required
    />
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
    />
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
    />
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
