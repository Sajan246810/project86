var canvas = new fabric.Canvas("myCanvas");

block_height = 30;
block_width = 30;

player_x = 10;
player_y = 10;

player_object = "";
block_object = "";

function update_player(){
    fabric.Image.fromURL("player.png",function (Img){
        player_object = Img;

        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top:player_x,
            left:player_y
        })
        canvas.add(player_object);
    })
}
update_player()

function new_image(get_image){
    fabric.Image.fromURL(get_image,function (Img){
        block_object = Img;

        block_object.scaleToWidth(150)
        block_object.scaleToHeight(140)
        block_object.set({
            top:player_x,
            left:player_y
        })
        canvas.add(block_object);
    })
}