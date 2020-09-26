

//! Variable
let tableJobs = document.querySelectorAll("#best-jobs .box-job__data-item");
let buttonItem = document.querySelectorAll("#best-jobs .box-job__button-item");

for (let i = 0; i < buttonItem.length; i++) {
  
  //! ==> Chạy trong mảng buttonItem

  buttonItem[i].onclick = function () {
    //! B1: Xác nhận click thằng nào thì nhận thằng đó
    console.log(buttonItem[i]);
    console.log(tableJobs[i]);

    //! B2: Xóa class "showing"
    for (let i = 0; i < tableJobs.length; i++) {
      tableJobs[i].classList.remove("showing");
    }

    //! B3: Bấm nút nào table tương ứng sở hữu class "showing"
    tableJobs[i].classList.add("showing");

    
    
  };
}
