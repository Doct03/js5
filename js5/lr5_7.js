var builder = new Object();
        builder.createRoof = function () {
            document.write("<img src='Images_LR5/Roof.gif'/><br/>");
        };
        builder.createFirstFloor = function () {
            document.write("<img src='Images_LR5/FirstFloor.gif'/><br/>");
        };
        builder.createSecondFloor = function () {
            document.write("<img src='Images_LR5/SecondFloor.gif'/><br/>");
        };
        builder.createBasement = function () {
            document.write("<img src='Images_LR5/Basement.gif'/><br/>");
        };
       
        builder.createRoof();
        builder.createSecondFloor();
        builder.createFirstFloor();
        builder.createBasement();
