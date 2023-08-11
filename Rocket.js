/// <reference path="./Lib/TypeScript/BABYLON.2.1.d.ts"/>



window.addEventListener('DOMContentLoaded', function () {

    var canvas = document.getElementById("renderCanvas04");

    var engine = new BABYLON.Engine(canvas, true);

    var scene = new BABYLON.Scene(engine, true);

    var camera = new BABYLON.ArcRotateCamera("camera", 1, 2, 50, new BABYLON.Vector3(0, 0, 0), scene);
    camera.useAutoRotationBehavior = true;
    camera.wheelPrecision = 100;
    camera.lowerRadiusLimit = 1 ;
    camera.upperRadiusLimit = -10 ;
    camera.useFramingBehavior = true;

    camera.attachControl(sun, true);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero()); 

    

    //camera.lowerRadiusLimit = 0 ;
    //camera.upperRadiusLimit = 50 ;
    //camera.panningSensibility = 0;
    //camera.minZ = 0.3 ;
    //camera.setTarget(ground);
    //camera.framingBehavior.radiusScale = 3; 
    
    // This creates and positions an arc rotate camera
   /* var camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(0), BABYLON.Tools.ToRadians(0), 10, BABYLON.Vector3.Zero(), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    scene.onBeforeRenderObservable.add(() => {
        // Disable rotating the camera and limit zoom range
        camera.alpha = 0;
        camera.beta = 0;
        camera.radius = Math.max(camera.radius, 2);
    }); */


    // camera
    /*var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(0, 0, -0), scene);
    camera.setPosition(new BABYLON.Vector3(0, 0, -20));
    camera.attachControl(canvas, true);*/

    //Camera tree
   /* var camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2, -Math.PI / 4, 50, BABYLON.Vector3.Zero(), scene);

	camera.attachControl(canvas, true);

    camera.useFramingBehavior = true;*/

    
    //Camera two
    /*window.addEventListener("dblclick", function (e) {
        console.log("scene.meshUnderPointer", scene.meshUnderPointer);
        if (scene.meshUnderPointer) {
            let mesh = scene.meshUnderPointer;
            this.allowControl = true;
            let canvas = scene.getEngine().getRenderingCanvas();
            camera.detachControl(canvas);
            var newCamera = new BABYLON.ArcRotateCamera("can", 3, 3, 3, camera.position, scene);
            newCamera.attachControl(canvas, true);
            //  newCamera.setPosition(camera.position);
            //  newCamera.radius = 1;
            newCamera.target.x = mesh.position.x;
            newCamera.target.y = mesh.position.y;
            newCamera.target.z = mesh.position.z;
            var bx = mesh._boundingInfo.boundingBox;
            // mesh.enableEdgesRendering();
            var mx =Math.max(Math.max(Math.max(Math.abs(bx.maximum.x),Math.abs(bx.minimum.x)),
                    Math.max(Math.abs(bx.maximum.y),Math.abs(bx.minimum.y)) ) ,
                    Math.max(Math.abs(bx.maximum.z),Math.abs(bx.minimum.z)));
            newCamera.radius = 1. + mx * 3;
            newCamera.alpha = - mesh.rotation.y;
            newCamera.beta = 3.14159265 / 2. + mesh.rotation.x;}
    }.bind(this));*/

    

    //var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 0, 10), scene);

    //Adding a light
	//var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);



    

    /*var fish = BABYLON.SceneLoader.Append("./","Assets/Babylon/BR143.babylon",scene,function(meshes) {
        scene.createDefaultCameraOrLight(true,true,true);
    });*/

    //generate skybox
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 100, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;
    skybox.infiniteDistance = true;

    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./HDRI/SkyEnvironment.env", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skybox.rotation.y = -Math.PI / 2;

    //var reflectionTexture = new BABYLON.HDRCubeTexture("./HDRI/wooden_lounge_2k.hdr", scene,128, false, true, false, true);
    
    // Environment Texture
    //var hdrTexture = new BABYLON.HDRCubeTexture("../Jan-2022_WorkOut/HDRI/wooden_lounge_2k.hdr", scene, 512);  

    /* // Async call
     BABYLON.SceneLoader.Append("https://www.babylonjs.com/scenes/espilit/",
     "espilit.incremental.babylon", scene, function () {
         scene.activeCamera.attachControl(canvas, true);
     });*/

   // Async call
    /* var fish = BABYLON.SceneLoader.Append("","https://vedantu-otm-media.s3.ap-southeast-1.amazonaws.com/3D+content/BR143_R%26D.glb", scene, function () {
         scene.activeCamera.attachControl(canvas, true);
     });*/

     //Sounds
     /*var soundSprite = new BABYLON.Sound(
        "Violons",
        "/Sound/Forest.mp3",
        scene,
        null,
        { loop: true, autoplay: true, length: 9.200, offset: 14.000 }
      );*/

      // Load the sound and play it automatically once ready
    /*var music = new BABYLON.Sound("Music", "/Sound/Animals.wav", scene, null, {
        loop: true,
        autoplay: true
    });*/

    /*//space botton sound
    var gunshot = new BABYLON.Sound("gunshot", "/Sound/Animals.wav", scene);

    window.addEventListener("mousedown", function(evt) {
      // left click to fire
      if (evt.button === 0) {
        gunshot.play();
      }
    });
    
    window.addEventListener("keydown", function(evt) {
      // Press space key to fire
      if (evt.keyCode === 32) {
        gunshot.play();
      }
    });*/

   /*var fish = BABYLON.SceneLoader.ImportMesh("", "assets/", "BR143_Revamp_v3.glb", scene,
        function (newMeshes) {
            scene.createDefaultCameraOrLight(true, true, true);
            //camera.target = newMeshes[0];
        }); */

        // Load the model
   /*var sun = BABYLON.SceneLoader.ImportMesh("","./Assets/Sun/", "Sun.glb", scene, function (newMeshes) {
        var gl = new BABYLON.GlowLayer("glow", scene, { 
            mainTextureFixedSize: 256,
            blurKernelSize: 64
        });*/

   //Sun
    var sun = BABYLON.SceneLoader.ImportMesh("","assets/Pslv/","pslv.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        
        //var gl = new BABYLON.GlowLayer("glow", scene);
        
        
    });

    // GUI
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var text1 = new BABYLON.GUI.TextBlock();
    text1.text = "PSLV Rocket";
    text1.color = "white";
    text1.fontSize = 24;

    
    advancedTexture.addControl(text1);

    

    //Mercury
    /*var mercury = BABYLON.SceneLoader.ImportMesh("","assets/Sun/","Mercury.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });*/

    //Venus 
   /* var Venus = BABYLON.SceneLoader.ImportMesh("","assets/Sun/","Venus.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });*/

    //Earth 
    /*var Earth = BABYLON.SceneLoader.ImportMesh("","assets/Sun/","earth.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });*/

    //moon 
   /* var moon = BABYLON.SceneLoader.ImportMesh("","assets/Sun/","moon.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });*/

    //Mars 
   /* var Mars = BABYLON.SceneLoader.ImportMesh("","assets/Sun/","Mars.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });*/

    //Jupiter
    /*var Jupiter = BABYLON.SceneLoader.ImportMesh("","assets/Sun/","Jupiter.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });*/

    //saturn 
   /* var saturn = BABYLON.SceneLoader.ImportMesh("","assets/Sun/","saturn.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });*/

    //uranus 
   /*var uranus = BABYLON.SceneLoader.ImportMesh("","assets/Sun/","uranus.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });*/

    //neptune
    /*var neptune = BABYLON.SceneLoader.ImportMesh("","assets/Sun/","neptune.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });*/

    //pluto 
    /*var pluto = BABYLON.SceneLoader.ImportMesh("","assets/Sun/","pluto.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });*/

    //Line
    /*var Line = BABYLON.SceneLoader.ImportMesh("","assets/Sun/","Line.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        var gl = new BABYLON.GlowLayer("glow", scene);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });*/

    //Stars
    /*var Stars = BABYLON.SceneLoader.ImportMesh("","assets/Sun/","Stars.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        var gl = new BABYLON.GlowLayer("glow", scene);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });*/



    //Babylon sence loader.....
    /*BABYLON.SceneLoader.ImportMesh("","","./Assets/Sun/Sun.babylon", scene,function(Meshes) {
        
        Meshes[0].position = new BABYLON.Vector3(0,0,0);
    }); */
    
    
   

   
    /*var muscles = BABYLON.SceneLoader.ImportMesh("","assets/BR009/","BR009.glb",scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, false, true);
    });*/

    /*var tendon = BABYLON.SceneLoader.ImportMesh("","assets/BR009/","Tendon.glb",scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        tendon.linkWithMesh(muscles);
    });*/
    

    /*var ligaments = BABYLON.SceneLoader.ImportMesh("","assets/BR009/","Ligaments.glb",scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        ligaments.linkWithMesh(muscles);
    });*/

    //DynamicTexture
    /*var outputplane = BABYLON.Mesh.CreatePlane("outputplane", 2, scene,false);
    outputplane.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL;
    outputplane.material = new BABYLON.StandardMaterial("outputplane", scene);
    outputplane.position = new BABYLON.Vector3(1, 0, 0);
    outputplane.scaling.x = -1;
    outputplane.scaling.y = -1;
    outputplane.scaling.z = -1;

    outputplane.scaling.y = 0.4;
    outputplane.scaling.x = 0.4;
    outputplaneTexture = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
    outputplaneTexture.hasAlpha = true;
    outputplane.material.diffuseTexture = outputplaneTexture;
    outputplane.material.specularColor = new BABYLON.Color3(0, 0, 0);
    outputplane.material.emissiveColor = new BABYLON.Color3(1, 1, 1);
    outputplane.material.backFaceCulling = false;
    outputplaneTexture.drawText("Sun", null, 200, "bold 60px sans-serif", "black");

    //DynamicTexture
    var outputplane = BABYLON.Mesh.CreatePlane("outputplane", 2, scene, false);
    outputplane.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL;
    outputplane.material = new BABYLON.StandardMaterial("outputplane", scene);
    outputplane.position = new BABYLON.Vector3(0, 0, 0);
    //outputplane.scaling.x = -1;
    //outputplane.scaling.y = -1;
    //outputplane.scaling.z = -1;

    outputplane.scaling.y = 0.4;
    outputplane.scaling.x = 0.4;
    outputplaneTexture = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
    outputplaneTexture.hasAlpha = true;
    outputplane.material.diffuseTexture = outputplaneTexture;
    outputplane.material.specularColor = new BABYLON.Color3(0, 0, 0);
    outputplane.material.emissiveColor = new BABYLON.Color3(1, 1, 1);
    outputplane.material.backFaceCulling = false;
    outputplaneTexture.drawText("Earth", null, 200, "bold 60px sans-serif", "black");*/


    // GUI
    /*var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var rect1 = new BABYLON.GUI.Rectangle();
    rect1.width = 0.2;
    rect1.height = "40px";
    rect1.cornerRadius = 20;
    rect1.color = "Orange";
    rect1.thickness = 4;
    rect1.background = "green";
    advancedTexture.addControl(rect1);
    rect1.linkWithMesh(sun);   
    rect1.linkOffsetY = -150;

    var label = new BABYLON.GUI.TextBlock();
    label.text = "Sun";
    rect1.addControl(label);*/

   /* var target = new BABYLON.GUI.Ellipse();
    target.width = "40px";
    target.height = "40px";
    target.color = "Orange";
    target.thickness = 4;
    target.background = "green";
    advancedTexture.addControl(target);
    target.linkWithMesh(sun);  */ 

    /*var line = new BABYLON.GUI.Line();
    line.lineWidth = 4;
    line.color = "Orange";
    line.y2 = 20;
    line.linkOffsetY = -20;
    advancedTexture.addControl(line);
    line.linkWithMesh(sun); 
    line.connectedControl = rect1; */
    
    /*//LineCreate
    var lines = BABYLON.Mesh.CreateLines("lines", [
        new BABYLON.Vector3(-1, 0, 0),
        new BABYLON.Vector3(1, 0, 0),
        ], scene);
    lines.position = new BABYLON.Vector3(0.8, 4.4, 0);

    //LineCreate
    var lines = BABYLON.Mesh.CreateLines("lines", [
        new BABYLON.Vector3(-1, 0, 0),
        new BABYLON.Vector3(1, 0, 0),
        ], scene);
    lines.position = new BABYLON.Vector3(-1.4, 4.3, -0.1);
    lines.rotation = new BABYLON.Vector3(0,3.2,0);

    //LineCreate
    var lines = BABYLON.Mesh.CreateLines("lines", [
        new BABYLON.Vector3(-1, 0, 0),
        new BABYLON.Vector3(1, 0, 0),
        ], scene);
    lines.position = new BABYLON.Vector3(-1.4, 4.3, 0.1);
    lines.rotation = new BABYLON.Vector3(0,-3.2,0);*/

    //Video import....
      // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
     /* var ground = BABYLON.Mesh.CreateGround("ground1", 100, 50, 2, scene);
      //camera.target = ground;

      // Move the sphere upward 1/2 its height
      ground.position.y = 1;
      ground.rotation.x = Math.PI/2;

      var mat = new BABYLON.StandardMaterial("mat", scene);

      var videoTexture = new BABYLON.VideoTexture("video", ["/Video/HeartAni.mp4"], scene, true, true);

      mat.diffuseTexture = videoTexture;
      ground.material = mat;
      mat.backFaceCulling= false;
      

      scene.onPointerUp = function () {
         videoTexture.video.play();
      }*/
    
     /*// GUI
     var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
     advancedTexture.idealWidth = 600;
     
     var rect1 = new BABYLON.GUI.Rectangle();
     rect1.width = 0.2;
     rect1.height = "40px";
     rect1.cornerRadius = 20;
     rect1.color = "Orange";
     rect1.thickness = 4;
     rect1.background = "green";
     advancedTexture.addControl(rect1);
     rect1.linkWithMesh(null);   
     rect1.linkOffsetY = -150;
 
     var label = new BABYLON.GUI.TextBlock();
     label.text = "Sphere";
     rect1.addControl(label);
 
     var target = new BABYLON.GUI.Ellipse();
     target.width = "40px";
     target.height = "40px";
     target.color = "Orange";
     target.thickness = 4;
     target.background = "green";
     advancedTexture.addControl(target);
     target.linkWithMesh(null);   
 
     var line = new BABYLON.GUI.Line();
     line.lineWidth = 4;
     line.color = "Orange";
     line.y2 = 20;
     line.linkOffsetY = -20;
     advancedTexture.addControl(line);
     line.linkWithMesh(null); 
     line.connectedControl = rect1; */

    //Partical effect....
   /* var emitter0 = BABYLON.Mesh.CreateSphere("emitter0", 0.1, scene);
    emitter0.isVisible = false;

    
    

    var particleSystem = new BABYLON.ParticleSystem("particles", 4000, scene);
    particleSystem.particleTexture = new BABYLON.Texture("./Images/flare.png", scene);

    

    particleSystem.minSize = 0.01;
    particleSystem.maxSize = 0.1;
    particleSystem.minLifeTime = 0.5;
    particleSystem.maxLifeTime = 2.0;
    particleSystem.minEmitPower = 0.5;
    particleSystem.maxEmitPower = 3.0;
    particleSystem.emitter = emitter0;
    particleSystem.emitRate = 300;
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.direction1 = new BABYLON.Vector3(0, -1, 0);
    particleSystem.direction2 = new BABYLON.Vector3(0, -1, 0);
    particleSystem.color1 = new BABYLON.Color4(1, 1, 0, 1);
    particleSystem.color2 = new BABYLON.Color4(1, 0.5, 0, 1);
    particleSystem.gravity = new BABYLON.Vector3(0, -1.0, 0);

    
    
    particleSystem.renderingGroupId = 1;
    particleSystem.start();
    

    BABYLON.NodeMaterial.ParseFromSnippetAsync("#X3PJMQ", scene).then((nodeMaterial) => {
        nodeMaterial.createEffectForParticles(particleSystem);

        scene.debugLayer.show({ showExplorer: true, embedMode: true }).then(() => {
            scene.debugLayer.select(nodeMaterial, "INPUTS");
        });
    });*/



    //ParticalSystem_01.......
   /* var fountain = BABYLON.Mesh.CreateBox("foutain", 0.1, scene);
    fountain.visibility = 0.1;

    // Create a particle system
    var particleSystem;
    var useGPUVersion = true;

    var createNewSystem = function() {
        if (particleSystem) {
            particleSystem.dispose();
        }

         if (useGPUVersion && BABYLON.GPUParticleSystem.IsSupported) {
            particleSystem = new BABYLON.GPUParticleSystem("particles", { capacity:1000000}, scene);
            particleSystem.activeParticleCount = 200000;
         } else {
            particleSystem = new BABYLON.ParticleSystem("particles", 50000 , scene);
         }

        var customEmitter = new BABYLON.CustomParticleEmitter();

        let id = 0;
        customEmitter.particlePositionGenerator = (index, particle, out) => {
            out.x = Math.cos(id) * 5;
            out.y = Math.sin(id) * 5;
            out.z = 0;
            id += 0.01;
        }

        customEmitter.particleDestinationGenerator = (index, particle, out) => {
            out.x = 0;
            out.y = 0;
            out.z = 0;
        }
    
        particleSystem.emitRate = 10000;
        particleSystem.particleEmitterType = customEmitter;
        particleSystem.particleTexture = new BABYLON.Texture("/textures/flare.png", scene);
        particleSystem.maxLifeTime = 10;
        particleSystem.minSize = 0.01;
        particleSystem.maxSize = 0.1;
        particleSystem.emitter = fountain;
    
        particleSystem.start();
    }

    createNewSystem();


    var alpha = 0;
    var moveEmitter = false;
    var rotateEmitter = false;

    scene.registerBeforeRender(function() {
        if (moveEmitter) {
            fountain.position.x = 5 * Math.cos(alpha);
            fountain.position.z = 5 * Math.sin(alpha);
        }

        if (rotateEmitter) {
            fountain.rotation.x += 0.01;
        }

        alpha += 0.01;
    });*/



    //Partical System_02...
     // Emitter object
    /* var emitter = new BABYLON.ConeParticleEmitter();
     //emitter.position = new BABYLON.Vector3(0.0, 0.6, 0.0);

     //var fountain = BABYLON.Mesh.CreateBox("fountain", 0.01, scene);
     var fountain = BABYLON.MeshBuilder.CreateCylinder("fountain", {height: .01, diameter: 0.2}, scene);
     fountain.position.y = 0.5;
     
     var child = new BABYLON.TransformNode();
     child.parent = fountain;
     child.position.y = 0.5;

     var cup = BABYLON.MeshBuilder.CreateCylinder("cup", {height: 1, diameter: 0.9}, scene);
     
     // Create core material
     var cupMat = new BABYLON.StandardMaterial("coreMat", scene)
     cupMat.diffuseColor = new BABYLON.Color3(0.3773, 0.0930, 0.0266); 
     cupMat.specularColor = BABYLON.Color3.Black();

     fountain.material = cupMat;
     cup.material = cupMat
 
     var particleSystem = new BABYLON.ParticleSystem("particles", 30 , scene, null, true);
     particleSystem.particleTexture = new BABYLON.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Steam/T_SteamSpriteSheet.png", scene, true,
         false, BABYLON.Texture.TRILINEAR_SAMPLINGMODE);

     particleSystem.startSpriteCellID = 0;
     particleSystem.endSpriteCellID = 31;
     particleSystem.spriteCellHeight = 256;
     particleSystem.spriteCellWidth = 128;
     particleSystem.spriteCellChangeSpeed = 4;

     particleSystem.minScaleX = 1.0;
     particleSystem.minScaleY = 2.0;
     particleSystem.maxScaleX = 1.0;
     particleSystem.maxScaleY = 2.0;

     particleSystem.addSizeGradient(0, 0.0, 0.0);
     particleSystem.addSizeGradient(1.0, 1, 1);

     particleSystem.translationPivot = new BABYLON.Vector2(0, -0.5);

     // Where the particles come from
     var radius = 0.1;
     var angle = Math.PI;
     var coneEmitter = new BABYLON.ConeParticleEmitter(radius, angle);
     coneEmitter.radiusRange = 0;
     coneEmitter.heightRange = 0;

     particleSystem.particleEmitterType = coneEmitter;
     particleSystem.emitter= child;

     // Life time of each particle (random between...
     particleSystem.minLifeTime = 4.0;
     particleSystem.maxLifeTime = 4.0;

     particleSystem.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_Y;

     // Color gradient over life
     particleSystem.addColorGradient(0, new BABYLON.Color4(1, 1, 1, 0));
     particleSystem.addColorGradient(0.5, new BABYLON.Color4(1, 1, 1, 70/255));
     particleSystem.addColorGradient(1.0, new BABYLON.Color4(1, 1, 1, 0));

     // Emission rate
     particleSystem.emitRate = 6 ;

     // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
     particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;

     // Set the gravity of all particles
     particleSystem.gravity = new BABYLON.Vector3(0, 0, 0);

     // Speed
     particleSystem.minEmitPower = 0;
     particleSystem.maxEmitPower = 0 ;
     particleSystem.updateSpeed = 1/60;

     // Start the particle system
     particleSystem.start();*/

    //Minimal partical system...

    // Create a particle system
    /*const particleSystem = new BABYLON.ParticleSystem("particles", 2000);

    //Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture("./Images/flare.png");
    

    // Position where the particles are emiited from
    particleSystem.emitter = new BABYLON.Vector3(0, 0.5, 0);

    particleSystem.start();*/ 

    // Our built-in 'ground' shape.
   /* var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

    BABYLON.NodeMaterial.ParseFromSnippetAsync("#YDGZCJ", scene).then((nodeMaterial) => {
        const postProcess = nodeMaterial.createPostProcess(camera, 1.0, BABYLON.Constants.TEXTURE_LINEAR_LINEAR);

        postProcess.samples = 4;            

        scene.debugLayer.show({ showExplorer: true, embedMode: true }).then(() => {
            scene.debugLayer.select(nodeMaterial, "INPUTS");
        });
    });*/ 

     // Our built-in 'ground' shape.
     /*var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 2, height: 2, subdivisions: 128 }, scene);
     ground.scaling = new BABYLON.Vector3(9, 9, 9);
     ground.rotation.y = Math.PI*2;
 
     BABYLON.NodeMaterial.ParseFromSnippetAsync("#3FU5FG#1", scene).then((mat) => {
         ground.material = mat;
         window.mat = mat;
     });
 
     let addPostEffects = ()=>{
         var pipeline = new BABYLON.DefaultRenderingPipeline(
             "defaultPipeline", // The name of the pipeline
             false, // Do you want the pipeline to use HDR texture?
             scene, // The scene instance
             [camera] // The list of cameras to be attached to
         );
 
         pipeline.bloomEnabled   = true;
         pipeline.bloomThreshold = 0;
         pipeline.bloomKernel    = 0.35;
         pipeline.bloomScale     = 0.5;
 
         pipeline.grainEnabled = true;
         pipeline.grain.intensity = 8;
         pipeline.grain.animated = true;
 
         pipeline.chromaticAberrationEnabled             = true;
         pipeline.chromaticAberration.aberrationAmount   = 65.1;
         pipeline.chromaticAberration.radialIntensity    = 2;
 
         pipeline.sharpenEnabled = true;
         pipeline.sharpen.edgeAmount = 0.15;
     }
 
     addPostEffects();*/

      // GUI
    /*var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var button1 = BABYLON.GUI.Button.CreateSimpleButton("but", "Click me");
    button1.width = 0.2;
    button1.height = "40px";
    button1.cornerRadius = 20;
    button1.color = "Orange";
    button1.thickness = 4;
    button1.rotation = 0.2;
    button1.scaleY = 1.5;
    button1.background = "green";
    button1.onPointerUpObservable.add(function() {
        alert("yeah!");
    });
    advancedTexture.addControl(button1);*/ 

    // GUI
   /* var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    advancedTexture.idealWidth = 600;
    
    var rect1 = new BABYLON.GUI.Rectangle();
    rect1.width = 0.2;
    rect1.height = "40px";
    rect1.cornerRadius = 20;
    rect1.color = "Orange";
    rect1.thickness = 4;
    rect1.background = "green";
    advancedTexture.addControl(rect1);
    rect1.linkWithMesh(sphere);   
    rect1.linkOffsetY = -150;

    var label = new BABYLON.GUI.TextBlock();
    label.text = "Sphere";
    rect1.addControl(label);

    var target = new BABYLON.GUI.Ellipse();
    target.width = "40px";
    target.height = "40px";
    target.color = "Orange";
    target.thickness = 4;
    target.background = "green";
    advancedTexture.addControl(target);
    target.linkWithMesh(sphere);   

    var line = new BABYLON.GUI.Line();
    line.lineWidth = 4;
    line.color = "Orange";
    line.y2 = 20;
    line.linkOffsetY = -20;
    advancedTexture.addControl(line);
    line.linkWithMesh(sphere); 
    line.connectedControl = rect1; */

    

    // GUI
   /* var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var button = BABYLON.GUI.Button.CreateImageButton("but", "Click Me", "textures/grass.png");
    button.width = 0.2;
    button.height = "40px";
    button.color = "white";
    button.background = "green";
    advancedTexture.addControl(button);*/

    //Sound with tab...
   /* var gunshot = new BABYLON.Sound("gunshot", "./Sound/Animals.wav", scene);
	
	window.addEventListener("mousedown", function(evt) {
		// left click to fire
		if (evt.button === 0) {
			gunshot.play();
		}
	});
	
	window.addEventListener("keydown", function (evt) {
        // Press space key to fire
        if (evt.key === " ") {
            gunshot.play();
        }
    }); */

    //Sound Loop...
   /* var music1 = new BABYLON.Sound("Violons11", "sounds/violons11.wav", scene, 
		soundReady, { loop: true });
	var music2 = new BABYLON.Sound("Violons18", "sounds/violons18.wav", scene, 
		soundReady, { loop: true });
	var music3 = new BABYLON.Sound("Cellolong", "sounds/cellolong.wav", scene, 
		soundReady, { loop: true });

	var soundsReady = 0;
	
	function soundReady() {
		soundsReady++;
		if (soundsReady === 3) {
			music1.play();
			music2.play();
			music3.play();	
		}
	} */ 

    //play button...

     //Boxes
     /* var box1 = BABYLON.Mesh.CreateBox("Box1", 10.0, scene);
     box1.position.x = -20;
     var box2 = BABYLON.Mesh.CreateBox("Box2", 10.0, scene);
 
     var materialBox = new BABYLON.StandardMaterial("texture1", scene);
     materialBox.diffuseColor = new BABYLON.Color3(0, 1, 0);//Green
     var materialBox2 = new BABYLON.StandardMaterial("texture2", scene);
 
     //Applying materials
     box1.material = materialBox;
     box2.material = materialBox2;
 
     //Positioning box
     box2.position.x = 20;
 
 
     //Create a scaling animation
     var animation1 = new BABYLON.Animation("tutoAnimation", "scaling.z", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
         BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
 
     // Animation keys
     var keys = [];
     //At the animation key 0, the value of scaling is "1"
     keys.push({
         frame: 0,
         value: 1
     });
 
     //At the animation key 20, the value of scaling is "0.2"
     keys.push({
         frame: 20,
         value: 0.2
     });
 
     //At the animation key 100, the value of scaling is "1"
     keys.push({
         frame: 100,
         value: 1
     });
 
     //Adding keys to the animation object
     animation1.setKeys(keys);
 
     //Create a second rotation animation with different timeline
     var animation2 = new BABYLON.Animation("tutoAnimation", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
         BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
 
     // Animation keys
     keys = [];
     keys.push({
         frame: 0,
         value: 0
     });
 
     keys.push({
         frame: 40,
         value: Math.PI
     });
 
     keys.push({
         frame: 80,
         value: 0
     });
 
     //Adding keys to the animation object
     animation2.setKeys(keys);
 
     // Create the animation group
     var animationGroup = new BABYLON.AnimationGroup("my group");
     animationGroup.addTargetedAnimation(animation1, box1);
     animationGroup.addTargetedAnimation(animation2, box2);
 
     // Make sure to normalize animations to the same timeline
     animationGroup.normalize(0, 100);
 
     // UI
     var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
     var panel = new BABYLON.GUI.StackPanel();
     panel.isVertical = false;
     panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
     advancedTexture.addControl(panel);
 
     var addButton = function (text, callback) {
         var button = BABYLON.GUI.Button.CreateSimpleButton("button", text);
         button.width = "140px";
         button.height = "40px";
         button.color = "white";
         button.background = "green";
         button.paddingLeft = "10px";
         button.paddingRight = "10px";
         button.onPointerUpObservable.add(function () {
             callback();
         });
         panel.addControl(button);
     }
 
     addButton("Play", function () {
         animationGroup.play(true);
     });
 
     addButton("Pause", function () {
         animationGroup.pause();
     });
 
     addButton("Stop", function () {
         animationGroup.reset();
         animationGroup.stop();
     }); */ 

     //Labels...
    /*outputplane = BABYLON.Mesh.CreatePlane("outputplane", 30, scene, false);
    outputplane.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL;
    outputplane.material = new BABYLON.StandardMaterial("outputplane", scene);
    outputplane.position = new BABYLON.Vector3(0, 0.75, 0);

    outputplane.scaling.y = 0.1;
    outputplane.scaling.x = 0.1;
    outputplaneTexture = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
    outputplaneTexture.hasAlpha = true;
    outputplane.material.diffuseTexture = outputplaneTexture;
    outputplane.material.specularColor = new BABYLON.Color3(0, 0, 0);
    outputplane.material.emissiveColor = new BABYLON.Color3(1, 1, 1);
    outputplane.material.backFaceCulling = false;
    outputplaneTexture.drawText("PSLV Rocket", null, 200, "bold 60px sans-serif", "white");*/

    //New Patical System_01...
    //Cone around emitter
    var radius = .001;
    var angle = Math.PI / 10;
    //var height = radius / Math.tan(angle / .001);
    //var cone = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterBottom:0, diameterTop: 10 * radius, height: height}, scene);
    //cone.position.y = height / 1;
    //cone.material = new BABYLON.StandardMaterial("mat", scene);
    //cone.material.wireframe = true;

    // Create a particle system
    var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);

    //Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture("./Images/flare.png", scene);

    // Where the particles come from
    //particleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location
    particleSystem.emitter = new BABYLON.Vector3(0,-0.85,0);

    //particleSystem.gravity = new BABYLON.Vector3(0,-5,0);

    //particleSystem.direction1 = new BABYLON.Vector3(0, -10, 0).normalize();
    //particleSystem.direction2 = new BABYLON.Vector3(0, -20, 0).normalize();

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.005;
    particleSystem.maxSize = 0.05;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 0.1;
    particleSystem.maxLifeTime = 2;


    // Emission rate
    particleSystem.emitRate = 2000;


    //Emission Space
    particleSystem.createConeEmitter(radius, -angle);

    // Speed
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 2;
    particleSystem.updateSpeed = 0.1;

    // Start the particle system
    particleSystem.start();



    //New Patical System_02...
    //Cone around emitter
    var radius = .001;
    var angle = Math.PI / 10;
    //var height = radius / Math.tan(angle / .001);
    //var cone = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterBottom:0, diameterTop: 10 * radius, height: height}, scene);
    //cone.position.y = height / 1;
    //cone.material = new BABYLON.StandardMaterial("mat", scene);
    //cone.material.wireframe = true;

    // Create a particle system
    var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);

    //Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture("./Images/flare.png", scene);

    // Where the particles come from
    //particleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location
    particleSystem.emitter = new BABYLON.Vector3(-0.065,-0.85,-0.065);

    //particleSystem.gravity = new BABYLON.Vector3(0,-5,0);

    //particleSystem.direction1 = new BABYLON.Vector3(0, -10, 0).normalize();
    //particleSystem.direction2 = new BABYLON.Vector3(0, -20, 0).normalize();

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.002;
    particleSystem.maxSize = 0.02;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 0.5;
    particleSystem.maxLifeTime = 1;


    // Emission rate
    particleSystem.emitRate = 2000;


    //Emission Space
    particleSystem.createConeEmitter(radius, -angle);

    // Speed
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 2;
    particleSystem.updateSpeed = 0.1;

    // Start the particle system
    particleSystem.start();


    //New Patical System_03...
    //Cone around emitter
    var radius = .001;
    var angle = Math.PI / 10;
    //var height = radius / Math.tan(angle / .001);
    //var cone = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterBottom:0, diameterTop: 10 * radius, height: height}, scene);
    //cone.position.y = height / 1;
    //cone.material = new BABYLON.StandardMaterial("mat", scene);
    //cone.material.wireframe = true;

    // Create a particle system
    var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);

    //Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture("./Images/flare.png", scene);

    // Where the particles come from
    //particleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location
    particleSystem.emitter = new BABYLON.Vector3(.065,-0.85,.065);

    //particleSystem.gravity = new BABYLON.Vector3(0,-5,0);

    //particleSystem.direction1 = new BABYLON.Vector3(0, -10, 0).normalize();
    //particleSystem.direction2 = new BABYLON.Vector3(0, -20, 0).normalize();

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.002;
    particleSystem.maxSize = 0.02;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 0.5;
    particleSystem.maxLifeTime = 1;


    // Emission rate
    particleSystem.emitRate = 2000;


    //Emission Space
    particleSystem.createConeEmitter(radius, -angle);

    // Speed
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 2;
    particleSystem.updateSpeed = 0.1;

    // Start the particle system
    particleSystem.start();


    //New Patical System_04...
    //Cone around emitter
    var radius = .001;
    var angle = Math.PI / 10;
    //var height = radius / Math.tan(angle / .001);
    //var cone = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterBottom:0, diameterTop: 10 * radius, height: height}, scene);
    //cone.position.y = height / 1;
    //cone.material = new BABYLON.StandardMaterial("mat", scene);
    //cone.material.wireframe = true;

    // Create a particle system
    var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);

    //Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture("./Images/flare.png", scene);

    // Where the particles come from
    //particleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location
    particleSystem.emitter = new BABYLON.Vector3(0.07,-0.85,-0.08);

    //particleSystem.gravity = new BABYLON.Vector3(0,-5,0);

    //particleSystem.direction1 = new BABYLON.Vector3(0, -10, 0).normalize();
    //particleSystem.direction2 = new BABYLON.Vector3(0, -20, 0).normalize();

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.002;
    particleSystem.maxSize = 0.02;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 0.5;
    particleSystem.maxLifeTime = 1;


    // Emission rate
    particleSystem.emitRate = 2000;


    //Emission Space
    particleSystem.createConeEmitter(radius, -angle);

    // Speed
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 2;
    particleSystem.updateSpeed = 0.1;

    // Start the particle system
    particleSystem.start();


    


    //New Patical System_05...
    //Cone around emitter
    var radius = .001;
    var angle = Math.PI / 10;
    //var height = radius / Math.tan(angle / .001);
    //var cone = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterBottom:0, diameterTop: 10 * radius, height: height}, scene);
    //cone.position.y = height / 1;
    //cone.material = new BABYLON.StandardMaterial("mat", scene);
    //cone.material.wireframe = true;

    // Create a particle system
    var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);

    //Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture("./Images/flare.png", scene);

    // Where the particles come from
    //particleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location
    particleSystem.emitter = new BABYLON.Vector3(-0.07,-0.85,0.08);

    //particleSystem.gravity = new BABYLON.Vector3(0,-5,0);

    //particleSystem.direction1 = new BABYLON.Vector3(0, -10, 0).normalize();
    //particleSystem.direction2 = new BABYLON.Vector3(0, -20, 0).normalize();

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.002;
    particleSystem.maxSize = 0.02;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 0.5;
    particleSystem.maxLifeTime = 1;


    // Emission rate
    particleSystem.emitRate = 2000;


    //Emission Space
    particleSystem.createConeEmitter(radius, -angle);

    // Speed
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 2;
    particleSystem.updateSpeed = 0.1;

    // Start the particle system
    particleSystem.start();


    


   // VR code
    var environment = scene.createDefaultEnvironment({
        createSkybox : false,
        skyboxSize : 150,
        skyboxColor : BABYLON.Color3.Blue(),
        createGround : true,
        groundSize :200,
        groundColor : BABYLON.Color3.Green(),
        enableGroundShadow: true,
        groundYBias: 2.8,
    }); 
    environment.setMainColor(BABYLON.Color3.FromHexString("#74b9ff")) 
    var vrHelper =
        scene.createDefaultVRExperience({ createDeviceOrientationCamera: false, useXR: true });
    vrHelper.enableTeleportation({ floorMeshes: [environment.ground] });

    // Enable VR
   /* var vrHelper = scene.createDefaultVRExperience({createDeviceOrientationCamera:false});
    vrHelper.enableTeleportation({floorMeshes: [environment.ground]}); */ 

    
    

    scene.activeCamera.attachControl(canvas);

    

    engine.runRenderLoop(function () {
        scene.render();
        
    });

    window.addEventListener("resize", function () {
        engine.resize();
    });

    

    //Create Scroll
		var flag = scroll.addFlag(scene, {
			start:0,
			duration:1000,
			callback: (value, target)=>{
				target.sun.position.x = -5 + (value * 10)
				target.activeCamera.setTarget(target.sun.position)
			},
			startDirty : true,
			debug:true
		});
});