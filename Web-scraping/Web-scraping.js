<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </head>  
<body>
    <script>
        let arrayJson = [];
            $.each($(".product-card"), function() {
                titulo = $(this).find(".product-card__title").text(),
                desconto = parseInt($(this).find(".promotion-tag-discount").text())*-1+'%',
                valor = $(this).find(".promotion-price").text(),
                arrayJson.push({titulo,desconto,valor})
            });
            console.log(JSON.stringify(arrayJson, null, 2));
    </script>
</body>
    
</html>