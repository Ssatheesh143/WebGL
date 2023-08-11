/// <reference path="./Lib/TypeScript/BABYLON.2.1.d.ts"/>



window.addEventListener('DOMContentLoaded', function () {

    var canvas = document.getElementById("renderCanvas03");

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

    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./HDRI/UnderWaterEnvironment.env", scene);
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
    var sun = BABYLON.SceneLoader.ImportMesh("","assets/Sphere/","Sphere.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //var gl = new BABYLON.GlowLayer("glow", scene);
        
        
    });

    //Shark
    var Shark = BABYLON.SceneLoader.ImportMesh("","./Assets/Shark/","Shark.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });

    //GroupFish
   var GroupFish = BABYLON.SceneLoader.ImportMesh("","assets/GroupFish_02/","GroupFish_02.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });

    //JellyFish
    var JellyFish = BABYLON.SceneLoader.ImportMesh("","assets/JellyFish/","JellyFish.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });

    //UnderWater
    var UnderWater = BABYLON.SceneLoader.ImportMesh("","assets/Under water animals/","UnderWater Scene_shark.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });

    //UnderWater02
    var UnderWater02 = BABYLON.SceneLoader.ImportMesh("","assets/Under water animals/","UnderWater Scene_shark_02.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });

    //UnderWater03
    var UnderWater03 = BABYLON.SceneLoader.ImportMesh("","assets/Under water animals/","UnderWater Scene_shark_03.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });

    //UnderWater04
    var UnderWater04 = BABYLON.SceneLoader.ImportMesh("","assets/Under water animals/","UnderWater Scene_shark_04.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    });

    // GUI
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var text1 = new BABYLON.GUI.TextBlock();
    text1.text = "Under the Ocean";
    text1.color = "white";
    text1.fontSize = 24;

    
    advancedTexture.addControl(text1);

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
    particleSystem.minSize = 0.1;
    particleSystem.maxSize = 1.0;
    particleSystem.minLifeTime = 0.5;
    particleSystem.maxLifeTime = 5.0;
    particleSystem.minEmitPower = 0.5;
    particleSystem.maxEmitPower = 3.0;
    particleSystem.emitter = emitter0;
    particleSystem.emitRate = 100;
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.direction1 = new BABYLON.Vector3(-1, 1, -1);
    particleSystem.direction2 = new BABYLON.Vector3(1, 1, 1);
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