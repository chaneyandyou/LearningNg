$(function () {
    /*
     * 一.处理头部导航条滚动时吸顶操作
     * */
    var $logoHeight = $('.nav').offset().top;
    var $curHeight;

    $(window).on('scroll', function () {
        $curHeight = $(window).scrollTop();
        if ($curHeight - $logoHeight > 0) {
            $('.nav').css({
                position: 'fixed',
                top: 0,
                'box-shadow': '0 1px 3px rgba(0, 0, 0, .3)',
                background: '#fff'
            });
            $('.nav .con_left').css({
                display: 'block',
                opacity: 1
            });
            /*
             * 三.1.处理返回顶部逻辑
             * */
            $('.back_top').fadeIn(500);

        } else {
            $('.nav').css({
                position: 'absolute',
                top: $logoHeight,
                'box-shadow': 'none',
                background: 'none'
            });
            $('.nav .con_left').css({
                display: 'none',
                opacity: 0
            });
            /*
             * 三.2.处理返回顶部逻辑
             * */
            $('.back_top').fadeOut(500);
        }
    });

    /*
     * 二.处理tab标签切换
     * */
    $('.list_hd li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('.list_bd').eq(index).addClass('active').siblings().removeClass('active')
    });

    /*
     * 三.3处理返回顶部逻辑
     * */
    $('.back_top img').click(function () {
        $('html body').animate({
            scrollTop: 0
        })
    });
});

var app = angular.module('app',[]);

app.controller("taskCtrl",['$scope',function ($scope) {
    $scope.taskList = [];
    $scope.finishTaskList = [];
    $scope.submit = function (e) {
        e.preventDefault();
        var taskItem = {
            name:$scope.task,
            check:false
        };
        $scope.taskList.push(taskItem);
        $scope.task = ''
    };

    $scope.checkBoxClick = function (key) {
      var checkTask = $scope.taskList.splice(key,1)[0];
      checkTask.check = true;
      $scope.finishTaskList.push(checkTask);
    }

    $scope.delete = function (key) {
        $scope.taskList.splice(key,1);
    }
}]);


















