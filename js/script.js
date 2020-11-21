$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      // scroll-up button show/hide script
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

  // slide-up script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
      strings: ["Front end Developer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".typing-2", {
      strings: ["Front end Developer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  // owl carousel script
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000:{
              items: 3,
              nav: false
          }
      }
  });
});


// //Вопрос 1
// (function(x){
//     delete x;
//     return x;
//   })(1);
// //Что вернет эта функция?

// null
// 1
// undefined
// Error


// //Вопрос 2
// for (var i = 0; i < 10; i++) {
// 	alert(i)
// }
// console.log(i)
// //Какое значение выведется в консоль?

// undefined
// 9
// 10
// Uncaught ReferenceError: i is not defined

// //Вопрос 3
// console.log(str);
// var str = 'Hello World'
// Что выведет данный код
// 1 балл
// undefined
// Hello world
// Uncaught ReferenceError: str is not defined
// null


// //Вопрос 4. Что не является типом данных в JS?

// Null
// BigInt
// Double
// Object


// //Вопрос 5
//   var y = 1, x = y = typeof x;
//   x;
// Какой будет результат выполнения данного кода?


// 1
// number
// undefined
// "undefined"


// //Вопрос 6
// var Employee = {
//   company: 'xyz'
// }
// var emp1 = Object.create(Employee);
// delete emp1.company
// console.log(emp1.company);


// //Что выведет данный код?
// 1 балл
// 'xyz'


// //Вопрос 7
// bar();
// (function abc(){console.log('something')})();
// function bar(){console.log('bar got called')};


// //Что выведет данный код?

// something undefined
// bar got called something
// something bar got called
// Uncaught ReferenceError: bar() is not defined


// //Вопрос 8. Напишите цикл for, который будет выводить в консоль каждую секунду числа от 1 до 10 в течение 10 секунд. Использовать ES6+ нельзя(let, const, arrow functions и т.д.), код за пределами цикла тоже использовать нельзя. Только цикл for (...) {//code}

// //Вопрос 9
// <body>
//    <div>...</div>
//    <div>
//       <p>1</p>
//       <p>2</p>
//       <p>3</p>
//       <p>a</p>
//       <p>b</p>
//       <p>c</p>
//    </div>
//    <div>
//       <p>b</p>
//    </div>
// </body>

// //Как с помощью jQuery селектора выделить третий p во втором div внутри body?
// //Вопрос 10
// <body>
//    <div>...</div>
//    <div>
//       <p>1</p>
//       <p>2</p>
//       <p>3</p>
//       <p>a</p>
//       <p>b</p>
//       <p>c</p>
//       <p>c1</p>
//       <p>1d</p>
//    </div>
//    <div>
//       <p>b</p>
//    </div>
// </body>


// //Необходимо написать код, который вернет массив, элементами которого являются значения из всех p содержащих только числа с помощью jQuery
// //Вопрос 11. Напишите регулярное выражение, которое выделит последнюю группу чисел (50076817, 50142825) из строк karta-pamyati-microsd-smartbuy-8gb-slass-10-sb8gbsdcl10-00-50076817, karta-pamyati-microsd-netac-32gb-p500-standard-nt02p500stn-032g-s-50142825 соответственно
// //Вопрос 12. C помощью метода map() получить новый массив, в котором все значения будут умножены на 2. let array = [1, 3, 5, 6, 8]
// //Вопрос 13. С помощью метода map() преобразовать исходные массив к виду ['Иван', 'Андрей', 'Саша']. Исходный массив [{"name": "Иван", "surname": "Иванов"}, {"name": "Андрей", "surname": "Иванов"}, {"name": "Саша", "surname": "Петров"}]
// //Вопрос 14. С помощью метода filter() получить новый массив в котором останутся только значения меньше 5. let array = [1, 5, 8, 23, 2, 3, 1]
// //Вопрос 15
// (function() {
// 	var fooAccount = {
// 		name: 'John',
// 		amount: 6000,
// 		deductAmount: function(amount) {
// 			this.amount -= amount;
// 			return this.amount;
// 		}
// 	};
// 	var barAccount = {
// 		name: 'John',
// 		amount: 4000
// 	};
// 	var withdrawAmountBy = function(totalAmount) {
// 		return fooAccount.deductAmount.call(barAccount, totalAmount);
// 	};
// 	console.log(withdrawAmountBy(400));
// 	console.log(withdrawAmountBy(300));
// 	console.log(withdrawAmountBy(200));
// }());
// ///Что выведет в консоль код? Дать развернутый ответ, почему уменьшается один amount а не другой
// //Вопрос 16. Что вернет код ['2', '2', '2', '2'].map(parseInt) и почему?
// //Вопрос 17
// (function() {
// 	var x = 1;

// 	function x() {};
	
// 	console.log(x);	
// })()
// //Что будет в консоли при выполнении данного кода и почему?
// //Вопрос 18
// var obj = {
// 	a: 1
// };

// (function(obj) {
// 	obj = {
// 		a: 2
// 	};

// })(obj);

// console.log(obj.a);
// //Что выведется в консоли и почему?
// //Вопрос 19
// function test() {
//    console.log(a);
//    console.log(foo());
   
//    var a = 1;
//    function foo() {
//       return 2;
//    }
// }

// test();
// //Что выведется в консоли и почему?
// //Вопрос 20
// var fullname = 'Mark Ivanov';
// var obj = {
//    fullname: 'Joe Milner',
//    prop: {
//       fullname: 'David Smith',
//       getFullname: function() {
//          return this.fullname;
//       }
//    }
// };

// console.log(obj.prop.getFullname());

// var test = obj.prop.getFullname;

// console.log(test());
// Что будет в консоли и почему?
