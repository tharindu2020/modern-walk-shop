$(document).ready(function(){
    $.ajax({
        type: 'post',
        url: './controller/main.php',
        data: {
            id: 3
        },
        success: function(response) {
            let AllData = JSON.parse(response)
            if (AllData[0] == true) {
                var menJsonData = JSON.parse(AllData[1]);
                var womenJsonData = JSON.parse(AllData[2]);

                let htmlContent = "";

                let arraySize = 0;
                if(menJsonData.length > womenJsonData.length){
                    arraySize = womenJsonData.length
                }else{
                    arraySize = menJsonData.length
                }

                if (arraySize > 3){
                    arraySize = 2;
                }

                for (let i = 0; i < arraySize; i++) {
                    htmlContent += `<div class="item ">
        <div class="headding text-center ">${menJsonData[i]['title']}</div>
        <div class="image mt-2 mb-2"><img src="${menJsonData[i]['image']}" alt=""></div>
        <div class="description-data men">
            <div class="price text-center">Rs. ${menJsonData[i]['price']}</div>
            <div class="description text-center">${menJsonData[i]['description']}</div>
        </div>
    </div>
    <div class="item ">
        <div class="headding text-center ">${womenJsonData[i]['title']}</div>
        <div class="image mt-2 mb-2"><img src="${womenJsonData[i]['image']}" alt=""></div>
        <div class="description-data women">
            <div class="price text-center">Rs. ${womenJsonData[i]['price']}</div>
            <div class="description text-center">${womenJsonData[i]['description']}</div>
        </div>
    </div>`;
                }

                $('#flash-Container').html("");
                $("#flash-Container").html(htmlContent);
                // console.log(JsonData.length)
            } else {
                console.log(AllData[1]);
            }
        }
    }) 
})