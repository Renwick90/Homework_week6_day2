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
  for (var i = 0; i < basket.items.length; i += 1){
  basket.price += basket.items.price[i]
  return basket.price
    }
  }
}

module.exports = basket