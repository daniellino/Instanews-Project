// Built by LucyBot. www.lucybot.com
// var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
// url += "?" + $.param({
//         "api-key": "63ff38af2226431eba347fc1bd5073e1"
// });

//EVERYTHING
        $("#genre-select").on("change", function(){
                $(".stories").empty();

//Getting dat API right
        var genreSelect = $(".genre").children(":selected").val();
        var url = "https://api.nytimes.com/svc/topstories/v2/" + genreSelect + ".json"; 
        url+= "?" + $.param({
                "api-key": "63ff38af2226431eba347fc1bd5073e1"
        });

//      console.log(x);
//      console.log(y);

//Loopin for some data
        $.ajax({
                url: url,
                method: "GET",
        }).done(function(data) {
                var a = data.results;
                $.each( a, function( index, value ) {
                        console.log(value);

                        var html = '';
                        html += "<li class='list-item'>";
                        html += "<a href='";
                        html += value.url;
                        html += "'>";
                        html += value.abstract;
                        html += "</a></li>";

                        $(".stories").append(html);
                });

                // console.log(result);
        }).fail(function(err) {
                throw err;
        });
        });