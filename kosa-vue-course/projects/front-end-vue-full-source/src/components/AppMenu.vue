<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                    Ch01. Vue 시작
                </button>
            </h2>
            <div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link">HomeView</RouterLink>
                            <RouterLink to="/about" class="nav-link">AboutView</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                    Ch02. Component & Routing
                </button>
            </h2>
            <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam01SingleFileComponent" class="nav-link">
                                Exam01SingleFileComponent
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam02FolderComponent" class="nav-link">
                                Exam02FolderComponent
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam03UseUIComponent" class="nav-link">
                                Exam03UseUIComponent
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam04ViewNavigation" class="nav-link">
                                Exam04ViewNavigation
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam05NestedRoute" class="nav-link">
                                Exam05NestedRoute
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam06UrlDataSend" class="nav-link">
                                Exam06UrlDataSend
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                    Ch03. DataBinding
                </button>
            </h2>
            <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam01Expressions" class="nav-link">
                                Exam01Expressions
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam02NotState" class="nav-link">
                                Exam02NotState
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam03State" class="nav-link">
                                Exam03State
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam04ComputedFunBinding" class="nav-link">
                                Exam04ComputedFunBinding
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam05AttrBinding" class="nav-link">
                                Exam05AttrBinding
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam06InnerHtmlBinding" class="nav-link">
                                Exam06InnerHtmlBinding
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam07IfShowBinding" class="nav-link">
                                Exam07IfShowBinding
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam08RepeatBinding" class="nav-link">
                                Exam08RepeatBinding
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam09FormBinding" class="nav-link">
                                Exam09FormBinding
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam10Slot" class="nav-link">
                                Exam10Slot
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                    Ch04. EventHandling & Watch
                </button>
            </h2>
            <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch04EventHandlingWatch/Exam01EventHandling" class="nav-link">
                                Exam01EventHandling
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch04EventHandlingWatch/Exam02Watch" class="nav-link">
                                Exam02Watch
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                    Ch05. Data Delivery
                </button>
            </h2>
            <div id="collapse5" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch05DataDelivery/Exam01FallthroughAttr" class="nav-link">
                                Exam01FallthroughAttr
                            </RouterLink>
                        </li>                        
                        <li class="nav-item">
                            <RouterLink to="/Ch05DataDelivery/Exam02Props" class="nav-link">
                                Exam02Props
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch05DataDelivery/Exam03EventEmit" class="nav-link">
                                Exam03EventEmit
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch05DataDelivery/Exam04UseAttrs" class="nav-link">
                                Exam04UseAttrs
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch05DataDelivery/Exam05Slot" class="nav-link">
                                Exam05Slot
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch05DataDelivery/Exam06ProvideInject" class="nav-link">
                                Exam06ProvideInject
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                    Ch06. Lifecycle Hook
                </button>
            </h2>
            <div id="collapse6" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch06LifecycleHook/Exam01LifecycleHook" class="nav-link">
                                Exam01LifecycleHook
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch06LifecycleHook/Exam02DomElementRef" class="nav-link">
                                Exam02DomElementRef
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                    Ch07. Global State
                </button>
            </h2>
            <div id="collapse7" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch07GlobalState/Exam01RootState" class="nav-link">
                                Exam01RootState
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch07GlobalState/Exam02CounterState" class="nav-link">
                                Exam02CounterState
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                    Ch08. Rest API
                </button>
            </h2>
            <div id="collapse8" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch08RestAPI/Exam01Promise" class="nav-link">
                                Exam01Promise
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch08RestAPI/Exam02Login" class="nav-link">
                                Exam02Login
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch08RestAPI/Exam03Join" class="nav-link">
                                Exam03Join
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch08RestAPI/Exam04Board" class="nav-link">
                                Exam04Board
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
</script>

<style scoped></style>