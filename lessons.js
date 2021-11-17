let Lesson = new Vue({
    el: '#app',
    data: {
        sitename: 'After School Lessons',
        showLesson: true,
        Lesson: {
            Subject: 'Maths',
            Location: 'London',
            Price: '$100',
            Spaces: 5,
            Image: 'https://img.icons8.com/ios/50/000000/math.png'
        },
        cart:[],
        order: {
            firstName:'',
            lastName:'',
            phoneNumber:''
        }
    },
 methods: {
 checkResponse(){
    this.reduceSpace();
    this.addToCart();
 },
 reduceSpace(){
        this.Lesson.Spaces = this.Lesson.Spaces - 1;
 },
 addToCart(){
        this.cart.push(this.Lesson.Subject);
 },
   showCheckout(){
       this.showLesson = this.showLesson ? false : true
   },

   confirmOrder(){
       alert('Your order has been submitted.')
   }
 },
 computed: {
     cartLength() {
         return this.cart.length
     },
     canAddToCart() {
         return this.Lesson.Spaces > 0
     }
 }
 });