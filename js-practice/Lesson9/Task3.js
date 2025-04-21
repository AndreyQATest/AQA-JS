let car1 = {
    brand: 'TESLA',
    model: 'MODELX',
    ovner: 'Ivan',
  };
  
  let car2 = {
    brand: 'Honda',
    model: 'CRV',
    ovener: 'Ostap',
  };
 
  let car3 = { ...car1, ...car2,  };
  
  console.log(car3);