function add(){
    // alert("done")
    var first= document.getElementById("firstName").value
    var last= document.getElementById("lastName").value
    var email= document.getElementById("email").value
    var password= document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email,password).then(res=>{


        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been Done',
            showConfirmButton: false,
            timer: 1500
          })
          clearInput()

            }).catch(error=>{
              alert(error.message)
            })


}

function clearInput(){
  var first= document.getElementById("firstName").value=""
    var last= document.getElementById("lastName").value=""
    var email= document.getElementById("email").value=""
    var password= document.getElementById("password").value=""
    
}


// function add(){

//     var email= document.getElementById("email").value
//     var password= document.getElementById("pass").value
     
//      firebase.auth().createUserWithEmailAndPassword(email, password).then(res=>{
//          window.location.href = "signIn.html"
          
//  Swal.fire({
//      position: 'top-end',
//      icon: 'success',
//      title: 'Your work has been Done',
//      showConfirmButton: false,
//      timer: 1500
//    })
//      })
 
//  }
 