const Documenu = require('documenu')
Documenu.configure('508ab21d1d779c46f1ac0e70d12df02e')

let result = await Documenu.Restaurants.getByState('NY');

Documenu.Restaurants.getByState('NY')
.then(res=> {
   console.log(res);
});