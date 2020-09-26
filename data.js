$(document).ready(function () {
  var data = [
    {
      img: "img/box-job/aia.jpg",
      title: "Trưởng Nhóm Sale Online (Lương 1 - 2 Triệu)",
      company: "Công Ty Cổ Phần TMDV 30Shine",
      luong: "1-2 triệu",
      location: "hồ chí minh",
    },
    {
      img: "img/box-job/thuong-do.jpg",
      title: "Trưởng Nhóm Sale Online (Lương 3 - 4 Triệu)",
      company: "Công Ty Cổ Phần TMDV 40Shine",
      luong: "3-4 triệu",
      location: "hà nội",
    },
    {
      img: "img/box-job/chubb.webp",
      title: "Trưởng Nhóm Sale Online (Lương  5 - 6 Triệu)",
      company: "Công Ty Cổ Phần TMDV 50Shine",
      luong: "5-6 triệu",
      location: "đà nẵng",
    },
   
  ];
  var add_data = "";
  for (let i = 0; i < data.length; i++) {
    add_data += `
    <li
        class="col-l-12"
        style="margin-bottom: 5px;"
              >
                <div class="box-job__data-item-list">
                  <div class="row">
                    <div class="col-l-5 logo">
                      
                      <div class="box-img">
                        <img src="${data[i].img}" alt="" />
                      </div>
                    </div>

                    <div class="col-l-7 info">
                      <div
                        class="title text_ellipsis"
                        title="${data[i].title}"
                      ></div>
                      <div
                        class="company text_ellipsis"
                        title="${data[i].company}"
                      ></div>
                      <div class="row">
                        <div class="col-l-6">
                          <div class="wage">
                            <i class="fa fa-usd" aria-hidden="true"></i>
                            <span>${data[i].luong}</span>
                          </div>
                        </div>
                        <div class="col-l-6">
                          <div class="location">
                            <i
                              class="fa fa-map-marker"
                              aria-hidden="true"
                              title="${data[i].location}"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
    `;
  }
  $(".box-job__data-item .row").html(add_data);
});