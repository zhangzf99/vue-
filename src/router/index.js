import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Category from '@/pages/Category'
import Article from '@/pages/Article'
import User from '@/pages/User'
import Exam from '@/pages/Exam'
import ExamCreated from '@/pages/exam/ExamCreated'
import ExamPlace from '@/pages/exam/ExamPlace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/category',
      name: 'HelloWorld',
      component: Category
    },{
      path:'/article',
      name: 'Article',
      component: Article
    },{
        path:'/user',
        name: 'User',
        component: User
    },{
      path:'/exam',
      name: 'Exam',
      component: Exam,
      children:[{
        path:'created',
        component: ExamCreated
      },{
        path:'place',
        component: ExamPlace
      }]
  }
  ]
})
