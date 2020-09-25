document.getElementById("get-short-url").addEventListener("click",function(){
    fetch(`/?url=${document.getElementById("short-url").value}`, {
        method: "get"
    }).then(function (response) {
        if (response.status === 200) {
            response.json().then(data => {
                console.log(data.url);
            });
        } else {
            console.log(response.statusText);
        };
    }).catch(function (response) {
        console.log(response);
    });
});