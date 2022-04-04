<?php
switch($_POST['id']){
    case 1 : {
        getMensCloths();
        break;
    }
    case 2 : {
        getWomensCloths();
        break;
    }

    case 3 : {
        getBothData();
        break;
    }
}


function getMensCloths(){
    try{
        $APIQuery = "https://fakestoreapi.com/products/category/men's clothing?limit=12";

        $get_http_response_code = null;

        $headers = get_headers($APIQuery);
        $get_http_response_code = substr($headers[0], 9, 3);

        if ($get_http_response_code == 200) {

            $data = file_get_contents($APIQuery);

            echo json_encode([true, $data]);
        }

    }catch(Exception $e){
        echo json_encode([false, $e->getMessage()]);
    }
}

function getWomensCloths(){
    try{
        $APIQuery = "https://fakestoreapi.com/products/category/women's clothing?limit=12";

        $get_http_response_code = null;

        $headers = get_headers($APIQuery);
        $get_http_response_code = substr($headers[0], 9, 3);

        if ($get_http_response_code == 200) {

            $data = file_get_contents($APIQuery);

            echo json_encode([true, $data]);
        }

    }catch(Exception $e){
        echo json_encode([false,$e->getMessage()]);
    }
}

function getBothData(){
    try{
        $menAPIT = "https://fakestoreapi.com/products/category/men's clothing?limit=12";
        $womenAPI = "https://fakestoreapi.com/products/category/women's clothing?limit=12";

        $get_men_http_response_code = null;
        $get_women_http_response_code = null;

        $menAPI_hedders = get_headers($menAPIT);
        $get_men_http_response_code = substr($menAPI_hedders[0], 9, 3);

        $womenAPI_hedders = get_headers($womenAPI);
        $get_women_http_response_code = substr($womenAPI_hedders[0], 9, 3);

        if($get_men_http_response_code == 200 && $get_women_http_response_code == 200){
            $menData = file_get_contents($menAPIT);
            $womenData = file_get_contents($womenAPI);

            echo json_encode([true,$menData,$womenData]);
        }


    }catch(Exception $e){
        echo json_encode([false,$e->getMessage()]);
    }
}
?>