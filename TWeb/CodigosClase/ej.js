$(document).ready(function(){
    $("#formLogin").validetta({
        bubblePosition: 'bottom',
        bubbleGapTop: 10,
        bubbleGapLeft: -5,
        onError: function(e){
            e.preventDefault();
            alert("ERROR");
        },
        onValid: function(e){
            alert("OK");
            e.preventDefault();
            $.ajax({
                method:"post",
                url:"ej.php",
                data:$("#formLogin").serialize(),
                cache:"false",
                success:function(resp){
                    alert(resp);
                }
            });
        }
    });
});
