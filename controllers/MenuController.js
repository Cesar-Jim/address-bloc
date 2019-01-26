const inquirer = require('inquirer');

module.exports = class MenuController {
   constructor() {
      this.mainMenuQuestions = [
         {
            type: "list",
            name: "mainMenuChoice",
            message: "Please choose from an option below: ",
            choices: [
               "Add new contact",
               "Today's date",
               "Exit"
            ]
         }
      ];

      this.contacts = [];
   }

   main() {
      console.log('Welcome to AddressBloc!');
      inquirer.prompt(this.mainMenuQuestions).then((response) => {
         switch (response.mainMenuChoice) {
            case "Add new contact":
               this.addContact();
               break;
            case "Today's date":
               this.getDate();
               break;
            case "Exit":
               this.exit();
            default:
               console.log("Invalid input");
               this.main();
         }
      })
         .catch((err) => {
            console.log(err);
         });
   }

   clear() {
      console.log('\x1Bc');
   }

   addContact() {
      this.clear();
      console.log('addContact called');
      this.main();
   }

   exit() {
      console.log("Thanks for using AddressBloc!");
      process.exit();
   }

   getDate() {
      var today = new Date();
      // Date:
      var yyyy = today.getFullYear();
      var mm = today.getMonth() + 1;
      var dd = today.getDate();
      // Time
      var HH = today.getHours();
      var MM = today.getMinutes();
      var SS = today.getSeconds();

      if (mm < 10) {
         mm = '0' + mm;
      }

      if (dd < 10) {
         dd = '0' + dd;
      }

      if (HH < 10) {
         HH = '0' + HH;
      }

      if (MM < 10) {
         MM = '0' + MM;
      }

      if (SS < 10) {
         SS = '0' + SS;
      }

      today = `${mm}/${dd}/${yyyy} @ ${HH}:${MM}:${SS}`;
      console.log(today);
      this.main();
   }
}