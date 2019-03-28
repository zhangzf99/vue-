<template>
    <div class="exam">
        <ul>
            <li>
                <router-link to="/exam/created">创建考试</router-link>
            </li>
            <li>
                <router-link to="/exam/place">考场设定</router-link>
            </li>
            <li>
                <router-link to="exam">成绩录入</router-link>
            </li>
            <li>
                <router-link to="exam">成绩统计</router-link>
            </li>
        </ul>
        <div class="exam_content">
            <router-view></router-view>
        </div>
    </div>
</template>
<style>
    .exam > ul{
        overflow: hidden;
        border-bottom: 1px solid #ededed;
    }
    .exam > ul li{
        float: left;
        line-height: 2em;
        width: 120px;
        text-align: center;
        border-right:1px solid #ededed
    }
</style>

