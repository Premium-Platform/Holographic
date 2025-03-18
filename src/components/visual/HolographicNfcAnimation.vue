<template>
  <div class="holographic-container">
    <!-- 背景网格 -->
    <div class="grid-background"></div>
    
    <!-- 中央 NFC 标志 -->
    <div class="nfc-hologram">
      <div class="nfc-logo">
        <div class="nfc-rings">
          <div class="ring ring-1"></div>
          <div class="ring ring-2"></div>
          <div class="ring ring-3"></div>
        </div>
        <div class="nfc-symbol">NFC</div>
      </div>
    </div>
    
    <!-- 数据流 -->
    <div class="data-streams">
      <div v-for="n in 8" :key="n" class="data-stream" :class="`stream-${n}`">
        <div v-for="i in 5" :key="i" class="data-packet" :class="`packet-${i}`"></div>
      </div>
    </div>
    
    <!-- 浮动数据标签 -->
    <div class="floating-labels">
      <div class="label label-1">TLV: 6F84A5</div>
      <div class="label label-2">UID: 04A5B9C2</div>
      <div class="label label-3">APDU: 00A4040007</div>
      <div class="label label-4">SW: 9000</div>
      <div class="label label-5">MIFARE Classic 1K</div>
      <div class="label label-6">Attack: Nested</div>
      <div class="label label-7">Attack: Darkside</div>
      <div class="label label-8">Key: FFFFFFFFFFFF</div>
    </div>
    
    <!-- 扫描线效果 -->
    <div class="scan-line"></div>
    
    <!-- 技术参数 -->
    <div class="tech-specs">
      <div class="spec-item">
        <div class="spec-label">ISO/IEC</div>
        <div class="spec-value">14443A</div>
      </div>
      <div class="spec-item">
        <div class="spec-label">Freq</div>
        <div class="spec-value">13.56MHz</div>
      </div>
      <div class="spec-item">
        <div class="spec-label">Crypto</div>
        <div class="spec-value">CRYPTO1</div>
      </div>
    </div>
    
    <!-- 破解算法可视化 -->
    <div class="attack-visualization">
      <div class="attack-title">MIFARE Classic Attack</div>
      <div class="attack-steps">
        <div class="step step-1">Collect nonces</div>
        <div class="step step-2">Find key correlation</div>
        <div class="step step-3">Brute force</div>
        <div class="step step-4">Key recovery</div>
      </div>
      <div class="attack-progress-bar">
        <div class="progress-fill"></div>
      </div>
    </div>
    
    <!-- 十六进制数据流 -->
    <div class="hex-data-stream">
      <div class="hex-set">
        <div v-for="(row, index) in displayedRows" :key="index" class="hex-row">
          {{ row }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 当前显示的十六进制数据集索引
const currentHexSet = ref(0);

// 十六进制数据集合
const hexDataSets = [
  [
    '26 3F 7C 91 B4 5A 08 F2 E3 D7 C1',
    'A0 4B 3D 7E 62 03 01 0C 06 01 02',
    'D5 0F 2A 8C 5F 1B 9A 34 C7 E2 B8'
  ],
  [
    '04 A5 B9 C2 17 5B 80 39 FF 76 D1',
    '90 AF 6D 8E 12 F3 7A 4C 2B 9D E5',
    '6F 10 84 08 A0 3F 2E 5D 03 7C 4B'
  ],
  [
    '00 A4 04 00 07 D2 76 9C 3E 85 01',
    '6F 84 A5 BF 0C 61 4F 50 87 90 3A',
    '9F 26 08 3E DC 16 79 53 C6 14 22'
  ],
  [
    '60 7B 2C 4D 9E 5F FF FF FF FF FF',
    '50 3A 11 22 33 44 55 66 77 88 99',
    '08 77 8F 08 1A 2B 3C 4D 5E 6F 7A'
  ],
  [
    'A0 B1 C2 D3 03 10 10 E4 F5 A6 B7',
    '67 89 AB CD EF 12 34 56 78 9A BC',
    'FF EE DD CC BB AA 08 04 F1 E2 D3'
  ],
  [
    '00 84 00 00 08 7A 6B 5C 4D 3E 2F',
    '90 AF 1A 2B 3C 4D 5E 6F 7A 8B 9C',
    '4D 49 46 41 52 45 20 43 6C 61 73'
  ]
];

// 当前显示的行数据
const displayedRows = ref([
  hexDataSets[0][0],
  hexDataSets[0][1],
  hexDataSets[0][2]
]);

// 在组件挂载后启动数据切换
onMounted(() => {
  // 快速切换效果
  let rowIndex = 0;
  setInterval(() => {
    // 随机选择一个数据集
    const randomSetIndex = Math.floor(Math.random() * hexDataSets.length);
    // 更新单行数据
    displayedRows.value[rowIndex] = hexDataSets[randomSetIndex][rowIndex];
    // 循环切换行
    rowIndex = (rowIndex + 1) % 3;
  }, 300); // 每300毫秒更新一行
});
</script>

<style scoped>
.holographic-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-color: rgba(13, 17, 23, 0.7);
  border-radius: 8px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5) inset;
}

/* 背景网格 */
.grid-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: gridMove 20s linear infinite;
  opacity: 0.5;
}

@keyframes gridMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 20px 20px;
  }
}

/* 中央 NFC 标志 */
.nfc-hologram {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  perspective: 1000px;
}

.nfc-logo {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rotate3d 15s linear infinite;
}

@keyframes rotate3d {
  0% {
    transform: rotateY(0deg) rotateX(10deg);
  }
  100% {
    transform: rotateY(360deg) rotateX(10deg);
  }
}

.nfc-rings {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid transparent;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ring-1 {
  width: 80%;
  height: 80%;
  border-color: rgba(56, 189, 248, 0.8);
  animation: pulse 2s ease-in-out infinite alternate;
}

.ring-2 {
  width: 100%;
  height: 100%;
  border-color: rgba(126, 231, 135, 0.6);
  animation: pulse 3s ease-in-out infinite alternate;
}

.ring-3 {
  width: 120%;
  height: 120%;
  border-color: rgba(137, 87, 229, 0.4);
  animation: pulse 4s ease-in-out infinite alternate;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.95);
    opacity: 0.7;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.05);
    opacity: 1;
  }
}

.nfc-symbol {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.8);
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  0% {
    text-shadow: 0 0 5px rgba(56, 189, 248, 0.8);
  }
  100% {
    text-shadow: 0 0 20px rgba(56, 189, 248, 1);
  }
}

/* 数据流 */
.data-streams {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.data-stream {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 2px;
  transform-origin: left center;
}

.stream-1 { transform: rotate(0deg); }
.stream-2 { transform: rotate(45deg); }
.stream-3 { transform: rotate(90deg); }
.stream-4 { transform: rotate(135deg); }
.stream-5 { transform: rotate(180deg); }
.stream-6 { transform: rotate(225deg); }
.stream-7 { transform: rotate(270deg); }
.stream-8 { transform: rotate(315deg); }

.data-packet {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(56, 189, 248, 0.8);
  transform: translateY(-50%);
  animation-name: movePacket;
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.packet-1 { animation-delay: 0s; }
.packet-2 { animation-delay: 0.8s; }
.packet-3 { animation-delay: 1.6s; }
.packet-4 { animation-delay: 2.4s; }
.packet-5 { animation-delay: 3.2s; }

@keyframes movePacket {
  0% {
    left: 0;
    opacity: 0;
    transform: translateY(-50%) scale(0.5);
  }
  10% {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
  90% {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
  100% {
    left: 100%;
    opacity: 0;
    transform: translateY(-50%) scale(0.5);
  }
}

/* 浮动数据标签 */
.floating-labels {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.label {
  position: absolute;
  padding: 4px 8px;
  background-color: rgba(22, 27, 34, 0.7);
  border: 1px solid rgba(56, 189, 248, 0.4);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.9);
  font-family: monospace;
  font-size: 12px;
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
  animation-name: float;
  animation-duration: 10s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.label-1 {
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.label-2 {
  top: 50%;
  left: 20%;
  animation-delay: 2s;
}

.label-3 {
  top: 30%;
  left: 70%;
  animation-delay: 1s;
}

.label-4 {
  top: 60%;
  left: 65%;
  animation-delay: 3s;
}

.label-5 {
  top: 15%;
  left: 40%;
  animation-delay: 1.5s;
  border-color: rgba(126, 231, 135, 0.6);
  box-shadow: 0 0 10px rgba(126, 231, 135, 0.4);
}

.label-6 {
  top: 75%;
  left: 30%;
  animation-delay: 2.5s;
  border-color: rgba(255, 123, 114, 0.6);
  box-shadow: 0 0 10px rgba(255, 123, 114, 0.4);
}

.label-7 {
  top: 40%;
  left: 85%;
  animation-delay: 3.5s;
  border-color: rgba(255, 123, 114, 0.6);
  box-shadow: 0 0 10px rgba(255, 123, 114, 0.4);
}

.label-8 {
  top: 75%;
  left: 55%;
  animation-delay: 4s;
  border-color: rgba(248, 227, 161, 0.6);
  box-shadow: 0 0 10px rgba(248, 227, 161, 0.4);
}

@keyframes float {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, -10px);
  }
  100% {
    transform: translate(-10px, 10px);
  }
}

/* 扫描线效果 */
.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, 
    rgba(56, 189, 248, 0), 
    rgba(56, 189, 248, 0.8), 
    rgba(56, 189, 248, 0));
  animation: scanMove 3s linear infinite;
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}

@keyframes scanMove {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}

/* 技术参数 */
.tech-specs {
  position: absolute;
  bottom: 15px;
  left: 15px;
  display: flex;
  gap: 15px;
}

.spec-item {
  background-color: rgba(22, 27, 34, 0.7);
  border: 1px solid rgba(56, 189, 248, 0.4);
  border-radius: 4px;
  padding: 4px 8px;
  font-family: monospace;
  font-size: 11px;
}

.spec-label {
  color: rgba(126, 231, 135, 0.8);
  font-size: 10px;
  margin-bottom: 2px;
}

.spec-value {
  color: rgba(255, 255, 255, 0.9);
}

/* 破解算法可视化 */
.attack-visualization {
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 200px;
  background-color: rgba(22, 27, 34, 0.7);
  border: 1px solid rgba(255, 123, 114, 0.6);
  border-radius: 4px;
  padding: 8px;
  font-family: monospace;
  font-size: 11px;
}

.attack-title {
  color: rgba(255, 123, 114, 0.9);
  font-size: 12px;
  margin-bottom: 5px;
  text-align: center;
}

.attack-steps {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 5px;
}

.step {
  color: rgba(255, 255, 255, 0.7);
  font-size: 10px;
  padding-left: 12px;
  position: relative;
}

.step::before {
  content: ">";
  position: absolute;
  left: 0;
  color: rgba(255, 123, 114, 0.8);
}

.step-1::before { opacity: 0.4; }
.step-2::before { opacity: 0.6; }
.step-3::before { opacity: 0.8; }
.step-4::before { opacity: 1; }

.attack-progress-bar {
  height: 4px;
  background-color: rgba(22, 27, 34, 0.8);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: rgba(255, 123, 114, 0.8);
  width: 75%;
  animation: progressPulse 2s ease-in-out infinite alternate;
}

@keyframes progressPulse {
  0% {
    width: 65%;
  }
  100% {
    width: 85%;
  }
}

/* 十六进制数据流 */
.hex-data-stream {
  position: absolute;
  top: 15px;
  right: 15px;
  font-family: monospace;
  font-size: 10px;
  color: rgba(126, 231, 135, 0.8);
  text-align: right;
  line-height: 1.4;
  width: 220px;
}

.hex-set {
  position: absolute;
  top: 0;
  right: 0;
}

.hex-row {
  margin-bottom: 2px;
  transition: color 0.1s ease;
}

/* 让每行在更新时有短暂的高亮效果 */
.hex-row:nth-child(1) {
  animation: rowHighlight 0.9s infinite;
}

.hex-row:nth-child(2) {
  animation: rowHighlight 0.9s 0.3s infinite;
}

.hex-row:nth-child(3) {
  animation: rowHighlight 0.9s 0.6s infinite;
}

@keyframes rowHighlight {
  0%, 100% {
    color: rgba(126, 231, 135, 0.8);
  }
  10% {
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 0 5px rgba(126, 231, 135, 0.8);
  }
}
</style> 