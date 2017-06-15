let app = angular.module('myApp',['ng','ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/nav1',{
            templateUrl: 'template/main(1).html',
            controller: 'main_01'
        }).when('/nav2',{
            templateUrl: 'template/main(2).html',
            controller: 'main_02'
        }).when('/nav21',{
            templateUrl: 'template/main(2.1).html',
            controller: 'main_02_1'
        }).when('/nav3',{
            templateUrl: 'template/main(3).html',
            controller: 'main_03'
        }).when('/nav4',{
            templateUrl: 'template/main(4).html',
            controller: 'main_04'
        }).when('/nav5',{
            templateUrl: 'template/main(5).html',
            controller: 'main_05'
        }).when('/nav51',{
            templateUrl: 'template/main(5.1).html',
            controller: 'main_05_1'
        }).when('/login',{
            templateUrl: 'template/login.html',
            controller: 'login'
        }).when('/register',{
            templateUrl: 'template/register.html',
            controller: 'register'
        }).otherwise('/nav1');

});
//页头
app.controller('head',['$scope','$location','$http','$window',function($scope,$location,$http,$window){
    $scope.i = 0;
    $scope.arr = [
        '首页','宠物医疗','企业新闻','专家案例','关于我们'
    ];

    $scope.skip = function(index){
        $scope.i = index;
        $location.path('/nav'+(index+1));
    }
}]);
//首页
app.controller('main_01',['$scope','$interval',function($scope,$interval){
    //轮播
    $scope.i = 0;
    $scope.arr = [
        'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgg_iXwAUooNS3MDCADzj0Aw.jpg',
        'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAghuiXwAUogM21uwcwgA849AM.jpg'
    ];

    $scope.tu = function(){
        $scope.i++;
        if($scope.i>$scope.arr.length-1){
            $scope.i = 0;
        }
    };
    $scope.stop = function(num){
        if(num == 1){
            $interval.cancel(timer);
        }
        if(num == 2){
            timer = $interval($scope.tu,3000);
        }
    }
    $scope.Tab = function(num){
        if(num == 1){
            $scope.i--;
            if($scope.i<0){
                $scope.i = $scope.arr.length-1;
            }
        }
        if(num == 2){
            $scope.tu();
        }
    }
    let timer = $interval($scope.tu,3000);
    //广告一
    $scope.arr_p = [
        '拥有一批高学历、临床经验丰富的宠物医师，其中硕士35人、博士2人，执业兽医师328人。',
        '有完善的宠物内科、心血管科、骨科、软组织外科、眼科、肿瘤科、牙科、皮肤科、影像科、猫科等科室，并在宠物骨科、眼科、肿瘤科、牙',
        '科、皮肤科等领域综合实力领跑全国。'
    ];
    //广告二
    $scope.imgs = [
        'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgjOiXwAUo_Iv6hwIw_wI43AM.jpg',
        'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgjuiXwAUo_fTloAMw_wI4mAI.jpg',
        'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgk_iXwAUo0PPtkwcwjAM4ugE.jpg'
    ];
    //广告三
    $scope.arr_span = ['立即咨询','关于我们'];
    //广告四
    $scope.arr_div = [
        '宠物医院成立于1998年隶属于医疗集团股份有限公司，全国共有近百家直营分院，分布于上海、广州、深圳、长沙。凭借阵容强大的专家团队、媲美港台的医疗设备、遵循规范、严谨的作业流程，每年为几十万只宠物提供高品质的服务。服务范围涵盖：宠物医疗保健、',
        '凭借阵容强大的专家团队、媲美港台的医疗设备、遵循规范、严谨的作业流程，每年为几十万只宠物提供高品质的服务。服务范围涵盖：宠物医疗保健、拥有一批高学历、临床经验丰富的宠物医师，其中硕士35人、博士2人，执业兽医师328人。有完善的宠物内科、心血管科、骨科、软组织外科、眼科、肿瘤科、牙科、皮肤科、影像科、猫科等科室，并在宠物骨科、眼科、肿瘤科、牙科、皮肤科等领域综合实力领跑全国。',
        '美容造型、寄养、洗浴、SPA、食品及用品等。拥有一批高学历、临床经验丰富的宠物医师，其中硕士35人、博士2人，执业兽医师328人。有完善的宠物内科、心血管科、骨科、软组织外科、眼科、肿瘤科、牙科、皮肤科、影像科、猫科等科室，并在宠物骨科、眼科、肿瘤科、牙科、皮肤科等领域综合实力领跑全国。'
    ];
    $scope.arr_p1 = [
        '宠物医院眼科，肿瘤科专家，','中国兽医协会宠物诊疗分会理事',
        '第三届广东省宠物行业发展高峰论坛特聘讲师','第三届小动物医师大会优秀兽医师',
        '第五届华南小动物医师大会优秀青年兽医师'
    ];
    //广告五
    $scope.arr_p2 = [
        '从事宠物医疗工作八年，接诊病例超过两万例，钻研超声影像诊断4年，是宠物医疗行业最早一批从事超声影像诊',
        '断医生之一，积累了丰富的临床经验。作为教学医院负责人，为公司培养了大量的影像学人才，同时多次作为',
        '特聘讲师前往高校、迈瑞超声培训班授课。'
    ];
    //广告六
    $scope.arr_p3 = [
        '随着生活水平的提高，狗狗的生活标准和档次也得到了提高，有很多家长甚至会感叹，有时候狗狗吃的可能比自己还好。牛排、三文鱼、高档狗粮，',
        '这些已经是很多宠物狗日常饮食的标准了。然而也可能正是因为生活档次提高，更多的狗狗也出现了挑食、厌食的情况。提高狗狗食欲的妙招有一些，当',
        '然这还得根据不同狗狗的特质选择不同的妙招。一般来说，当狗狗不吃饭的时候，主人可以尝试使用以下几招来提高狗狗的食欲。'
    ];
    $scope.arr_p4 = [
        {headline:'如何通过牙齿推断猫咪的年龄',date:'2016-10-19',content:'猫咪的年龄，主要以犬牙齿的生长情况、齿峰及牙齿的磨损程度、外形、颜色等综合判定。为了便於掌握，现将猫咪的齿龄介绍如下：成年猫咪的牙齿共30枚，幼年猫咪的...'},
        {headline:'如何通过牙齿推断猫咪的年龄',date:'2016-10-19',content:'猫咪的年龄，主要以犬牙齿的生长情况、齿峰及牙齿的磨损程度、外形、颜色等综合判定。为了便於掌握，现将猫咪的齿龄介绍如下：成年猫咪的牙齿共30枚，幼年猫咪的...'},
        {headline:'狗狗抑郁症的原因及解决办法',date:'2016-10-19',content:'抑郁症这个词对于我们来说并不陌生，它是一种心理障碍。可是你知道吗？狗狗也是会的抑郁症的！下面就带大家了解狗狗抑郁症产生的原因及解决办法。狗狗抑郁症产生...'},
        {headline:'狗狗抑郁症的原因及解决办法',date:'2016-10-19',content:'抑郁症这个词对于我们来说并不陌生，它是一种心理障碍。可是你知道吗？狗狗也是会的抑郁症的！下面就带大家了解狗狗抑郁症产生的原因及解决办法。狗狗抑郁症产生...'}
    ];
    //广告七
    $scope.arr_p5 = [
        {name:'联系QQ：',nr:'258506508'},
        {name:'手机号码：',nr:'130000000'},
        {name:'联系邮箱：',nr:'contact@fkadjkhsf.com'},
        {name:'联系地址：',nr:'XXX省XXX市XXX县XXX路XXX号'}
    ];
    //存留言
    $scope.reloadRoute = function () {
        $window.location.reload();
    };
    $scope.submit = function(){
        $http.get('index.php',{
            params:{
                act:'add',
                name: $scope.name,
                petname: $scope.petname,
                describe: $scope.describe
            }
        }).success(function(){
            alert("提交成功!");
            $scope.reloadRoute();
        }).error(function(){
            alert("提交失败!");
        });
    }
}]);
//分页一
app.controller('main_02',['$scope',function($scope){
    //广告图
    $scope.banner_img = 'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgs82gwAUovvmbugUwgA843gI.jpg';
    //广告一
    $scope.arr_p6 = [
        '拥有一批高学历、临床经验丰富的宠物医师，其中硕士35人、博士2人，执业兽医师328人。有完善的宠物内科、心血管科、骨科、软组织外科、眼科、肿瘤科、牙科、皮肤科、影像科、猫科等科室，并在宠物骨科、眼科、肿瘤科、牙科、皮肤科等领域综合实力领跑全国。',
        '凭借阵容强大的专家团队、媲美港台的医疗设备、遵循规范、严谨的作业流程，每年为几十万只宠物提供高品质的服务。范围涵盖：宠物医疗保健、美容造型、寄养、洗浴、SPA、食品及用品等。临床经验丰富的宠物医师，其中硕士35人、博'
    ];
    //广告二
    $scope.arr_p7 = [
        '强大的专家团队、媲美港台的医疗设备、遵循规范、严谨的作业流程，',
        '每年为几十万只宠物提供高品质的服务。'
    ];
    //广告三
    $scope.arr_p8 = [
        {name:'猫科',nr:'Felidae'},
        {name:'眼科',nr:'ophthalmology'},
        {name:'骨外科',nr:'BONE SURGERY'},
    ];
    //广告四
    $scope.arr_p9 = [
        {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgvM2gwAUo2KnqugYw9AI4iAI.jpg',xtitle:'右侧肱骨术后X线片',date:'2016/09/20',title:'巴贝斯虫感染病例的诊治',nr:'于肱骨外侧纵向切开皮肤，远端偏向后侧，止于肘后，依次切开皮下脂肪及筋膜，沿肱三头肌前缘切开肌膜，小心避让桡神经，剥离肱骨表面增生的组织暴露骨折端。从近端肱骨头正向打入髓内针，远端通过骨折处直到肱骨髁，用T型钢板塑形，复位骨折后依次打入螺钉，对患肢做多角度不同力度的运动，检查稳定性，确定螺钉无累及关节面。无菌生理食盐水冲洗伤口后，PGA可吸收缝合线依次缝合肌膜、皮下组织，结节缝合皮肤。'},
        {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgvM2gwAUo2KnqugYw9AI4iAI.jpg',xtitle:'右侧肱骨术后X线片',date:'2016/09/20',title:'巴贝斯虫感染病例的诊治',nr:'于肱骨外侧纵向切开皮肤，远端偏向后侧，止于肘后，依次切开皮下脂肪及筋膜，沿肱三头肌前缘切开肌膜，小心避让桡神经，剥离肱骨表面增生的组织暴露骨折端。从近端肱骨头正向打入髓内针，远端通过骨折处直到肱骨髁，用T型钢板塑形，复位骨折后依次打入螺钉，对患肢做多角度不同力度的运动，检查稳定性，确定螺钉无累及关节面。无菌生理食盐水冲洗伤口后，PGA可吸收缝合线依次缝合肌膜、皮下组织，结节缝合皮肤。'},
        {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgvM2gwAUo2KnqugYw9AI4iAI.jpg',xtitle:'右侧肱骨术后X线片',date:'2016/09/20',title:'巴贝斯虫感染病例的诊治',nr:'于肱骨外侧纵向切开皮肤，远端偏向后侧，止于肘后，依次切开皮下脂肪及筋膜，沿肱三头肌前缘切开肌膜，小心避让桡神经，剥离肱骨表面增生的组织暴露骨折端。从近端肱骨头正向打入髓内针，远端通过骨折处直到肱骨髁，用T型钢板塑形，复位骨折后依次打入螺钉，对患肢做多角度不同力度的运动，检查稳定性，确定螺钉无累及关节面。无菌生理食盐水冲洗伤口后，PGA可吸收缝合线依次缝合肌膜、皮下组织，结节缝合皮肤。'}
    ];
}]);
//分页一一
app.controller('main_02_1',['$scope',function($scope){
    //广告图
    $scope.banner_img = 'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgpsOhwAUo7oyK7wIwgA843gI.jpg';
    //广告一
    $scope.arrs = [
        '拥有一批高学历、临床经验丰富的宠物医师，其中硕士35人、博士2人，执业兽医师328人。',
        '有完善的宠物内科、心血管科、骨科、软组织外科、眼科、肿瘤科、牙科、皮肤科、影像科、猫科等科室，并在宠物骨科、眼科、肿瘤科、牙科、皮肤科等领域综合实力领跑全国。'
    ];
    //广告二
    $scope.arrss = [
        [
            {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgtcOhwAUo8ZuhlgYwGDgY.jpg',text:'训练哈瓦那棕猫不咬人的几招实用技巧'},
            {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgqcOhwAUonprr5QMwGDgY.jpg',text:'一般人都认为猫咪性格比较温顺，其实不然！虽然说经常听到狗狗咬人事件，但其实猫咪也是会咬...'}
        ],
        [
            {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgtcOhwAUo8ZuhlgYwGDgY.jpg',text:'奥西猫的价格和饲养技巧'},
            {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgqcOhwAUonprr5QMwGDgY.jpg',text:'一般人都认为猫咪性格比较温顺，其实不然！虽然说经常听到狗狗咬人事件，但其实猫咪也是会咬...'}
        ],
        [
            {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgtcOhwAUo8ZuhlgYwGDgY.jpg',text:'美国刚毛猫生活习性和饲养技巧大公开'},
            {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgqcOhwAUonprr5QMwGDgY.jpg',text:'一般人都认为猫咪性格比较温顺，其实不然！虽然说经常听到狗狗咬人事件，但其实猫咪也是会咬...'}
        ],
        [
            {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgtcOhwAUo8ZuhlgYwGDgY.jpg',text:'猫咪有哪些不可以吃的啊?!求解!'},
            {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgqcOhwAUonprr5QMwGDgY.jpg',text:'一般人都认为猫咪性格比较温顺，其实不然！虽然说经常听到狗狗咬人事件，但其实猫咪也是会咬...'}
        ],
        [
            {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgtcOhwAUo8ZuhlgYwGDgY.jpg',text:'美国刚毛猫生活习性和饲养技巧大公开'},
            {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgqcOhwAUonprr5QMwGDgY.jpg',text:'一般人都认为猫咪性格比较温顺，其实不然！虽然说经常听到狗狗咬人事件，但其实猫咪也是会咬...'}
        ],
        [
            {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgtcOhwAUo8ZuhlgYwGDgY.jpg',text:'如何让猫咪安全吃鱼的实用好招'},
            {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgqcOhwAUonprr5QMwGDgY.jpg',text:'一般人都认为猫咪性格比较温顺，其实不然！虽然说经常听到狗狗咬人事件，但其实猫咪也是会咬...'}
        ]
    ];
    //广告四
    $scope.arr_p9 = [
        {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgsMOhwAUogO2SqwMw9AI4iAI.jpg',xtitle:'',date:'2016/09/20',title:'给猫猫剪趾甲的正确方法',nr:'在替宠物剪趾甲前您要准备：猫狗专用剪趾甲器、消毒药水、药绵、止血剂。 　　具体操作方法如下： 　　1.把猫狗放在大腿上，轻轻抚它的头令它们安静； 　　2.剪趾甲器与趾甲的角度要呈45度； 　　3.拿起其中一只脚以专用剪趾甲器把长的趾甲逐一剪下； 　　4.不要剪得太近肉根（呈深色不透明），否则会流血； 　　5.若不慎流血，便要立即用药棉加上止血剂止血； 　　'},
        {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgs8OhwAUo3p-c4AIw9AI4iAI.jpg',xtitle:'',date:'2016/09/20',title:'怎么给猫猫的皮肤进行护理',nr:'在替宠物剪趾甲前您要准备：猫狗专用剪趾甲器、消毒药水、药绵、止血剂。 　　具体操作方法如下： 　　1.把猫狗放在大腿上，轻轻抚它的头令它们安静； 　　2.剪趾甲器与趾甲的角度要呈45度； 　　3.拿起其中一只脚以专用剪趾甲器把长的趾甲逐一剪下； 　　4.不要剪得太近肉根（呈深色不透明），否则会流血； 　　5.若不慎流血，便要立即用药棉加上止血剂止血； 　　'}
    ];
}]);
//分页二
app.controller('main_03',['$scope',function($scope){
    //广告图
    $scope.banner_img = 'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgw_WgwAUo4KuTxQYwgA843gI.jpg';
    //广告一
    $scope.arr_nav1 = [
        '为了让更加需要的流浪猫得到救助，请各位申请人必须保证救助信息的真实性，我们也将定期对完成免费绝育手术的申请名单公布，接受公众监督。大家如有发现弄虚作假，可以直接向我们反馈，一旦核实是弄虚作假，将取消以后申请资格。',
        '为了控制流浪猫的数量和规模，瑞鹏宠物医院一直致力推动流浪猫的绝育工作，继续推行流浪猫绝育计划，帮助救助人和志愿者坚持不懈的为身边的流浪猫绝育，发起深圳流浪猫绝育计划公益活动，让我们共同为改变深圳流浪猫现状而努力。'
    ];
    //广告三
    $scope.arr_p4 = [
        {headline:'如何通过牙齿推断猫咪的年龄',date:'2016-10-19',content:'猫咪的年龄，主要以犬牙齿的生长情况、齿峰及牙齿的磨损程度、外形、颜色等综合判定。为了便於掌握，现将猫咪的齿龄介绍如下：成年猫咪的牙齿共30枚，幼年猫咪的...'},
        {headline:'猫咪绝育后的日常护理',date:'2016-10-19',content:'绝育后的猫咪身体相对要虚弱很多，所以猫咪的护理工作需要我们做的很全面，猫咪手术后性格可能会有些变化，这个时候主人应该照顾猫咪的感受，在饮食上为猫咪...'},
        {headline:'如何给猫咪驱虫',date:'2016-10-19',content:'​猫咪定期驱虫，是保障猫咪身体健康的一个重要的环节。尤其是刚进家的流浪猫、散养的猫咪、以肉为主食的猫咪，为猫咪进行体内体外驱虫更是一件必须完成的事...'},
        {headline:'给狗狗免疫时需要注意什么',date:'2016-10-19',content:'一、经过这个免疫计划后，以后要做的就是每年注射一针六联疫苗和一针狂犬疫苗，这样就可以让狗狗和那些威胁巨大的传染病说拜拜了。二、给怀孕母犬注射疫苗是绝对...'},
        {headline:'狗狗抑郁症的原因及解决办法',date:'2016-10-19',content:'抑郁症这个词对于我们来说并不陌生，它是一种心理障碍。可是你知道吗？狗狗也是会的抑郁症的！下面就带大家了解狗狗抑郁症产生的原因及解决办法。狗狗抑郁症产生...'},
        {headline:'幼犬为什么容易得犬瘟和细小',date:'2016-10-19',content:'幼犬身体性的原因很多性的犬瘟和细小，常常会发生在幼犬之间，也有预先天的的原因，更何况犬瘟和细小能进行传染，下面从一些具体的原因分析下幼犬为什么...'}
    ];
    //广告四
    $scope.arr_p9 = [
        {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgyOWgwAUovIOvkgEw9AI4iAI.jpg',xtitle:'',date:'2016/09/20',title:'如何正确认识猫猫绝育',nr:'于肱骨外侧纵向切开皮肤，远端偏向后侧，止于肘后，依次切开皮下脂肪及筋膜，沿肱三头肌前缘切开肌膜，小心避让桡神经，剥离肱骨表面增生的组织暴露骨折端。从近端肱骨头正向打入髓内针，远端通过骨折处直到肱骨髁，用T型钢板塑形，复位骨折后依次打入螺钉，对患肢做多角度不同力度的运动，检查稳定性，确定螺钉无累及关节面。无菌生理食盐水冲洗伤口后，PGA可吸收缝合线依次缝合肌膜、皮下组织，结节缝合皮肤。'},
        {src:'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgy_WgwAUoybbGajD0AjiIAg.jpg',xtitle:'',date:'2016/09/20',title:'如何看护猫猫？',nr:'于肱骨外侧纵向切开皮肤，远端偏向后侧，止于肘后，依次切开皮下脂肪及筋膜，沿肱三头肌前缘切开肌膜，小心避让桡神经，剥离肱骨表面增生的组织暴露骨折端。从近端肱骨头正向打入髓内针，远端通过骨折处直到肱骨髁，用T型钢板塑形，复位骨折后依次打入螺钉，对患肢做多角度不同力度的运动，检查稳定性，确定螺钉无累及关节面。无菌生理食盐水冲洗伤口后，PGA可吸收缝合线依次缝合肌膜、皮下组织，结节缝合皮肤。'}
    ];
}]);
//分页三
app.controller('main_04',['$scope',function($scope){
    //广告图
    $scope.banner_img = 'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgqPqgwAUo9qT6lAUwgA843gI.jpg';
    //广告一
    $scope.arr_div = [
        '宠物医院成立于1998年隶属于医疗集团股份有限公司，全国共有近百家直营分院，分布于上海、广州、深圳、长沙。凭借阵容强大的专家团队、媲美港台的医疗设备、遵循规范、严谨的作业流程，每年为几十万只宠物提供高品质的服务。服务范围涵盖：宠物医疗保健、',
        '凭借阵容强大的专家团队、媲美港台的医疗设备、遵循规范、严谨的作业流程，每年为几十万只宠物提供高品质的服务。服务范围涵盖：宠物医疗保健、拥有一批高学历、临床经验丰富的宠物医师，其中硕士35人、博士2人，执业兽医师328人。有完善的宠物内科、心血管科、骨科、软组织外科、眼科、肿瘤科、牙科、皮肤科、影像科、猫科等科室，并在宠物骨科、眼科、肿瘤科、牙科、皮肤科等领域综合实力领跑全国。',
        '美容造型、寄养、洗浴、SPA、食品及用品等。拥有一批高学历、临床经验丰富的宠物医师，其中硕士35人、博士2人，执业兽医师328人。有完善的宠物内科、心血管科、骨科、软组织外科、眼科、肿瘤科、牙科、皮肤科、影像科、猫科等科室，并在宠物骨科、眼科、肿瘤科、牙科、皮肤科等领域综合实力领跑全国。'
    ];
    $scope.arr_p1 = [
        '宠物医院眼科，肿瘤科专家，','中国兽医协会宠物诊疗分会理事',
        '第三届广东省宠物行业发展高峰论坛特聘讲师','第三届小动物医师大会优秀兽医师',
        '第五届华南小动物医师大会优秀青年兽医师'
    ];
    //广告三
    $scope.arr = [
        {name:'1.基础信息',ms:'家猫，年龄1岁，体重2.2kg，雄性，未绝育，从五楼坠落后无法站立和行走，主人带往我医院进行就诊。'},
        {name:'2.临床检查',ms:'患猫精神状态萎靡，口色苍白，T：38.3℃，P：86次/分，R：32次/分，呼吸急促，卧地不起，右前肢及双后肢解剖姿势异常，轻微牵引疼痛感明显，可闻及明显骨摩擦音。'}
    ];
    $scope.arrs = [
        {name:'3.辅助检查',ms:'3.1 血液学检查结果：血常规见轻度贫血及炎性血像、生化检查提示肝损伤、血气检查结果未见明显异常。'},
        {name:'4.初步诊断',ms:'综合以上各项检查，初步诊断为右肱骨远端粉碎性骨折合并双侧腓骨远端骨折、双侧距骨粉碎性骨折。'},
        {name:'5.治疗',ms:'本病例胸腹部X线片检查未见明显异常，但鉴于患猫体况较差，术前3天给予输液预防继发感染、增加营养等，待患猫体况好转后，实施内固定手术。丙泊酚诱导麻醉、异氟烷维持麻醉后，患肢备皮消毒。'}
    ];
}]);
//分页四
app.controller('main_05',['$scope',function($scope){
    //广告图
    $scope.banner_img = 'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgu4ehwAUo5ovRtgUwgA843gI.jpg';
    //广告一
    $scope.arr = [
        '宠物医院成立于1998年隶属于医疗集团股份有限公司，全国共有近百家直营分院，分布于上海、广州、深圳、长沙。凭借阵容强大的专家团队、媲美港台的医疗设备、遵循规范、严谨的作业流程，每年为几十万只宠物提供高品质的服务。服务范围涵盖：宠物医疗保健、',
        '美容造型、寄养、洗浴、SPA、食品及用品等。拥有一批高学历、临床经验丰富的宠物医师，其中硕士35人、博士2人，执业兽医师328人。有完善的宠物内科、心血管科、骨科、软组织外科、眼科、肿瘤科、牙科、皮肤科、影像科、猫科等科室，并在宠物骨科、眼科、肿瘤科、牙科、皮肤科等领域综合实力领跑全国。'
    ];
    //广告二
    $scope.arrs = [
        '拥有一批高学历、临床经验丰富的宠物医师，其中硕士35人、博士2人，执业兽医师328人。',
        '有完善的宠物内科、心血管科、骨科、软组织外科、眼科、肿瘤科、牙科、皮肤科、影像科、猫科等科室，并在宠物骨科、眼科、肿瘤科、牙科、皮肤科等领域综合实力领跑全国。'
    ];
    //广告四
    $scope.text = [
        '宠物医院成立于1998年隶属于医疗集团股份有限公司，全国共有近百家直营分院，分布于上海、广州、深圳、长沙。凭借阵容强大的专家团队、媲美港台的医疗设备、遵循规范、严谨的作业流程，每年为几十万只宠物提供高品质的服务。服务范围涵盖：宠物医疗保健、',
        '美容造型、寄养、洗浴、SPA、食品及用品等。拥有一批高学历、临床经验丰富的宠物医师，其中硕士35人、博士2人，执业兽医师328人。有完善的宠物内科、心血管科、骨科、软组织外科、眼科、肿瘤科、牙科、皮肤科、影像科、猫科等科室，并在宠物骨科、眼科、肿瘤科、牙科、皮肤科等领域综合实力领跑全国。'
    ];
}]);
//分页四一
app.controller('main_05_1',['$scope','$http','$window',function($scope,$http,$window){
    //广告图
    $scope.banner_img = 'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgu4ehwAUo5ovRtgUwgA843gI.jpg';
    //存留言
    $scope.reloadRoute = function () {
        $window.location.reload();
    };
    $scope.submit = function(){
        $http.get('index.php',{
            params:{
                act:'add',
                name: $scope.name,
                petname: $scope.petname,
                describe: $scope.describe
            }
        }).success(function(){
            alert("提交成功!");
            $scope.reloadRoute();
        }).error(function(){
            alert("提交失败!");
        });
    };
    //看留言
    $scope.arr_nr = [];
    $http.get('index.php',{
        params:{
            act:'list'
        }
    }).success(function(data){
        $scope.arr_nr = data;
    }).error(function(){
        aleft('获取数据失败');
    });
}]);
//登录
app.controller('login',['$scope','$http','$location',function($scope,$http,$location){
    //广告图
    $scope.banner_img = 'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgpsOhwAUo7oyK7wIwgA843gI.jpg';
    //登录
    //
    Array.prototype.S=String.fromCharCode(2);
    Array.prototype.in_array=function(e){
        let r=new RegExp(this.S+e+this.S);
        return (r.test(this.S+this.join(this.S)+this.S));
    };
    //
    $scope.via = true;
    $scope.Names = '';
    $scope.pass = '';
    $scope.Name = null;
    $scope.Pas = null;
    $scope.arrs = [];
    $scope.arr_name = [];
    $scope.arr_pas = [];
    $http.get('register.php',{
            params:{
                act:'list'
            }
        }).success(function(data){
            $scope.arrs = data;
        }).error(function(){
            aleft('获取数据失败');
        });
    $scope.verifyN = function(obj){
        for(key in obj){
            for(let i = 0,len = obj.length;i<len;i++){
                $scope.arr_name[i] = obj[i]['name'];
            }
        };
        if($scope.arr_name.in_array($scope.name)){
            $scope.Name = true;
            if($scope.Name == true && $scope.Pas == true){
                $scope.via = false;
            }
        }
    }
    $scope.verifyP = function(obj){
        for(key in obj){
            for(let i = 0,len = obj.length;i<len;i++){
                $scope.arr_pas[i] = obj[i]['pas'];
            }
        };
        if($scope.arr_pas.in_array($scope.pas)){
            $scope.Pas = true;
            if($scope.Name == true && $scope.Pas == true){
                $scope.via = false;
            }
        }
    }
    $scope.login = function(){
            $location.path('/nav1');
    }
}]);
//注册
app.controller('register',['$scope','$http','$window','$location',function($scope,$http,$window,$location){
    //广告图
    $scope.banner_img = 'http://11563763.s61i.faiusr.com/2/AD0I8_XBBRACGAAgu4ehwAUo5ovRtgUwgA843gI.jpg';
    //注册
    $scope.reloadRoute = function () {
        $window.location.reload();
    };
    //用户名正则
    $scope.names = /^[a-zA-Z0-9_]{6,12}$/;
    //密码正则
    $scope.pass = /^[a-zA-Z]\w{5,17}$/;
    //手机号正则
    $scope.sjhs = /^1[0-9]{10}$/;
    //邮箱正则
    $scope.yxs = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    $scope.warnName = '';
    $scope.warnPass = '';
    $scope.warnSjh = '';
    $scope.warnYx = '';
    $scope.wN = null;
    $scope.wP = null;
    $scope.wS = null;
    $scope.wY = null;
    $scope.via = true;
    $scope.verifyN = function(name){
        //判断用户名
        if(name == '' || name == undefined){
            $scope.warnName = '对不起,用户名不能为空';
            $scope.wN = 1;
        }else{
            if(!$scope.names.test(name)){
                $scope.warnName = '请输入字母或者数字长度(6~12)位!';
                $scope.wN = 1;
            }else{
                $scope.warnName = '';
                $scope.wN = false;
                if($scope.wN == false &&$scope.wP == false&&$scope.wS == false&&$scope.wY == false){
                    $scope.via = false;
                }
            }
        }
    }
    $scope.verifyP = function(pas){
        //判断密码
        if(pas == '' || pas == undefined){
            $scope.warnPass = '对不起,密码不能为空';
            $scope.wP = 1;
        }else{
            if(!$scope.pass.test(pas)){
                $scope.warnPass = '以字母开头，长度在6~18之间，只能包含字符、数字和下划线!';
                $scope.wP = 1;
            }else{
                $scope.warnPass = '';
                $scope.wP = false;
                if($scope.wN == false &&$scope.wP == false&&$scope.wS == false&&$scope.wY == false){
                    $scope.via = false;
                }
            }
        }
    }
    $scope.verifyS = function(sjh){
        //判断手机号
        if(sjh == '' || sjh == undefined){
            $scope.warnSjh = '对不起,手机号不能为空';
            $scope.wS = 1;
        }else{
            if(!$scope.sjhs.test(sjh)){
                $scope.warnSjh = '请输入11位的手机号并且为数字!';
                $scope.wS = 1;
            }else{
                $scope.warnSjh = '';
                $scope.wS = false;
                if($scope.wN == false &&$scope.wP == false&&$scope.wS == false&&$scope.wY == false){
                    $scope.via = false;
                }
            }
        }
    }
    $scope.verifyY = function(yx){
        //判断邮箱
        if(yx == '' || yx == undefined){
            $scope.warnYx = '对不起,邮箱不能为空';
            $scope.wY = 1;
        }else{
            if(!$scope.yxs.test(yx)){
                $scope.warnYx = '请输入正确的邮箱!';
                $scope.wY = 1;
            }else{
                $scope.warnYx = '';
                $scope.wY = false;
                if($scope.wN == false &&$scope.wP == false&&$scope.wS == false&&$scope.wY == false){
                    $scope.via = false;
                }
            }
        }
    }
    $scope.register = function(){
        $http.get('register.php',{
            params:{
                act:'add',
                name: $scope.name,
                pas: $scope.pas,
                sjh: $scope.sjh,
                yx: $scope.yx
            }
        }).success(function(){
            $location.path('/login');
        }).error(function(){
            alert("注册失败!");
        });
    };
}]);
//页面跳转
app.controller('skip_top',['$scope','$window',function($scope,$window){
    let oSikp = document.getElementsByClassName('skip_top')[0];
    let i = 500;
    window.onscroll = function(){
        if(document.body.scrollTop >= i){
            oSikp.style.display = 'block';
        }else{
            oSikp.style.display = 'none';
        };
    }
    $scope.skip = function(){
        document.body.scrollTop = 0;
    }
}]);