function onChange() {
    var e = document.getElementById("format");
    var value = e.value;
    if (value == "book1"){
        book1();
    } else if(value == "book2"){
        book2();
    } else if(value == "book3"){
        book3();
    } else if(value == "book4"){
        book4();
    } else if(value == "book5"){
        book5();
    } 
}

function book1(){
    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.onreadystatechange = function() {
    //     if (xmlhttp.readyState == XMLHttpRequest.DONE) {
    //         if (xmlhttp.status == 200) {
    //             var table_container = document.getElementById('table-container');
    //             csv_string_to_table(xmlhttp.responseText, table_container);
    //         }
    //     }
    // };
    // xmlhttp.open("GET", "csv/book1.csv", true);
    // xmlhttp.send();
    document.getElementById('table-container').innerHTML = "";
    fetch('csv/book1.csv')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        var table_container = document.getElementById('table-container');
        csv_string_to_table(data, table_container);
    });

    function csv_string_to_table(csv_string, element_to_insert_table) {
        var rows = csv_string.trim().split(/\r?\n|\r/);
        var table = '';
        var table_rows = '';
        var table_header = '';

        rows.forEach(function(row, row_index) {
            var table_columns = '';
            var columns = row.split(','); 
            columns.forEach(function(column, column_index) {
                table_columns += row_index == 0 ? '<th>' + column + '</th>' : '<td>' + column + '</td>';
            });
            if (row_index == 0) {
                table_header += '<tr>' + table_columns + '</tr>';
            } else {
                table_rows += '<tr>' + table_columns + '</tr>';
            }
        });

        table += '<table>';
            table += '<thead>';
                table += table_header;
            table += '</thead>';
            table += '<tbody>';
                table += table_rows;
            table += '</tbody>';
        table += '</table>';

        element_to_insert_table.innerHTML += table;
    }
}

function book2(){
    document.getElementById('table-container').innerHTML = "";
    fetch('csv/book2.csv')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        var table_container = document.getElementById('table-container');
        csv_string_to_table(data, table_container);
    });

    function csv_string_to_table(csv_string, element_to_insert_table) {
        var rows = csv_string.trim().split(/\r?\n|\r/);
        var table = '';
        var table_rows = '';
        var table_header = '';

        rows.forEach(function(row, row_index) {
            var table_columns = '';
            var columns = row.split(','); 
            columns.forEach(function(column, column_index) {
                table_columns += row_index == 0 ? '<th>' + column + '</th>' : '<td>' + column + '</td>';
            });
            if (row_index == 0) {
                table_header += '<tr>' + table_columns + '</tr>';
            } else {
                table_rows += '<tr>' + table_columns + '</tr>';
            }
        });

        table += '<table>';
            table += '<thead>';
                table += table_header;
            table += '</thead>';
            table += '<tbody>';
                table += table_rows;
            table += '</tbody>';
        table += '</table>';

        element_to_insert_table.innerHTML += table;
    }
}

function book3(){
    document.getElementById('table-container').innerHTML = "";
    fetch('csv/book3.csv')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        var table_container = document.getElementById('table-container');
        csv_string_to_table(data, table_container);
    });

    function csv_string_to_table(csv_string, element_to_insert_table) {
        var rows = csv_string.trim().split(/\r?\n|\r/);
        var table = '';
        var table_rows = '';
        var table_header = '';

        rows.forEach(function(row, row_index) {
            var table_columns = '';
            var columns = row.split(','); 
            columns.forEach(function(column, column_index) {
                table_columns += row_index == 0 ? '<th>' + column + '</th>' : '<td>' + column + '</td>';
            });
            if (row_index == 0) {
                table_header += '<tr>' + table_columns + '</tr>';
            } else {
                table_rows += '<tr>' + table_columns + '</tr>';
            }
        });

        table += '<table>';
            table += '<thead>';
                table += table_header;
            table += '</thead>';
            table += '<tbody>';
                table += table_rows;
            table += '</tbody>';
        table += '</table>';

        element_to_insert_table.innerHTML += table;
    }
}

function book4(){
    document.getElementById('table-container').innerHTML = "";
    fetch('csv/book4.csv')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        var table_container = document.getElementById('table-container');
        csv_string_to_table(data, table_container);
    });

    function csv_string_to_table(csv_string, element_to_insert_table) {
        var rows = csv_string.trim().split(/\r?\n|\r/);
        var table = '';
        var table_rows = '';
        var table_header = '';

        rows.forEach(function(row, row_index) {
            var table_columns = '';
            var columns = row.split(','); 
            columns.forEach(function(column, column_index) {
                table_columns += row_index == 0 ? '<th>' + column + '</th>' : '<td>' + column + '</td>';
            });
            if (row_index == 0) {
                table_header += '<tr>' + table_columns + '</tr>';
            } else {
                table_rows += '<tr>' + table_columns + '</tr>';
            }
        });

        table += '<table>';
            table += '<thead>';
                table += table_header;
            table += '</thead>';
            table += '<tbody>';
                table += table_rows;
            table += '</tbody>';
        table += '</table>';

        element_to_insert_table.innerHTML += table;
    }
}

function book5(){
    document.getElementById('table-container').innerHTML = "";
    fetch('csv/book5.csv')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        var table_container = document.getElementById('table-container');
        csv_string_to_table(data, table_container);
    });

    function csv_string_to_table(csv_string, element_to_insert_table) {
        var rows = csv_string.trim().split(/\r?\n|\r/);
        var table = '';
        var table_rows = '';
        var table_header = '';

        rows.forEach(function(row, row_index) {
            var table_columns = '';
            var columns = row.split(','); 
            columns.forEach(function(column, column_index) {
                table_columns += row_index == 0 ? '<th>' + column + '</th>' : '<td>' + column + '</td>';
            });
            if (row_index == 0) {
                table_header += '<tr>' + table_columns + '</tr>';
            } else {
                table_rows += '<tr>' + table_columns + '</tr>';
            }
        });

        table += '<table>';
            table += '<thead>';
                table += table_header;
            table += '</thead>';
            table += '<tbody>';
                table += table_rows;
            table += '</tbody>';
        table += '</table>';

        element_to_insert_table.innerHTML += table;
    }
}