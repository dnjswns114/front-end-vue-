const routes = [
    {
        path: "/Ch05DataDelivery/Exam01FallthroughAttr",
        component: () =>  import(/* webpackChunkName: "Ch05DataDelivery" */ '@/views/Ch05DataDelivery/Exam01FallthroughAttr')
    },    
    {
        path: "/Ch05DataDelivery/Exam02Props",
        component: () =>  import(/* webpackChunkName: "Ch05DataDelivery" */ '@/views/Ch05DataDelivery/Exam02Props')
    },
    {
        path: "/Ch05DataDelivery/Exam03EventEmit",
        component: () =>  import(/* webpackChunkName: "Ch05DataDelivery" */ '@/views/Ch05DataDelivery/Exam03EventEmit')
    },
    {
        path: "/Ch05DataDelivery/Exam04UseAttrs",
        component: () =>  import(/* webpackChunkName: "Ch05DataDelivery" */ '@/views/Ch05DataDelivery/Exam04UseAttrs')
    },
    {
        path: "/Ch05DataDelivery/Exam05Slot",
        component: () =>  import(/* webpackChunkName: "Ch05DataDelivery" */ '@/views/Ch05DataDelivery/Exam05Slot')
    },
    {
        path: "/Ch05DataDelivery/Exam06ProvideInject",
        component: () =>  import(/* webpackChunkName: "Ch05DataDelivery" */ '@/views/Ch05DataDelivery/Exam06ProvideInject')
    }
];

export default routes;