function checkOrder(available, ordered) {
    if (ordered === 0) {
      return "Your order is empty";
    } else if (ordered > available) {
      return "Order is too large, we not have enough goods.";
    } else {
      return "Order is accepted";
    }
  }
  console.log(checkOrder(10, 0));   // Пусте завмовлення
  console.log(checkOrder(10, 15));  // Немає на складі
  console.log(checkOrder(10, 5));    // Замовлення прийняте