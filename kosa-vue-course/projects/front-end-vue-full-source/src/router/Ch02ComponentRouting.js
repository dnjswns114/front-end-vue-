const routes = [
    {
        path: '/Ch02ComponentRouting/Exam01SingleFileComponent',
        name: 'Exam01SingleFileComponent',
        component: () =>  import(/* webpackChunkName: "Ch02ComponentRouting" */ '@/views/Ch02ComponentRouting/Exam01SingleFileComponent')
    },
    {
        path: '/Ch02ComponentRouting/Exam02FolderComponent',
        component: () =>  import(/* webpackChunkName: "Ch02ComponentRouting" */ '@/views/Ch02ComponentRouting/Exam02FolderComponent')
    },
    {
        path: '/Ch02ComponentRouting/Exam03UseUIComponent',
        component: () =>  import(/* webpackChunkName: "Ch02ComponentRouting" */ '@/views/Ch02ComponentRouting/Exam03UseUIComponent')
    },
    {
        path: '/Ch02ComponentRouting/Exam04ViewNavigation',
        component: () =>  import(/* webpackChunkName: "Ch02ComponentRouting" */ '@/views/Ch02ComponentRouting/Exam04ViewNavigation')
    },
    {
        path: '/Ch02ComponentRouting/Exam05NestedRoute',
        component: () =>  import(/* webpackChunkName: "Ch02ComponentRouting" */ '@/views/Ch02ComponentRouting/Exam05NestedRoute'),
        // /Ch02ComponentRouting/Exam05NestedRoute로 요청했을 경우 리다이렉트
        redirect: '/Ch02ComponentRouting/Exam05NestedRoute/UIComponentA',
        children: [
            {
                path: "UIComponentA", // /Ch02ComponentRouting/Exam05NestedRoute/UIComponentA
                component: () =>  import(/* webpackChunkName: "Ch02ComponentRouting" */ '@/components/Ch02ComponentRouting/UIComponentA.vue')
            },
            {
                path: "UIComponentB", // /Ch02ComponentRouting/Exam05NestedRoute/UIComponentB
                component: () =>  import(/* webpackChunkName: "Ch02ComponentRouting" */ '@/components/Ch02ComponentRouting/UIComponentB.vue')
            },
            {
                path: "UIComponentC", // /Ch02ComponentRouting/Exam05NestedRoute/UIComponentC
                component: () =>  import(/* webpackChunkName: "Ch02ComponentRouting" */ '@/components/Ch02ComponentRouting/UIComponentC.vue')
            }
        ]
    },
    {
        path: '/Ch02ComponentRouting/Exam06UrlDataSend',
        component: () =>  import(/* webpackChunkName: "Ch02ComponentRouting" */ '@/views/Ch02ComponentRouting/Exam06UrlDataSend')
    },
    {
        path: '/Ch02ComponentRouting/Exam06UrlDataReceive/:kind?/:color?',
        component: () =>  import(/* webpackChunkName: "Ch02ComponentRouting" */ '@/views/Ch02ComponentRouting/Exam06UrlDataReceive')
    }
];

export default routes;