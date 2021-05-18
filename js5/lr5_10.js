var house = {
    roof: "<img src='Images_LR5/Roof.gif'/><br/>",
    secondFloor: "<img src='Images_LR5/SecondFloor.gif'/><br/>",
    firstFloor: "<img src='Images_LR5/FirstFloor.gif'/><br/>",
    basement: "<img src='Images_LR5/Basement.gif'/><br/>",
    address: "<p style='color:green'>UK. London. Muswell Hill. N10<hr/>"
  }


if ("secondFloor" in house) {

    delete house.secondFloor;
}
for (element in house) {
    document.write(house[element]);
}
if ("roof" in house) {

    delete house.roof;
}
for (element in house) {
    document.write(house[element]);
}
