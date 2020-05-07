Vue.component('babo', {
    promps: ['adu'],
    template: '<li> {{ adu.keke }} <li>'
})

var cap = new Vue({
    el:'#cmpAp',
    data: {
        dit:[
            {adi: 1, keke: '1번째'},
            {adi: 3, keke: '2번째'},
            {adi: 5, keke: '3번째'},
            {adi: 2, keke: '4번째'},
            {adi: 4, keke: '5번째'}
        ]
    }
})

// 
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 1, text: 'Vegetables' },
        { id: 2, text: 'Cheese' },
        { id: 0, text: 'Whahumans are supposed to eat' }
      ]
    }
  })