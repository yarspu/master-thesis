
$(document).ready(() => {

    randomInteger = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    $(document).on('click', '.create', function() {

        let rowsCount = Number($('.consumer').val())
        let columnsCount = Number($('.provider').val())
        
        // Задача закрытая
        // Наличие груза = Общая потребность
        
        // needsAndGoods = () => {
        //     const all = randomInteger(10, 99) * 10
        //     let temp = all;

        //     let goodsArr = new Array(columnsCount)
        //     let needsArr = new Array(rowsCount)

        //     for (let i = 0; i < columnsCount; i++) {
        //         if (i == columnsCount - 1) {
        //             goodsArr[i] = temp
        //             temp = all
        //         }              
        //         let j = randomInteger(1, temp / 10) * 10
        //         goodsArr[i] = j
        //         temp -= j
        //         console.log(temp)
        //     }
            
        //     for (let j = 0; j < rowsCount; j++) {   
        //         if (j == rowsCount - 1) {
        //             needsArr[j] = temp
        //             temp = all
        //         }              
        //         let i = randomInteger(1, temp / 10) * 10
        //         needsArr[j] = i
        //         temp -= i
        //     }

        //     return [goodsArr, needsArr, all]
        // }

        // console.log(needsAndGoods())


        $(".tab").remove()
        
        let table = $('<table class="tab"/>')
        
        for (let i = 0; i < rowsCount + 3; i++) {            
            let row = $('<tr/>')
            
        
            for (let j = 0; j < columnsCount + 3; j++) {
                let cell = $('<td/>')
                let input = $('<input>')
                    .attr({type: 'text'})
         
                if( i < 2 && j < 2 || i == rowsCount + 2 && j == columnsCount + 2) {
                    cell.addClass('bg-secondary')
                    cell.text('')
                }  
                else if (i == 0 && j == 2 ) {
                    cell.attr({colspan: '' + columnsCount})
                    cell.text('Пункт отправления / поставщик')
                }
                else if (i == 0 && j == columnsCount + 2 ) {
                    cell.attr({rowspan: 2})
                    cell.text('Потребность')
                }
                else if (i == 1 && j > 1 && j < columnsCount + 2 ) {
                    cell.text(j - 1)
                }
                else if (i == 0 && j > 2 && j < columnsCount + 2 ) {
                    cell.addClass('del')                   
                }
                else if (i == 2 && j == 0 ) {
                    cell.attr({rowspan: '' + rowsCount})
                    cell.text('Пункт назначения / потребители')
                }
                else if (i == rowsCount + 2 && j == 0 ) {
                    cell.attr({colspan: 2})
                    cell.text('Запасы')
                }
                else if (i == 1 && j == columnsCount + 2 ) {
                    cell.addClass('del')  
                }
                else if (j == 0 && i > 2 && i < rowsCount + 2) {
                    cell.addClass('del')  
                }
                else if (j == 1 && i == rowsCount + 2) {
                    cell.addClass('del')  
                }
                else if (j == 1 && i > 1 && i < rowsCount + 2) {
                    cell.text(i - 1)
                }
                else if (i < rowsCount + 2 && j < columnsCount + 2 ) {
                    input.attr({
                        placeholder: randomInteger(1, 9),
                        class: 'c'+ (i - 1) + '' + (j - 1)
                    })
                    cell.append(input)
                }  



                else if (i == rowsCount + 2 && j > 1 && j < columnsCount + 2) {
                    input.attr({
                        placeholder: randomInteger(1, 9) * 10,
                        class: 'goods_' + (j - 1)
                    })
                    cell.append(input)
                }  
                else if (j == columnsCount + 2 && i > 1 && i < rowsCount + 2) {
                    input.attr({
                        placeholder: randomInteger(1, 9) * 10,
                        class: 'needs_' + (i - 1)
                    })
                    cell.append(input)
                }   

                row.append(cell)
            }
        
            table.append(row)
        }
        
        table.appendTo('.container')
        $('.del').remove()
    })
});