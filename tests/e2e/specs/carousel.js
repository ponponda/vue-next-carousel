// https://docs.cypress.io/api/table-of-contents

describe('VCarousel', () => {
  describe("Autoplay Functionality", () => {
    beforeEach(() => {
      cy.clock();
      cy.visit('/')
    })
    it('should stop autoplay', () => {
      cy.getSlidesWrapper()
        .trigger('pointerdown', { force: true })
      cy.tick(3000);
      cy.getSlide(1).shouldBeActiveSlide();
    });

    it('should autoplay', () => {
      cy.tick(3000);
      cy.getSlide(2).shouldBeActiveSlide();
    });


  })

  describe("Operate Functionality", () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('loops', () => {
      cy.swipeRight();
      cy.getSlide(2).shouldBeActiveSlide();
    });

    it('should be swipeable', () => {
      cy.swipeLeft();
      cy.getSlide(2).shouldBeActiveSlide();
      cy.swipeLeft();
      cy.getSlide(1).shouldBeActiveSlide();
      cy.swipeRight();
      cy.getSlide(2).shouldBeActiveSlide();
    });

    it('should work by clicking button in pager', () => {
      cy.getPager().get('button').eq(1).trigger("pointerdown", { force: true });
      cy.getSlide(2).shouldBeActiveSlide();
    });
  });
});
