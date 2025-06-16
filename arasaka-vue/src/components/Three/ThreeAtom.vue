<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue' // 导入 Vue 的响应式 API 和生命周期钩子
import * as THREE from 'three' // 导入 THREE.js 库
const canvas = ref<HTMLCanvasElement | null>(null) // 创建一个响应式引用，用于存储画布的 DOM 元素
let renderer: THREE.WebGLRenderer // 声明渲染器
let scene: THREE.Scene // 声明场景
let camera: THREE.PerspectiveCamera // 声明相机
let animationId: number // 用于存储动画帧的 ID
// 原子核组
let nucleusGroup: THREE.Group // 声明原子核组
// 定义电子轨道接口
interface ElectronOrbit {
  group: THREE.Group          // 轨道+电子+拖尾整体组
  radius: number              // 轨道半径
  speed: number               // 电子运动速度
  angle: number               // 当前角度
  electron: THREE.Mesh        // 电子球体
  tailPoints: THREE.Vector3[] // 拖尾点数组
  tailLine: THREE.Line        // 拖尾线条
  rotationAxis: THREE.Vector3 // 轨道组绕哪个轴旋转
  rotationSpeed: number       // 轨道组旋转速度
}
const electronOrbits: ElectronOrbit[] = [] // 存储电子轨道的数组
const orbitCount = 3 // 轨道数量
const electronsPerOrbit = 2 // 每个轨道上的电子数量（可调整）
// 创建简洁红色空心原子核，线条少一些
function createSimpleNucleus() {
  const group = new THREE.Group() // 创建一个新的组
  const geometry = new THREE.SphereGeometry(1, 24, 24) // 创建球体几何体
  const edges = new THREE.EdgesGeometry(geometry) // 创建边缘几何体
  const material = new THREE.LineBasicMaterial({ color: 0xff0000 }) // 创建线条材质
  const line = new THREE.LineSegments(edges, material) // 创建线段
  group.add(line) // 将线段添加到组中
  return group // 返回组
}
// 创建圆形轨道线
function createCircularOrbit(radius: number) {
  const points: THREE.Vector3[] = [] // 存储轨道点的数组
  const segments = 64 // 轨道分段数
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2 // 计算每个点的角度
    points.push(new THREE.Vector3(radius * Math.cos(theta), 0, radius * Math.sin(theta))) // 计算点的坐标并添加到数组中
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points) // 创建缓冲几何体
  const material = new THREE.LineBasicMaterial({ color: 0xff0000 }) // 创建线条材质
  return new THREE.Line(geometry, material) // 返回轨道线
}
// 创建电子
function createElectron() {
  const geometry = new THREE.SphereGeometry(0.15, 16, 16) // 创建电子的球体几何体
  const material = new THREE.MeshStandardMaterial({
    color: 0xff3300, // 设置电子颜色
    emissive: 0xff3300, // 设置自发光颜色
    emissiveIntensity: 1, // 设置自发光强度
    metalness: 0.5, // 设置金属度
    roughness: 0.1 // 设置粗糙度
  })
  return new THREE.Mesh(geometry, material) // 返回电子网格
}
// 创建轨道组（轨道线+电子+拖尾）
function createElectronOrbit(radius: number, speed: number, rotationAxis: THREE.Vector3, rotationSpeed: number) {
  const group = new THREE.Group() // 创建轨道组
  const orbitLine = createCircularOrbit(radius) // 创建轨道线
  group.add(orbitLine) // 将轨道线添加到组中
  // 创建电子数组（2个电子均匀分布）
  const electronCount = electronsPerOrbit // 电子数量
  const electrons: THREE.Mesh[] = [] // 存储电子的数组
  for (let i = 0; i < electronCount; i++) {
    const electron = createElectron() // 创建电子
    group.add(electron) // 将电子添加到组中
    electrons.push(electron) // 将电子添加到电子数组中
  }
  // 拖尾数组对应电子
  const tailLength = 20 // 拖尾长度
  const tailPointsArr: THREE.Vector3[][] = [] // 存储拖尾点数组
  const tailLines: THREE.Line[] = [] // 存储拖尾线条数组
  for (let i = 0; i < electronCount; i++) {
    const tailPoints: THREE.Vector3[] = [] // 存储每个电子的拖尾点
    for (let j = 0; j < tailLength; j++) {
      tailPoints.push(new THREE.Vector3(0, 0, 0)) // 初始化拖尾点
    }
    tailPointsArr.push(tailPoints) // 将拖尾点数组添加到拖尾点数组中
    const tailGeometry = new THREE.BufferGeometry().setFromPoints(tailPoints) // 创建拖尾几何体
    const tailMaterial = new THREE.LineBasicMaterial({
      color: 0xff3300, // 拖尾颜色
      transparent: true, // 允许透明
      opacity: 0.6 // 拖尾透明度
    })
    const tailLine = new THREE.Line(tailGeometry, tailMaterial) // 创建拖尾线条
    group.add(tailLine) // 将拖尾线条添加到组中
    tailLines.push(tailLine) // 将拖尾线条添加到拖尾线条数组中
  }
  
  return {
    group,
    radius,
    speed,
    angle: 0,
    electrons,
    tailPointsArr,
    tailLines,
    rotationAxis,
    rotationSpeed
  } // 返回轨道组数据
}
// 组件挂载时执行
onMounted(() => {
  if (!canvas.value) return // 如果画布不存在，退出函数
  scene = new THREE.Scene() // 创建新的场景
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000) // 创建透视相机
  camera.position.set(0, 8, 15) // 设置相机位置
  camera.lookAt(0, 0, 0) // 设置相机朝向
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true, alpha: true }) // 创建 WebGL 渲染器
  renderer.setSize(window.innerWidth, window.innerHeight) // 设置渲染器大小
  renderer.setClearColor(0x000000, 0) // 设置清除颜色为透明黑色
  // 添加光源
  const ambientLight = new THREE.AmbientLight(0x330000, 0.3) // 环境光
  const pointLight = new THREE.PointLight(0xff2200, 1.5, 30) // 点光源
  pointLight.position.set(0, 5, 5) // 设置点光源位置
  scene.add(ambientLight) // 将环境光添加到场景中
  scene.add(pointLight) // 将点光源添加到场景中
  // 创建原子核
  nucleusGroup = createSimpleNucleus() // 创建原子核
  scene.add(nucleusGroup) // 将原子核添加到场景中
  // 创建三条轨道，不同半径和旋转轴及速度
  const axes = [
    new THREE.Vector3(0, 1, 0), // y轴旋转
    new THREE.Vector3(1, 0, 0).normalize(), // x轴旋转
    new THREE.Vector3(1, 1, 0).normalize() // 斜轴旋转
  ]
  const radii = [2.5, 3, 4.5] // 轨道半径数组
  const rotationSpeeds = [0.006, -0.004, 0.005] // 轨道旋转速度数组
  const electronSpeeds = [0.04, 0.03, 0.035] // 电子运动速度数组
  
  // 创建轨道并添加到场景
  for (let i = 0; i < orbitCount; i++) {
    const orbit = createElectronOrbit(radii[i], electronSpeeds[i], axes[i], rotationSpeeds[i]) // 创建轨道
    electronOrbits.push(orbit) // 将轨道添加到轨道数组中
    scene.add(orbit.group) // 将轨道组添加到场景中
  }
  // 动画
  const animate = () => {
    animationId = requestAnimationFrame(animate) // 请求下一个动画帧
    // 轨道组旋转，电子沿轨道运动并带拖尾
    electronOrbits.forEach(orbit => {
      // 轨道组绕指定轴旋转
      orbit.group.rotateOnAxis(orbit.rotationAxis, orbit.rotationSpeed)
      // 电子沿轨道运动
      const segmentCount = 64 // 轨道分段数
      orbit.angle += orbit.speed // 更新当前角度
      if (orbit.angle >= segmentCount) orbit.angle -= segmentCount // 确保角度在分段数范围内
      orbit.electrons.forEach((electron: { position: { set: (arg0: number, arg1: number, arg2: number) => void; clone: () => any } }, idx: number) => {
        // 每个电子角度错开，均匀分布轨道上
        const electronAngle = (orbit.angle + (segmentCount / orbit.electrons.length) * idx) % segmentCount // 计算电子的角度
        const theta = (electronAngle / segmentCount) * Math.PI * 2 // 计算电子的弧度
        const x = orbit.radius * Math.cos(theta) // 计算电子的 x 坐标
        const z = orbit.radius * Math.sin(theta) // 计算电子的 z 坐标
        electron.position.set(x, 0, z) // 更新电子位置
        
        // 拖尾更新
        const tailPoints = orbit.tailPointsArr[idx] // 获取对应电子的拖尾点数组
        tailPoints.pop() // 移除拖尾的最后一个点
        tailPoints.unshift(electron.position.clone()) // 将电子当前位置添加到拖尾点数组的开头
        orbit.tailLines[idx].geometry.setFromPoints(tailPoints) // 更新拖尾线条的几何体
      })
    })
    
    // 原子核慢旋转
    nucleusGroup.rotation.y += 0.004 // 更新原子核的旋转角度
    renderer.render(scene, camera) // 渲染场景
  }
  animate() // 启动动画
  // 处理窗口大小变化
  window.addEventListener('resize', () => {
    if (!canvas.value) return // 如果画布不存在，退出函数
    camera.aspect = window.innerWidth / window.innerHeight // 更新相机的宽高比
    camera.updateProjectionMatrix() // 更新相机的投影矩阵
    renderer.setSize(window.innerWidth, window.innerHeight) // 更新渲染器的大小
  })
})
// 组件卸载前执行
onBeforeUnmount(() => {
  cancelAnimationFrame(animationId) // 取消动画帧请求
  renderer.dispose() // 清理渲染器
  scene.clear() // 清空场景
})
</script>

<template>
  <canvas ref="canvas" class="three-canvas" />
</template>

<style>
.three-canvas {
  width: 80vw;
  height: 80vh;
  background-color: #00000000; /* 透明背景 */
}
</style>