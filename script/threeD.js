    // creating scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 10;
    camera.position.y = 3;

    renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth * 0.7, window.innerHeight * 0.7);

    const foxBox = document.querySelector('.fox-anim');
    foxBox.appendChild(renderer.domElement);

    // lighting
    const aLight = new THREE.AmbientLight(0x404040, 1.2);
    scene.add(aLight);

    const pLight = new THREE.PointLight(0xffffff, 1.2);
    pLight.position.set(7, 7, 5);
    scene.add(pLight);

    // const helper = new THREE.PointLightHelper(pLight);
    // scene.add(helper);

    // loading model
    let loader = new THREE.GLTFLoader();
    let obj = null;
    loader.load('image/main/fox/scene.gltf', function(gltf) {
      obj = gltf;
      obj.scene.scale.set(1.3, 1.3, 1.3);

      scene.add(obj.scene);
    });

    // amination model
    function animate() {
      requestAnimationFrame(animate);

      if(obj) {
        obj.scene.rotation.y -= 0.01;
      }
      renderer.render(scene, camera);
    }
    animate();