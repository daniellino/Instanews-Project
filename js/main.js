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
                var baseData = data.results;
                var html = "<ul>";

                $.each( baseData, function( index, value ) {
                        console.log(value);
                        var storyUrl = value.url;
                        var storyDesc = value.abstract;
                        var storyImag = value.multimedia[4].url;

                        html += "<li class='list-item' style='background-image: url(" + storyImag;
                        html += ")'>"
                        html += "<a href='" + storyUrl;
                        html += "' target='_blank'>"
                        html += "<div class='story-desc'>" + storyDesc;
                        html += "</div></a></li>";

                        $(".stories").append(html);
                });
                html += "</ul>"
                // console.log(result);
        }).fail(function(err) {
                throw err;
        });
        });