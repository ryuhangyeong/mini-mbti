$(function () {
	$('body')
		.on('click', '.survey__item', function () {
			$('.survey__item[data-survey-num= ' + $(this).data('survey-num') + ']').removeClass('survey__item--active');
			$(this).addClass('survey__item--active');

			var index = +$(this).index(),
				num = $(this).siblings()[0].innerText,
				selectTable = '#result_table_' + (num % 2 == 1 ? 'first' : 'second') + ' td',
				E = 0,
				I = 0,
				S = 0,
				N = 0,
				T = 0,
				F = 0,
				J = 0,
				P = 0;

			$(selectTable)
				.filter(function () { return $(this).text() === num; })
				.parent()
				.find('td:not(.disabled)')
				.removeClass('result__item--active')

			$(selectTable)
				.filter(function () { return $(this).text() === num; })
				.parent()
				.find('td:contains(' + (index === 1 ? 'A' : 'B') + ')')
				.addClass('result__item--active')
				
			$.each($('#result_table_first tr'), function (i, e) {
				if($(e).find('td').eq(1).hasClass('result__item--active')) E++;
				if($(e).find('td').eq(2).hasClass('result__item--active')) I++;
				if($(e).find('td').eq(3).hasClass('result__item--active')) S++;
				if($(e).find('td').eq(4).hasClass('result__item--active')) N++;
			});

			$.each($('#result_table_second tr'), function (i, e) {
				if($(e).find('td').eq(1).hasClass('result__item--active')) T++;
				if($(e).find('td').eq(2).hasClass('result__item--active')) F++;
				if($(e).find('td').eq(3).hasClass('result__item--active')) J++;
				if($(e).find('td').eq(4).hasClass('result__item--active')) P++;
			});

			$('#count_E').text(E);
			$('#count_I').text(I);
			$('#count_S').text(S);
			$('#count_N').text(N);
			$('#count_T').text(T);
			$('#count_F').text(F);
			$('#count_J').text(J);
			$('#count_P').text(P);
		})
});