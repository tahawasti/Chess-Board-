let myInput = prompt("Put the number here");
if (myInput == 2 || myInput == 4 || myInput == 8 || myInput == 16) {
  j = myInput / 2;
  for (a = 1; a <= myInput; a++) {
    for (i = 1; i <= j; i++) {
      console.log("* ");
    }
    for (k = 1; k <= j; k++) {
      console.log(" *");
    }
  }
}
