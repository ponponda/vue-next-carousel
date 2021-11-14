// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('getSlidesWrapper', { prevSubject: 'optional' }, () =>
    cy.get('.v-carousel-slides-wrapper')
);

Cypress.Commands.add('getSlide', { prevSubject: 'optional' }, (subject, idx) =>
    cy.get(`.v-carousel-slides-wrapper > div:nth-child(${idx + 1})`)
);

Cypress.Commands.add('getPager', { prevSubject: 'optional' }, () =>
    cy.get(`.v-carousel-pager`)
);

Cypress.Commands.add("swipeLeft", () => {
    cy.getSlidesWrapper()
        .trigger('pointerdown', { which: 1, pageX: 100, pageY: 100, force: true })
        .trigger('pointermove', { pageX: -100, pageY: 100, force: true })
        .trigger('pointerup', { pageX: -100, pageY: 100, force: true });
})

Cypress.Commands.add("swipeRight", () => {
    cy.getSlidesWrapper()
        .trigger('pointerdown', { which: 1, pageX: -100, pageY: 100, force: true })
        .trigger('pointermove', { pageX: 100, pageY: 100, force: true })
        .trigger('pointerup', { pageX: 100, pageY: 100, force: true });
})

Cypress.Commands.add("shouldBeActiveSlide", { prevSubject: 'optional' }, (subject) => {
    cy.wrap(subject).should("have.class", "v-carousel-slide-active")
})

//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
