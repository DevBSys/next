$(".submit_login").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();
    $.ajax({
        type:"POST",
        url:"http://localhost/users/",
        dataType:"json",
        data:{username,password},
        success:function(data){
            if (data.status == "success") {
                Swal.fire({
                    icon: 'success',
                    title: 'สำเร็จ!',
                    text: data.message,
                }).then(function(){
                    window.location.href = '/';
                })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'เกิดข้อผิดพลาด!',
                    text: data.message,
                })
            }
        }
    })
})