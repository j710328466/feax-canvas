console.log(THREE)

// 场景
var scene = new THREE.Scene()
// 相机
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// 渲染器
var renderer = new THREE.WebGLRenderer()

// 设置视图页面大小
renderer.setSize( window.innerWidth, window.innerHeight )

document.body.appendChild( renderer.domElement )

// 添加素材
var geometry = new THREE.BoxGeometry(1, 1, 1)
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
var cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

render()

// 创建一个每秒 60 次的循环
function render() {
    requestAnimationFrame( render )
    cube.rotation.x += 0.1
    cube.rotation.y += 0.1
    renderer.render( scene, camera )
}