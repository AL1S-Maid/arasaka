<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
// 创建一个响应式引用，用于存储容器的 DOM 元素
const container = ref<HTMLDivElement | null>(null)
// 声明变量以存储场景、相机、渲染器和锥体网格
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let cone: THREE.Mesh
let animationFrameId: number // 用于存储动画帧的 ID
// 初始化场景
const initScene = () => {
  if (!container.value) return // 如果容器不存在，退出函数
  const width = container.value.clientWidth // 获取容器的宽度
  const height = container.value.clientHeight // 获取容器的高度
  // 创建新的 THREE.js 场景
  scene = new THREE.Scene()
  // 创建透视相机
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.z = 4 // 设置相机位置
  // 创建 WebGL 渲染器
  renderer = new THREE.WebGLRenderer({ alpha: true }) // 允许透明背景
  renderer.setSize(width, height) // 设置渲染器的大小
  container.value.appendChild(renderer.domElement) // 将渲染器的 DOM 元素添加到容器中
  // 创建锥体几何体
  const geometry = new THREE.ConeGeometry(2, 2, 3)
  // 创建基础材质，设置颜色和线框模式
  const material = new THREE.MeshBasicMaterial({
    color: '#ff003c', // 设置锥体颜色
    wireframe: true // 使用线框模式
  })
  // 创建锥体网格并将其添加到场景中
  cone = new THREE.Mesh(geometry, material)
  scene.add(cone)
}
// 动画函数
const animate = () => {
  // 使锥体绕 Y 轴和 X 轴旋转
  cone.rotation.y += 0.01
  cone.rotation.x += 0.005
  renderer.render(scene, camera) // 渲染场景
  animationFrameId = requestAnimationFrame(animate) // 请求下一个动画帧
}
// 处理窗口大小变化
const handleResize = () => {
  if (!container.value) return // 如果容器不存在，退出函数
  const width = container.value.clientWidth // 获取新的宽度
  const height = container.value.clientHeight // 获取新的高度
  camera.aspect = width / height // 更新相机的宽高比
  camera.updateProjectionMatrix() // 更新相机的投影矩阵
  renderer.setSize(width, height) // 更新渲染器的大小
}
// 组件挂载时执行
onMounted(() => {
  initScene() // 初始化场景
  animate() // 启动动画
  window.addEventListener('resize', handleResize) // 添加窗口大小变化的事件监听
})
// 组件卸载前执行
onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId) // 取消动画帧请求
  renderer.dispose() // 清理渲染器
  window.removeEventListener('resize', handleResize) // 移除窗口大小变化的事件监听
})
</script>

<template>
  <div ref="container" class="triangle-container"></div>
</template>

<style scoped lang="scss">
@use '@/styles/base' as *;
.triangle-container {
  width: 100vw;
  height: 100vh;
  background: transparent;
  margin: auto;
  @include flex-style;
}
</style>