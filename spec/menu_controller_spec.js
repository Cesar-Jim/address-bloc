const MenuController = require('../controllers/MenuController');

// #1
describe("MenuController", () => {

   beforeEach(() => {
      this.menu = new MenuController();
   });

   it('Should return "Learning is a life-long pursuit"', () => {
      const str = "Learning is a life-long pursuit";
      expect(this.menu.remindMe()).toBe(str);
   })

});