const generateTeam = team => {
    const generateManager = manager => {
        return `
        <div class="card" id= "manager" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title">${manager.getName()}</h2>
          <h3 class="card-title">${manager.getRole()}</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <href="mailto:${manager.getEmail()}">${manager.getEmail}</a></li>
          <li class="list-group-item">Office Number: ${manager.officeNumber()}</li>
        </ul>
      </div>`
    };
    const generateEngineer = engineer => {
        return `
        <div class="card" id= "manager" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h3 class="card-title">${engineer.getRole()}</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <href="mailto:${engineer.getEmail()}">${engineer.getEmail}</a></li>
          <li class="list-group-item">Github: ${engineer.getGithhub()}</li>
        </ul>
      </div>`
     };
    const generateIntern = intern => { 
        return `
        <div class="card" id= "manager" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title">${intern.getName()}</h2>
          <h3 class="card-title">${intern.getRole()}</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <href="mailto:${intern.getEmail()}">${intern.getEmail}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>`
    };
};
