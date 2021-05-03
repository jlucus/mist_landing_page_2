<template>
  <main id="panel">
    <Sticky :message="errorMessage"></Sticky>
    <Sticky
      type="connectWallet"
      :message="walletMessage"
      to="#"
      btn-text="Connect Wallet"
    ></Sticky>
    <Nuxt />
    <div id="footer" class="container-fluid">
      <Footer></Footer>
    </div>
  </main>
</template>

<style></style>
<script>
import Sticky from '~/components/sticky'
import Footer from '~/components/footer'
export default {
  components: { Footer, Sticky },
  data() {
    return {
      errorMessage:
        'Your wallet network is not on Binance Smart Chain. Please switch to this before proceeding.',
      walletMessage: "It seems you haven't connected your wallet.",
    }
  },
}
</script>
