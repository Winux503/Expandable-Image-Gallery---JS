$(document).ready(
    function () {
        $(".jsimage").click(Pos);
        function Pos(){
            if($(this).hasClass("pos")){
                $(this).removeClass("pos");
                $(this).addClass("img_block");
                $(this).find("img").css("max-height","240px");
                $(this).find(".img_text").css("font-size","100%");
            }
            else{
                $(this).addClass("pos");
                $(this).removeClass("img_block");
                $(this).find("img").css("max-height","530px");
                $(this).find(".img_text").css("font-size","50px");
            }
        }
    }
);

/*

  Feel free to leach or 'fork' this code
  Made by Samuel("Winux") Tamplin

  |  | | |\ | |  | \_/
  |/\| | | \| \__/ / \

*/
