const generateTeam = team => {
    var a = '';
    
    team.forEach(employee => {
        switch (employee.getRole()) {
            case 'Manager':
                a = `<div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100" id="manager" style="width: 18rem;">
                    <div class="card-body title">
                        <h2 class="card-title name">${employee.getName()}</h2>
                        <h3 class="card-title position"><i class="fas fa-mug-hot"> </i>${employee.getRole()}</h3>
                    </div>
                    <div class="card-body content">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: <href="mailto:${employee.getEmail()}">${employee.getEmail}</a>
                        </li>
                        <li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>
                    </ul>
                    </div>
                </div>
            </div>`;
                break;

            case 'Engineer':
                a = `<div class="col">
                <div class="card h-100" id="engineer" style="width: 18rem;">
                    <div class="card-body title">
                        <h2 class="card-title name">${employee.getName()}</h2>
                        <h3 class="card-title position"><i class="fas fa-glasses"> </i>${employee.getRole()}</h3>
                    </div>
                    <div class="card-body content">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: <href="mailto:${employee.getEmail()}">
                                ${employee.getEmail}</a>
                        </li>
                        <li class="list-group-item">Github: ${employee.getGithub()}</li>
                    </ul>
                    </div>
                </div>
            </div>`;
                break;

            case 'Intern':
                a = `<div class="col">
                <div class="card h-100" id="intern" style="width: 18rem;">
                    <div class="card-body title">
                        <h2 class="card-title name">${employee.getName()}</h2>
                        <h3 class="card-title position"><i class="fas fa-user-graduate"> </i>${employee.getRole()}</h3>
                    </div>
                    <div class="card-body content">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: <href="mailto:${employee.getEmail()}">${employee.getEmail}</a>
                        </li>
                        <li class="list-group-item">School: ${employee.getSchool()}</li>
                    </ul>
                    </div>
                </div>
            </div>`;
                break;
        }
    })

    return a;
};


function generateHtml(team) {
    return `<!DOCTYPE html>
    <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <link rel="stylesheet" href="./style.css">
            <title>Team Profile</title>
        </head>

        <body>
        <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold">My Team</h1>
         </div>
            <div class="container">
                ${generateTeam(team)}
            </div>
        </body>

    </html>
    `;
};

module.exports=generateHtml;

