describe ('sample app', () => {


	it ('testing 123', () => {
	cy.visit('example.cypress.io/todo#/')
	cy.get('input[class="new-todo"]').then(($element) => {
		const elementText = $element.text
		cy.log(elementText)
		//elementText.should('not.equal', 'fgdfgdfg')
		expect(elementText).to.not.equal('fdfgdfg')
	})
	})
	
	it ('another test', () => {
		
		const array1 = [1,2,3]
		const array2 = [3,2,1]
		cy.arrayReverseCompare(array1,array2).then( (value) => {
			expect(value).to.be.true
		})
})

})