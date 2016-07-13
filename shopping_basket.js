var basket = {
  items: [],
  price: 0,
  
  add: function(item){
    this.items.push(item)
  },

  remove: function(itemToFind){
    var i = this.items.findIndex(function(item, index, arr){
      return item.name === itemToFind.name;
    })
    this.items.splice(i, 1);
  },

  total: function(item){
   
    for (var i = 0; i < this.items.length;  i++){
      this.price += this.items[i].price;
    }

    return this.price;
  }

  discount: function(){
    if (this.price >= 20 ){
      this.price * 0.80}
    }
  }

  module.exports = basket