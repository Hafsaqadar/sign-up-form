document.getElementById('button').addEventListener('click', function(){

 const firstInput = document.getElementById('input').value
 const errorMasage = document.getElementById('error');


    if (firstInput.trim() == '') {
       errorMasage.style.display = 'block';
       }
       else  {
          errorMasage.style.display = 'none';
          document.getElementById('first-container').style.display = 'none';
          document.getElementById('form-container').style.display = 'block';
               }
    
});




