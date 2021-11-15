let n = 5;
let Lesson = new Vue({
    el: '#app',
    data: {
        sitename: 'After School Lessons',
        showLesson: true,
        Lesson: {
            Subject: 'Maths',
            Location: 'London',
            Price: '$100',
            Spaces: n,
            Image: 'https://img.icons8.com/ios/50/000000/math.png'
        },
        cart:[]
    },
 methods: {
 checkResponse(){
        this.Lesson.Spaces= -1 + n--;
 },
   showCheckout(){
       this.showLesson = this.showLesson ? false : true
   }
 },
 computed: {
     canAddToCart() {
         return this.Lesson.Spaces > 0
     }
 }
 });