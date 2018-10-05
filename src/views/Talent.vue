<template>

    <main class="content talent">

      <transition-group name="slide-fade">
        <div class="talent-selection-container" v-if="selectedIndex === null" key="0">
          <h1>Talent</h1>

          <div class="talent-grid-container">
            <div class="talent-grid-item" 
              v-for="(talent, i) in talents" :key="i"
              v-bind:style="{ backgroundImage: `url(${talent.sizes.full.url})`}"
              v-on:click="selectedIndex = i"
            >
              <span>{{ talent.title }}</span>
            </div>
          </div>
        </div>

        <div class="talent-detail-container" v-if="selectedIndex !== null" key="1">
          <div class="current-talent">
            <span><span class="accent">TALENT</span> {{ talents[selectedIndex].title.toUpperCase() }}</span>
          </div>

          <div class="talent-video">
            <iframe v-bind:src="talents[selectedIndex].meta.custom_video_url + '?title=0&byline=0&portrait=0'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen />
          </div>

          <div class="close-talent-detail" v-on:click="selectedIndex = null">
            <span>CLOSE</span>
          </div>

          <div class="talent-details">
            <span class="talent-caption">{{ talents[selectedIndex].caption }}</span> <br />
            <span class="talent-description accent">{{ talents[selectedIndex].description }}</span>
          </div>
        </div>
      </transition-group>

    </main>

</template>

<script>
import 'src/utils/player'
export default {
    data() {
        return {
            selectedIndex: null
        }
    },
    mounted() {
        console.log('hello')
        console.log(this.$store)
    },
    computed: {
        talents() {
            return _get(this.$store, 'state.loop[0].attachedMedia', [])
        }
    }
}
</script>

<style lang="scss">
@import 'src/styles/vars';
@import 'static/fonts/fonts.scss';

main {
    > span {
        > .talent-selection-container {
            > h1 {
                font-size: 210px;
                text-align: center;
                margin: 70px 0;
                font-family: 'GTSuperDisplaySuper';
            }

            > .talent-grid-container {
                margin: 0 7% 7% 7%;
                display: flex;
                flex-wrap: wrap;

                > .talent-grid-item {
                    width: 50%;
                    height: 400px;
                    @include cover;
                    position: relative;
                    cursor: pointer;

                    > span {
                        font-size: 60px;
                        font-family: 'GTSuperDisplayMed';
                        position: absolute;
                        top: 50%;
                        right: 0;
                        left: 0;
                        transform: translateY(-50%);
                        text-align: center;
                    }
                }

                > .talent-grid-item:before {
                    content: '';
                    width: 100%;
                    height: 100%;
                    background-color: $black;
                    opacity: 0.2;
                    position: absolute;
                    z-index: 0;
                }

                > .talent-grid-item:hover:before {
                    opacity: 0;
                }
            }
        }

        > .talent-detail-container {
            margin: 40px 0;
            display: flex;
            flex-wrap: wrap;

            > .current-talent,
            > .talent-video,
            > .close-talent-detail {
                // Vimeo videos 16:9 ratio
                height: calc(9 / 16 * 86vw);
                width: 7vw;
                min-width: 80px;
                position: relative;

                > span {
                    font-size: 21px;
                    font-family: 'ITCFranklinGothicStd-MdCd';
                    word-spacing: 5px;
                    white-space: nowrap;
                    height: 20px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -moz-transform: translateX(-50%) translateY(-50%)
                        rotate(-90deg);
                    -webkit-transform: translateX(-50%) translateY(-50%)
                        rotate(-90deg);
                    transform: translateX(-50%) translateY(-50%) rotate(-90deg);
                }
            }

            > .talent-video {
                flex-grow: 1;

                > iframe {
                    width: 100%;
                    height: 100%;
                }
            }

            > .close-talent-detail {
                cursor: pointer;
            }

            > .talent-details {
                margin-top: 40px;
                width: 100%;
                text-align: center;
                font-family: 'GTSuperDisplayMed';

                > .talent-caption {
                    font-size: 65px;
                }

                > .talent-description {
                    display: block;
                    margin-top: 10px;
                    font-size: 32px;
                }
            }
        }
    }

    .slide-fade-enter-active {
        transition: all 0.8s ease;
    }
    .slide-fade-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translateX(100vw);
        opacity: 0;
    }
}

@media #{$lt-desktop} {
    main
        > span
        > .talent-selection-container
        > .talent-grid-container
        > .talent-grid-item {
        width: 100%;
    }
}

@media #{$lt-phone} {
    main > span > .talent-selection-container > h1 {
        font-size: 100px;
    }
}
</style>
