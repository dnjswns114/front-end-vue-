const routes = [
    {
        path: "/Ch08RestAPI/Exam01Promise",
        component: () =>  import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Ch08RestAPI/Exam01Promise')
    },
    {
        path: "/Ch08RestAPI/Exam02Login",
        component: () =>  import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Ch08RestAPI/Exam02Login')
    },  
    {
        path: "/Ch08RestAPI/Exam03Join",
        component: () =>  import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Ch08RestAPI/Exam03Join')
    },
    {
      path: '/Ch08RestAPI/Exam04Board',
      // 리다이렉트
      redirect: '/Ch08RestAPI/Exam04Board/BoardList'
    },    
    {
        path: "/Ch08RestAPI/Exam04Board/BoardList",
        component: () =>  import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Ch08RestAPI/Exam04Board/BoardList.vue')
    },
    {
        path: "/Ch08RestAPI/Exam04Board/BoardWrite",
        component: () =>  import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Ch08RestAPI/Exam04Board/BoardWrite.vue')
    },
    {
        path: "/Ch08RestAPI/Exam04Board/BoardRead",
        component: () =>  import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Ch08RestAPI/Exam04Board/BoardRead.vue')
    },
    {
        path: "/Ch08RestAPI/Exam04Board/BoardUpdate",
        component: () =>  import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Ch08RestAPI/Exam04Board/BoardUpdate.vue')
    }
];

export default routes;