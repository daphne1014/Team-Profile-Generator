const generateTeam = team => {
    const generateManager = manager => {
        return `
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100" id="manager" style="width: 18rem;">
                    <div class="card-body">
                        <h2 class="card-title">${manager.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot"></i>${manager.getRole()}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <href="mailto:${manager.getEmail()}">${manager.getEmail}</a>
                        </li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber()}</li>
                    </ul>
                </div>
            </div>`
    };
    const generateEngineer = engineer => {
        engineer
        .filter(({main})=>main)
        return `
        <div class="col">
                <div class="card h-100" id="engineer" style="width: 18rem;">
                    <div class="card-body">
                        <h2 class="card-title">${engineer.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-glasses"></i>${engineer.getRole()}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <href="mailto:${engineer.getEmail()}">
                                ${engineer.getEmail}</a>
                        </li>
                        <li class="list-group-item">Github: ${engineer.getGithhub()}</li>
                    </ul>
                </div>
            </div>`
    };
    const generateIntern = intern => {
        return `
        <div class="col">
                <div class="card h-100" id="intern" style="width: 18rem;">
                    <div class="card-body">
                        <h2 class="card-title">${intern.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-user-graduate"></i>${intern.getRole()}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <href="mailto:${intern.getEmail()}">${intern.getEmail}</a>
                        </li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>`
    };

};

module.exports = tempateData => {
    const { manager, engineer, intern } = tempateData;

    return `
    <!DOCTYPE html>
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
            <header>My Team</header>
            <div class="container">
                ${generateTeam}
            </div>

        </body>

    </html>
    `

};