function print(mess){
    console.log(mess);
}

const constraints = {
    video: true,
};
const canvas = document.querySelector("canvas");
const range = document.getElementById("input");
const ctx = canvas.getContext("2d");
var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
var data = imageData.data;
var x,y;

const redEsp=255, blueEsp=255, greenEsp=255;





navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    const video = document.createElement("video");
    video.srcObject = stream;
    video.play();

    

    setInterval(() => {
        ctx.clearRect(0,0,canvas.width, canvas.height)
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            // print(data.length/4)
            let red = data[i];
            let green = data[i + 1];
            let blue = data[i + 2];   

            y=Math.trunc((i/4)/canvas.width);
            x=(i/4)-(y*canvas.width);
            // if(x>450 && y>450){
            //     ctx.fillStyle = "red";
            //     ctx.beginPath(); // Iniciar trazo
            //     ctx.arc(450, 450, 3, 0, Math.PI * 2, true); // Dibujar un punto usando la funcion arc
            //     ctx.fill(); // Terminar trazo
            // }

            let distancia = 0;
            distancia = Math.sqrt(Math.pow((redEsp-red),2)+Math.pow((greenEsp-green),2)+Math.pow((blueEsp-blue),2))
            // print(red + " " + green + " " + blue) 
            if(distancia<range.value){
                // print("asd")

                ctx.fillStyle = "red";
                ctx.beginPath(); // Iniciar trazo
                ctx.arc(x, y, 1, 0, Math.PI * 2, true); // Dibujar un punto usando la funcion arc
                ctx.fill(); // Terminar trazo
            }
        }

    }, 20);
});



print("hola");


