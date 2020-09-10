function Employee(firstName, lastName, id, email, getRole ) {
    this.name = firstName + " " + lastName;
    this.id = id;
    this.email = email;
    this.getRole = getRole;
}




let Carl = new Employee(
 "Carl",
 "Martin", 
 "01", 
 "cj.martin777@gmail.com",
 "Manager"
 );

let Jess = new Employee(
 "Jess",
 "Martin", 
 "02", 
 "jmart.martin777@gmail.com",
 "Developer"
 );
 
let Jake = new Employee(
 "Jake",
 "Stone", 
 "03", 
 "cj.martin777@gmail.com",
 "Intern"
 );


