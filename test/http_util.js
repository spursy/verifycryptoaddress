let httpUtil = {
    httpReq: function (config) {
        let url = config.url;
        $.ajax({
            // headers: config.headers || {
            //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            // },
            url: url,
            type: config.method || 'get',
            cache: config.cache || false,
            async: config.async || true,
            crossDomain: true,
            dataType: 'json',
            data: config.data || null,
            success: config.onSuccess,
            error: config.onError || function () {
                alert('系统错误，请稍后再试！')
            },
            complete: function() {
                console.log('complete');
            }
        });
    }
}