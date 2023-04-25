 alert("Watashina Eren Jeager")

function hesaflagorag(num) {
    var arr = [];
    if (num < 50) {
      for (var i = 1; i <= num; i++) {
        if (i % 3 === 0) {
          arr[arr.length] = i;
        }
      }
    } else if (num <= 100) {
      for (var i = 1; i <= 75; i++) {
        if (i % 5 === 0) {
          arr[arr.length] = i;
        }
      }
    } else {
      for (var i = 1; i <= num; i++) {
        if (i % 8 === 0) {
          arr[arr.length] = i;
        }
      }
    }
    console.log(arr);
  }
  var num = parseInt(prompt("Reqem var kodum 3ə 5ə 8ə bölsün ama konsolu aç "));
  hesaflagorag(num);
  
  