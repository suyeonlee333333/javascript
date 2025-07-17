
// $('.tab-button').eq(0).on('click', function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// });

// $('.tab-button').eq(1).on('click', function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });

// $('.tab-button').eq(2).on('click', function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });

// for (let i = 0; i < $('.tab-button').length; i++) {
//     $('.tab-button').eq(i).on('click', function() {
//         $('.tab-button').removeClass('orange');
//         $('.tab-button').eq(i).addClass('orange');
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show');
// });
// };

$('.list').click(function(e) {
    if (e.target == document.querySelectorAll('.tab-button')[0]) {
        탭열기(0);
    }
    if (e.target == document.querySelectorAll('.tab-button')[1]) {
        탭열기(1);
    }
    if (e.target == document.querySelectorAll('.tab-button')[2]) {
        탭열기(2);
    }
});

$('.list').click(function(e) {
    탭열기(e.target.dataset.id)
})

function 탭열기 (i) {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
};