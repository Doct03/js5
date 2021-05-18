var house = {
    roof: "<img src='Images_LR5/Roof.gif'/><br/>",
    secondFloor: "<img src='Images_LR5/SecondFloor.gif'/><br/>",
    firstFloor: "<img src='Images_LR5/FirstFloor.gif'/><br/>",
    basement: "<img src='Images_LR5/Basement.gif'/><br/>",
    address: "<p style='color:green'>UK. London. Muswell Hill. N10<hr/>"
  };
  document.write(house.roof);
  if ("thirdFloor" in house){
      document.write(house["thirdFloor"]);
  }
  else{
      document.write(house["secondFloor"]);
  }
  document.write(house.secondFloor);
  document.write(house.firstFloor);
  document.write(house.basement);
  document.write(house.address);