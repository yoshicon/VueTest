var ap1 = new Vue({
    el: '#ap1',
    data:{
        bab: '바보'
    }
})

var ap2 = new Vue({
    el: '#ap2',
    data:{
        msg: new Date() + '에 업댓'
    }
})

var ap4 = new Vue({
    el:'#ap4',
    data:{
        danto:[
            { lst: 'one' },
            { lst: 'eon' }
        ]
    }
})

var ap5 = new Vue({
    el: '#ap5',
    data:{
        msg: '븅신이 븅신인걸 알면은 븅신 아냐'
    },
    methods:{
        rev1: function(){
            this.msg = this.msg.split('').reverse().join('')
        }
    }
})

var ap6 = new Vue({
    el:'#ap6',
    data:{
        txt: '바보'
    }
})
