// Стрілочна функція 
const getAreaArrow = (width, height) => width * height;
console.log("Arrow Function:", getAreaArrow(5, 10));

// Дкларування 
function getAreaDecl(width, height) {
    return width * height;
  }
  console.log("Function Declaration:", getAreaDecl(5, 10));
  
  // Вираз
  const getAreaExpr = function(width, height) {
    return width * height;
  };
  console.log("Function Expression:", getAreaExpr(5, 10));