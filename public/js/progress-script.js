/**
 |---------------------------------------------------------
 | by Rangel Dheo 01/03/2020
 | rangeldheo@gmail.com
 |---------------------------------------------------------
 */
$(document).ready(function () {
    $.each($('.progress'), function () {

        let value = $(this).data('progress');
        /**
         |---------------------------------------------------------
         | se o valor for menor que 50%, marca o 
         | ancestral como bar-netagive para estilizar dinamicamente
         |---------------------------------------------------------
         */
        if (value < 50) {
            $(this).parents('.bar').addClass('bar-negative');
        }
        /**
         |---------------------------------------------------------
         | baseado no valor do atributo data-value, criamos a
         | animação dinamica da regra css width do elemento
         |---------------------------------------------------------
         */
        $(this).animate({
            'width': value + '%'
        }, 'slow');

    });
    $.each($('.item-bar'), function () {
        /**
         |---------------------------------------------------------
         | O range é o valor máximo encontrado
         | Essa será a barra mais alta e as outras 
         | terão tamanho relativo percentual a mais alta
         |---------------------------------------------------------
         */
        let range = $('.verticalBars').data('range');   
        let value = $(this).data('value');
        /**
         |---------------------------------------------------------
         | Regrinha de 3 pra encontrar a altura relativa das barras
         |---------------------------------------------------------
         */
        let height = (value * 100) / range;

        $(this).animate({
            'height': height + '%'
        }, 'slow');
    });
});