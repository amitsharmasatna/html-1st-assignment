
let x = 20;
let y = 30;


let a = 25;
let b = 35;


let l = 100;
let m = 200;


function someMathOperations(value1, value2) {
    console.log('The two Numbers:-', value1, value2);

    //add the numbers
    let sum = value1 + value2
    console.log('sum-', sum);

    let sub = value1 - value2
    console.log('Sub-', sub);

    let mul = value1 * value2
    console.log('Mul-', mul);

    let devd = value1 / value2
    console.log('Devide-', devd);
}

someMathOperations(x, y);

someMathOperations(a, b);

someMathOperations(l, m);

let u = 45;
let v = 55;

let c = 22;
let d = 99;

let n = 75;
let o = 300

function MathOperations(value3, value4) {
    console.log('The four Numbers:-', value3, value4);

    //add the numbers
    let sum = value3 + value4
    console.log('sum-', sum);

    let sub = value3 - value4
    console.log('Sub-', sub);

    let mul = value3 * value4
    console.log('Mul-', mul);

    let devd = value3 / value4
    console.log('Devide-', devd);
}

MathOperations(u, v);
MathOperations(c, d);
MathOperations(n, o);


function areaOfCircle(radius) {
    console.log('The Area of Circle is-', Math.PI * radius);
}
areaOfCircle(10);

function areaOfRectamgle(length, width) {
    console.log('The Area of Rectamgle is-', length * width)
}
areaOfRectamgle(10, 20);

// NEW Function

function ageComparison(age) {
    if (age < 10) {
        return 'Age is less than the 10'
    } else if (age >= 10 && age <= 30) {
        return 'Age is between 10 and 30'
    } else if (age >= 31 && age <= 60) {
        return 'Age is between 31 and 60'
    } else {
        return 'Age is above 60'
    }
}

let ageResult1 = ageComparison(100);
let ageResult2 = ageComparison(56);
let ageResult3 = ageComparison(43);


// NEW FUNCTION 

function areaOfCircle(radius) {
    return (Math.PI * radius)
  }
  function areaOfRectangle(length, width) {
    return (length * width)
  }
  function findArea(geometry, dimensions) {
    if (geometry === 'circle') {
      console.log('Area of circle') //PI*r^2
      return (Math.PI * Math.pow(dimensions['radius'], 2)) //PI*r^2
    } else if (geometry === 'square') {
      console.log('Area of square') //PI*r^2
      return (dimensions.length * dimensions.length) //l*l
    } else if (geometry === 'rectangle') {
      console.log('Area of rectangle') //l*w
      return (dimensions.length * dimensions.width)
    } else if (geometry === 'triangle') {
      console.log('Area of triangle') //1/2 * base * height
      return ((dimensions.base * dimensions.height) / 2)
    }
  }
  let circleArea = findArea('circle', { radius: 10 })
  let reiangleArea = findArea('triangle', { height: 10, base: 20 })
  let rectangleArea = findArea('rectangle', { length: 10, width: 20 })
  let squareArea = findArea('square', { length: 10 })
