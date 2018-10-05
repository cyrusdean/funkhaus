<template>
    <header>
        <div class="logo">BU<span>LLI</span><span>TT</span></div>
        <div class="nav-opener">
            <span />
            <span />
        </div>
    </header>
</template>

<script>
</script>

<style lang="scss">
@import 'src/styles/vars';
@import 'static/fonts/fonts.scss';

header {
    display: flex;
    justify-content: space-between;
    padding: 30px;

    > .logo {
        width: 100%;
        text-align: center;
        font-size: 70px;
        font-family: 'ITCFranklinGothicStd-MdCd';
        font-weight: bold;
        > span:first-of-type {
            letter-spacing: 5px;
        }
        > span:last-of-type {
            letter-spacing: 10px;
        }
    }

    > .nav-opener {
        position: relative;
        cursor: pointer;
        width: 45px;

        > span {
            position: absolute;
            background-color: $white;
            width: 100%;
            height: 6px;
            top: -12px;
            bottom: 0;
            margin: auto;
        }

        > span:last-of-type {
            top: 12px;
        }
    }
}
</style>
