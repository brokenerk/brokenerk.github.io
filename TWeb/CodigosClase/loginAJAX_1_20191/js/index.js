$(document).ready(function(){
    $("#gifLoad").hide();

    $("#formLogin").validetta({
        bubblePosition: "bottom",
        bubbleGapTop: 10,
        bubbleGapLeft: -5,
        onError:function(e){
            e.preventDefault();
            alert("ERROR");
        },
        onValid:function(e){
            e.preventDefault();
            $("#btnLogin").attr("disabled", true);
            $("#gifLoad").show();
            $.ajax({
                method:"post",
                url:"./php/index_AX.php",
                data:$("#formLogin").serialize(),
                cache:false,
                success:function(resp){
                    $("#gifLoad").hide();
                    if(resp == 1){
                        $.alert({
                            title:"TWEB 2019-1",
                            content:"Bienvenido!!!",
                            type:"green",
                            onDestroy:function(){
                                $(location).attr("href", "./php/prohibida.php")
                            }
                        });
                    }else{
                        $.alert({
                            title:"TWEB 2019-1",
                            content:"Se presentó un error. Favor de intentarlo nuevamente",
                            type:"red",
                            onDestroy:function(){
                                $("#btnLogin").attr("disabled", false);
                                $("#formLogin").trigger("reset");
                            }
                        });
                    }
                }
            });
        }
    });
});