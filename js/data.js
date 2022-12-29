window.onload = function () {
    $(".loading-wrapper").fadeOut();
    $(".banner-gif").fadeIn(2000);
  }
$(document).ready(function () {
    firebase.initializeApp({
        apiKey: "AIzaSyAnIvoOSJ0QYuOLgiotKnYBzIWJX4blnYo",
        authDomain: "project-8192467663058275563.firebaseapp.com",
        projectId: "project-8192467663058275563",
        storageBucket: "project-8192467663058275563.appspot.com",
        messagingSenderId: "288012793095",
        appId: "1:288012793095:web:fcbae32caf953e5b4d41a2"
    });
    const $titlefield = $('#title-field');
    const $contentfield1 = $('#content-field1');
    const $articlelist = $('#article-col');
    
    const $articlecontent=$('#articlecontent');
    const $articlecomment=$('#articlecomment');

    let articlesDocRef=firebase.firestore().collection("forum").doc("articles");
    let eacharticleDocRef=articlesDocRef.collection("article");
    let queryArticleCollectionRef=eacharticleDocRef.orderBy("timeStamp","desc");
    let i=0;
    $("#submit").click(function(){
        
        let senderTitle=$titlefield.val();
        let senderContent1=$contentfield1.val();
        let timeStamp=Date.now();
        const dateobj=new Date(timeStamp); 
        var reg=/[\u4E00-\u9FA5]/g;
        let time1 = dateobj.toString();
        let time =time1.replace(reg,''); /*刪掉中文 */
        time=time.replace("(","");
        time=time.replace(")","");
        eacharticleDocRef.add({
            title:senderTitle,
            content1:senderContent1,
            timeStamp:Date.now(),
            time:time,
            number:i,
        });
        //empty
        $titlefield.val('');
        $contentfield1.val('');
        i=i+1;
    })
    
    queryArticleCollectionRef.onSnapshot(function(querySnapshot){
        $articlelist.html("");
        querySnapshot.forEach(function(doc){
            
            let senderTitle=doc.data().title || "No Title";
            let articlecontent=doc.data().content1;
            let articletime=doc.data().time;
            let titleItem=
            `<li class="title-item">${senderTitle}<br><h5>&emsp;${articlecontent}</h5><p>${articletime}</p></li>`;
           let contentItem =   /*樣板 */
            `<div>${senderTitle}</div>
            <div>${articlecontent}</div>`
            $articlelist.append(titleItem);
        });        
    })
})

$(document).ready(function () {
  $(".box1").hide();
  $(".box2").hide();
  $(".box3").hide();
  $(".fortunate-btn").unbind('click').click(function(){
    var l=getRandom(3);
    lucky(l);
    console.log(l);
  })
  function getRandom(x){
    return Math.floor(Math.random()*x);
};
function lucky(m){
  if(m==0){
    $(".box2").hide();
    $(".box3").hide();
    $(".box1").show(); 
  }
  else if(m==1){
    $(".box3").hide();
    $(".box1").hide();
    $(".box2").show(); 
  }
  else{
    $(".box1").hide();
    $(".box2").hide();
    $(".box3").show(); 
  }
}


})