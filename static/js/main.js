
        $(document).ready(function () {
            listing();
        });

        function listing() {
            $.ajax({
                type: 'GET',
                url: '/rank',
                data: {},
                success: function (response) {
                    let rows = response["movieRank"]
                    for(let i = 0; i < rows.length; i++){
                        let title = rows[i]["title"]
                        let img = rows[i]["img"]
                        let release = rows[i]["release"]
                        let r_rate = rows[i]["r_rate"]

                        let temp_html = `<div class="col">
                                            <div class="card h-100">
                                                <img src="${img}"
                                                     class="card-img-top" >
                                                <div class="card-body">
                                                    <h5 class="card-title">"${title}"</h5>
                                                    <p class="card-text">"${release}"</p>
                                                    <p class="mycomment">"${r_rate}"</p>
                                                </div>
                                            </div>
                                        </div>`

                        $('#cards-box').append(temp_html)
                    }
                }
            })
        }

        function posting() {
            $.ajax({
                type: 'POST',
                url: '/',
                data: { },
                success: function (response) {
                    alert(response['msg'])
                    window.location.reload()
                }
            });
        }
