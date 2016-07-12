var basket  = require('../shopping_basket');
var assert = require('chai').assert;

describe( 'Shoppong Basket', function(){

  it('should add item to basket', function(){
    basket.add( {name: 'bannanas', price: 2})
    basket.add( {name: 'pears', price: 5})
    
    assert.equal(2, basket.items.length)
  })

it('should remove item from basket', function(){
  basket.remove({name: 'bannanas', price: 2})
  assert.equal(1, basket.items.length)
})

  it('should show total price of basket', function(){
    console.log(basket)
    basket.total({name: 'pears', price: 5})
    assert.equal(5, basket.price)

  })
})