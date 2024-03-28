<template>
  <div class="container">
    <div class="music-control">
      <div class="music-text">
        <div class="music-logo">
          <img alt="" src="@/assets/duck.jpg"/>
        </div>
        <div class="music-name">
          <p style="font-size: 18px">
            Hello World
          </p>
          <p style="font-size: 14px; color: #7093DB">
            computer
          </p>
        </div>
        <el-icon class="before" size="large"><ArrowLeftBold /></el-icon>
        <div class="stop">
          <div v-show="isPlay" @click="playMusic">
            <el-icon size="large" @click="playPre"><CaretRight /></el-icon>
          </div>
          <div v-show="!isPlay" @click="pauseMusic">||</div>
        </div>
        <el-icon class="next" size="large" @click="playNext"><ArrowRightBold /></el-icon>
        <audio class="audio" ref="audioPlayer" @timeupdate="updateProgress" @ended="playNext">
          <source src="@/assets/music.mp3">
        </audio>

        <div class="bar">
          <div class="bar_in" :style="{width: progress + '%'}">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ArrowLeftBold, ArrowRightBold, CaretRight } from '@element-plus/icons-vue'
  import { reactive, ref, computed } from 'vue'

  let isPlay = ref(true)
  const audioPlayer = ref(null);
  const progress = ref(0)
  // const currentMusicIndex = ref(0);
  // const musicList = ['@/assets/music.mp3', '@/assets/mean.mp3', '@/assets/music3.mp3'] 
  // const currentMusic = ref(musicList[currentMusicIndex])

  const playMusic = () => {
    // audioPlayer.value.getElementsByTagName('source')[0].src = currentMusic
    // console.log(currentMusic);
    // console.log(audioPlayer.value);
    audioPlayer.value.play();
    isPlay.value = false;
  }

  const pauseMusic = () => {
    audioPlayer.value.pause();
    isPlay.value = true;
  }

  const updateProgress = () => {
    if (audioPlayer.value) {
      const percent = (audioPlayer.value.currentTime / audioPlayer.value.duration) * 100;
      progress.value = percent;
    }
  }

  // 点击播放下一首
  const playNext = () => {
    const nextIndex = (currentMusicIndex.value + 1) % musicList.value.length;
    audioPlayer.value.getElementsByTagName('source')[0].src = musicList.value[nextIndex]
    console.log(audioPlayer.value);
    audioPlayer.value.play();
    isPlay.value = false;
  };

  // 点击播放上一首
  const playPre = () => {
    const preIndex = (currentMusicIndex.value - 1) % musicList.value.length;
    currentMusicIndex.value = preIndex;
  };
</script>

<style scoped>
  .music-control {
    display: flex;
    position: absolute;
    width: 97%;
    height: 100px;
    bottom: 0px;
    background-color: rgba(255, 255, 255, 0.8);
    padding-top: 20px;
  }

  .music-text {
    position: relative;
    display: flex;
    width: 300px;
    height: 100%;
  }

  .music-logo img {
    width: 60px;
    height: 60px;
    margin: 5px 20px;
  }

  .music-name {
    width: 200px;
    height: 100%;
  }

  .music-name p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap !important;
    margin: 10px 0;
  }

  .before {
    position: absolute;
    left: 250px;
    top: 25px;
  }

  .stop {
    font-size: 18px;
    position: absolute;
    left: 300px;
    top: 20px;
  }

  .next {
    position: absolute;
    left: 355px;
    top: 25px;
  }

  .audio {
    position: absolute;
    top: 18px;
    left: 450px;
  }

  .bar {
    position: absolute;
    top: 27px;
    left: 500px;
    width: 300px;
    height: 10px;
    border: 1px solid #000000;
    border-radius: 7px;
    padding: 1px;
  }

  .bar_in {
    width: 50%;
    height: 100%;
    border-radius: 7px;
    background-color: #7093DB;
  }
</style>