canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=200;
car1_height=70;
car1_x=10;
car1_y=10;
car1_image="https://d1i1eo6qmdfmdv.cloudfront.net/upload/site/models/lamborghini_gallardo_lp550/main.png";

car2_width=120;
car2_height=70;
car2_x=10;
car2_y=100;
car2_image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSPHkvwLIl5yil98LRZOd3xOzNEGV5BzjFMg&usqp=CAU";
background_image="https://i.postimg.cc/bv5d35nK/racing.jpg";

function add(){
background_Img_Tag=new Image();
background_Img_Tag.src=background_image;
background_Img_Tag.onload=uploadBackground;

car1_Img_Tag=new Image();
car1_Img_Tag.src=car1_image;
car1_Img_Tag.onload=uploadCar1;

car2_Img_Tag=new Image();
car2_Img_Tag.src=car2_image;
car2_Img_Tag.onload=uploadCar2;
}

function uploadBackground() {
    ctx.drawImage(background_Img_Tag,0,0,canvas.width,canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1_Img_Tag,car1_x,car1_y,car1_width,car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_Img_Tag,car2_x,car2_y,car2_width,car2_height);
}