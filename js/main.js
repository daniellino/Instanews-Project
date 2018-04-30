// Built by LucyBot. www.lucybot.com
// var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
// url += "?" + $.param({
//         "api-key": "63ff38af2226431eba347fc1bd5073e1"
// });

//EVERYTHING
        $("#genre-select").on("change", function(){
                $(".stories").empty();

// Append loading gif
        $(".stories-grid").append("<img class='loader' src='assets/images/ajax-loader.gif'>");

//Getting dat API right
        var genreSelect = $(this).val();
        // console.log(genreSelect);
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
                var baseData = data.results.filter(function(value){
                        return value.multimedia.length > 0;
                }).slice(0, 12);
                // console.log(baseData);
                
                $.each(baseData, function(key, value) {
                        // console.log(value);
                        var storyUrl = value.url;
                        var storyDesc = value.abstract;
                        var storyImag = value.multimedia[4].url;

                        var html = "";
                        html += "<li class='list-item' style='background-image: url(";
                        html += storyImag + ")'>"
                        html += "<a href='" + storyUrl;
                        html += "' target='_blank'>"
                        html += "<div class='story-desc'>" + storyDesc;
                        html += "</div></a></li>";

                        $(".stories").append(html);
                });

        }).always(function(){
                $(".loader").detach();
        })
                .fail(function(err) {
                throw err;
        });
        });