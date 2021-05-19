//fs
//array


function generateHtml(employeeArray){
    var htmlData=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <header class="jumbotron">My Team</header>
    <div class= "card-deck">`

     employeeArray.map(employee => {
        if (employee.getRole() == "Engineer") {
         htmlData+=`
         <div class="card" id ="manager" style="width: 18rem;">
         <img src="..." class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">Name ${employee.getName()}</h5>
           <p class="card-text">Manager</p>
         </div>
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Id# : ""</li>
           <li class="list-group-item">Email: ""</li>
           <li class="list-group-item">Office Number: ""</li>
         </ul>
         <div class="card-body">
           <a href="#" class="card-link">Card link</a>
           <a href="#" class="card-link">Another link</a>
         </div>
       </div>  
         `
        } else {
         // return 'odd'
        }
      });

     return htmlData+=`
     </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
`  
          
          
    
}
module.exports = generateHtml;