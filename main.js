$(function(){
});

    var goodSiteInfo = [
        {
            url: 'http://swabtheworld.com/en/',
            imgSrc: 'images/main.jpg',
            title: 'SWAB THE WORLD'
        },
        {
            url: 'http://waarhol.com',
            imgSrc: 'images/site1.gif',
            title: 'Andy Warhol'
        },
        {
            url: 'http://newestamerican.com/',
            imgSrc: 'images/site.gif',
            title: 'Northwest'
        },
    ];


    var num = 0; //데이터 인덱스번호


function changeSiteInfo(num) {
/* 이미지 변경 */
$('#sidebar > figure img').attr('src', goodSiteInfo[num].imgSrc);
/* 홈페이지 주소 변경 */
$('#sidebar > figure .url').text(goodSiteInfo[num].url);
/* 제목 변경 */
$('#sidebar > figure .home_title').text(goodSiteInfo[num].title);
}

// 다음 사이트 정보
function nextSiteInfo() {
    num = num + 1;

    if(num > 2) {
        num = 0;
    }    
    
    changeSiteInfo(num);
}
// 이전 사이트 정보
function prevSiteInfo() {
    num = num -1;
    if(num < 0) {
        num =2;
    }
    
    changeSiteInfo(num);    
}
