// ================================
// particles-bg.js — Three.js Neural Particle Background
// Responsive to theme (dark/light) + mouse parallax
// ================================

(function () {
    const container = document.getElementById('particles-bg');
    if (!container) return;

    // Wait for Three.js to load
    if (typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Particle system — fewer on small screens for performance
    const COUNT = window.innerWidth < 768 ? 800 : 1500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 800;
        positions[i3 + 1] = (Math.random() - 0.5) * 800;
        positions[i3 + 2] = (Math.random() - 0.5) * 600;

        // Colors: mix of cyan, blue, purple
        const hue = 0.55 + Math.random() * 0.2; // 0.55 (cyan) to 0.75 (purple)
        const sat = 0.6 + Math.random() * 0.4;
        const light = 0.4 + Math.random() * 0.3;
        const color = new THREE.Color().setHSL(hue, sat, light);
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;

        sizes[i] = Math.random() * 3 + 1;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
        size: 2.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse tracking for parallax
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // Theme responsiveness
    function updateTheme() {
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            material.opacity = 0.35;
        } else {
            material.opacity = 0.7;
        }
    }
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Smooth mouse follow
        targetX += (mouseX - targetX) * 0.02;
        targetY += (mouseY - targetY) * 0.02;

        // Rotate particles slowly
        particles.rotation.y += 0.0003;
        particles.rotation.x += 0.0001;

        // Parallax camera movement
        camera.position.x += (targetX * 30 - camera.position.x) * 0.05;
        camera.position.y += (-targetY * 30 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }
    animate();

    // Responsive resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
})();
