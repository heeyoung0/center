$(function() {
    let btnWish = $('.btn-wish')
    let btn = $('.btn')
    btn.on('click', function() {
        $(this).toggleClass('active');
            if($(this).hasClass('active')) {
                $(this).attr({src:'img/list-black-heart.png'})
            } else {
                $(this).attr({src:'img/list-white-heart.png'})
            }
    })
})

const db = firebase.firestore();

        db.collection('centerT').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.data());
                let productInfo = `<div class="item">
                    <div class="thumbnail">
                        <a href="centerDetail-page.html?id=${doc.id}">
                        <img src="${doc.data().이미지}">
                        </a>
                    </div>
                    <div class="item-text">
                        <p class="title">
                            <a href="centerDetail-page.html?id=${doc.id}">${doc.data().상품명}</a>
                        </p>
                        <p class="price">
                            <a href="centerDetail-page.html?id=${doc.id}">${doc.data().가격.toLocaleString()}원
                            </a>
                        </p>
                        <p class="btn-wish">
                            <img src="img/list-white-heart.png" alt="위시 버튼" class="btn">
                        </p>
                    </div>
                </div>`
                document.getElementById('item-list').insertAdjacentHTML('beforeend',productInfo)
            })
        })