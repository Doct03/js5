var point = new Object();
var randomPoint=Math.floor(Math.random()*5);// решил проверить со случайными числами
        point.x = randomPoint;
        point.y = randomPoint+1;
        point.f = function () {
            document.write("<p>x = " + point.x + "<p>y = " + point.y);
        };
        point.f();
