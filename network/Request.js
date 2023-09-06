export default class Request {
    get = async (apiPath) => {
        var dataResult = false
        await fetch(apiPath, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => dataResult = data);
        return dataResult;
    }

    getImageFile = async (fileName) => {
        var dataResult = false
        var myHeaders = new Headers();
        myHeaders.append("accept-encoding", "");
        myHeaders.append("connection", "Keep-Alive");
        myHeaders.append("cookie", "ndus=YzJBS6yteHuinp3FLkfAkacnfKDJE9lEGVBTvNCK; STOKEN=dubox; ndut_fmt=6C5145FE8EA3698B176BD75121945C9CB40F22D88ADBEC36B4FB051C3CA76D86");
        myHeaders.append("host", "data.terabox.com");
        myHeaders.append("user-agent", "dubox;3.16.6;Pixel+3;android-android;13;JSbridge1.0.10;jointbridge;1.1.39;");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        await fetch(`https://data.terabox.com/rest/2.0/pcs/thumbnail?method=generate&path=${fileName}&quality=80&size=c1080_u1600&app_id=250528&devuid=7B9F7A039523CEAC496565061391F8ED%7CVLNAXOTTZ&uk=4399567897801&md5=aae93c0cbbb72dc1a5dc24c06c48dc18&thumbnail_token=4d38500f57f339b788220104a8a4bd92&firstlaunchtime=1693323758&firstlaunchtime=1693323758&clienttype=1&channel=android_13_Pixel%203_bd-dubox_1024074a&version=3.16.6&logid=MTY5MzM2NjU5MTQ5MSxmZTgwOjoyMTM2OmRmMGI6ZTg2ZjoyZTElcm1uZXRfZGF0YTAsNTc4MjY2&imgtype=small&rand=d7701c18dfe6f5d7af88c1c76de66b75104cab22&time=1693366591&apn_id=1_-1&carrier=45209vn_45202vn&cuid=7B9F7A039523CEAC496565061391F8ED%7CVLNAXOTTZ&network_type=wifi`, requestOptions)
            .then(response => response.json())
            .then(result => dataResult = result)
        return dataResult;
    }
}
