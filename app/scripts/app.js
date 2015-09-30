var product = {};
product.partial = "lib/product.html"
product.init = function(){
    // document.getElementById('spinner').style.visibility = 'visible';
    // document.getElementById('content').style.visibility = 'hidden';
    miniSPA.ajaxRequest('https://api.github.com/emojis','GET','',function(status, partial){
        // product.emojis = JSON.parse(partial);
         miniSPA.render('product');         //render related partial page with data returned from the server
        // document.getElementById('content').style.visibility = 'visible';
        // document.getElementById('spinner').style.visibility = 'hidden';
    });
}
var about = {};
about.partial = "lib/about.html"
about.init = function(){
    miniSPA.ajaxRequest('https://api.github.com/emojis','GET','',function(status, partial){
         miniSPA.render('about');         //render related partial page with data returned from the server
    });
}
// var postMD = {};
// postMD.partial = "postMD.html";
// postMD.init = function(){
//     miniSPA.render('postMD');               //render related partial page
// }
// postMD.submit = function(){
//     document.getElementById('spinner').style.visibility = 'visible';
//     var mdText = document.getElementById('mdText');
//     var md = document.getElementById('md');
//     var data = '{"text":"'+mdText.value.replace(/\n/g, '<br>')+'","mode": "gfm","context": "github/gollum"}';
//     miniSPA.ajaxRequest('https://api.github.com/markdown', 'POST', data,function(status, page){
//         document.getElementById('spinner').style.visibility = 'hidden';
//         md.innerHTML = page;                //render markdown partial returned from the server
//     });
//     mdText.value = '';
// }
miniSPA.changeUrl();                        //initialize