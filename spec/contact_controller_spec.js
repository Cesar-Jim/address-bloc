const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;

describe("ContactController", () => {

   beforeEach((done) => {
      this.book = new ContactController();


      sequelize.sync({ force: true }).then((res) => {
         done();
      })
         .catch((err) => {
            done();
         });
   });

   it("should be defined", () => {
      expect(ContactController).toBeDefined();
   });


   describe("#addContact()", () => {

      // #1
      it("should add a single contact into the book", (done) => {

         // #2
         this.book.addContact("Alice", "001-101-1010", "alice75@gmail.com")
            .then((contact) => {

               // #3
               expect(contact.name).toBe("Alice");
               expect(contact.phone).toBe("001-101-1010");
               expect(contact.email).toBe("alice75@gmail.com");
               done();
            })
            .catch((err) => {
               done();
            });
      });

   });
})


