document.addEventListener("turbolinks:load", function () {
    const get_link_btn = document.getElementById("get-short-url");
    const link_field = document.getElementById("short-url");
    get_link_btn.addEventListener("click", function () {
        fetch(`/?url=${link_field.value}`, {
            method: "get"
        }).then(function (response) {
            if (response.status === 200) {
                response.json().then(data => {
                    link_field.value = data.url;
                });
            } else {
                console.log(response.statusText);
            };
        }).catch(function (response) {
            console.log(response);
        });
    });
});