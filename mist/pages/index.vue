<template>
  <div id="staking" class="container-fluid scrollspy">
    <a href="#" class="addLiquid"> Add Liquidity </a>

    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-12">
          <Tool title="Stake Now">
            <form>
              <label>How much do you want to stake? (MIST)</label>

              <input
                type="text"
                class="form-control"
                name="stake"
                placeholder="0"
              />

              <div class="info">
                <strong>Balance:</strong> 40
                <a href="#"> Use Max </a>
              </div>

              <button>Approve</button>
            </form>
          </Tool>
        </div>

        <div class="col-lg-6 col-md-12 col-12">
          <Tool title="Participation">
            <div class="stat">
              Total Staked
              <span>100</span>
            </div>

            <div class="stat">
              Earning
              <span>7 <small>per day</small></span>
            </div>

            <div class="stat">
              APY
              <span>xx</span>
            </div>

            <hr />

            <div class="stakeItem">
              <div class="stat">
                Staked At
                <span>xxxxx</span>
              </div>
              <div class="stat">
                Available to withdraw in
                <span>4 days</span>
              </div>
              <div class="stat">
                Amount
                <span>10,000</span>
              </div>

              <button class="disabled">Withdraw</button>

              <button class="disabled">Unstake</button>
            </div>
          </Tool>
        </div>
      </div>
    </div>
    <img src="@/assets/img/divider.png" class="divider" />
  </div>
</template>

<script>
import Tool from '~/components/tool'
export default {
  components: { Tool },
}
</script>
