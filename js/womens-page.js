$(document).ready(function() {
    $.ajax({
        type: 'post',
        url: './controller/main.php',
        data: {
            id: 2
        },
        success: function(response) {
            let AllData = JSON.parse(response)
            if (AllData[0] == true) {
                var JsonData = JSON.parse(AllData[1]);

                let htmlContent = "";

                for (let i = 0; i < JsonData.length; i++) {
                    htmlContent += `<div class="item ">
        <div class="headding text-center ">${JsonData[i]['title']}</div>
        <div class="image mt-2 mb-2"><img src="${JsonData[i]['image']}" alt=""></div>
        <div class="description-data women">
            <div class="price text-center">Rs. ${JsonData[i]['price']}</div>
            <div class="description text-center">${JsonData[i]['description']}</div>
        </div>
    </div>`;
                }

                $('#body-content').html("");
                $("#body-content").html(htmlContent);
                // console.log(JsonData.length)
            } else {
                console.log(AllData[1]);
            }
        }
    })
})