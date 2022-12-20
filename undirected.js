function onChange() {
    var e = document.getElementById("format");
    var value = e.value;
    document.getElementById('table-container').innerHTML = "";
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

        const margin = {top: 10, right: 30, bottom: 30, left: 40},
        width = 400 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const svg = d3.select("#table-container")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
                `translate(${margin.left}, ${margin.top})`);

        d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_network.json").then( function( data) {

        // Initialize the links
        const link = svg
            .selectAll("line")
            .data(data.links)
            .join("line")
            .style("stroke", "#aaa")

        // Initialize the nodes
        const node = svg
            .selectAll("circle")
            .data(data.nodes)
            .join("circle")
            .attr("r", 20)
            .style("fill", "#69b3a2")

        // Let's list the force we wanna apply on the network
        const simulation = d3.forceSimulation(data.nodes)                 // Force algorithm is applied to data.nodes
            .force("link", d3.forceLink()                               // This force provides links between nodes
                    .id(function(d) { return d.id; })                     // This provide  the id of a node
                    .links(data.links)                                    // and this the list of links
            )
            .force("charge", d3.forceManyBody().strength(-400))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
            .force("center", d3.forceCenter(width / 2, height / 2))     // This force attracts nodes to the center of the svg area
            .on("end", ticked);

        // This function is run at each iteration of the force algorithm, updating the nodes position.
        function ticked() {
            link
                .attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });

            node
                .attr("cx", function (d) { return d.x+6; })
                .attr("cy", function(d) { return d.y-6; });
        }

        });
    }
}

function book2(){
    var svg = d3.select("svg"),
        margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin;

    svg.append("text")
       .attr("transform", "translate(100,0)")
       .attr("x", 50)
       .attr("y", 50)
       .attr("font-size", "24px")
       .text("Stock Price")

    var xScale = d3.scaleBand().range([0, width]).padding(0.4),
        yScale = d3.scaleLinear().range([height, 0]);

    var g = svg.append("g")
            .attr("transform", "translate(" + 100 + "," + 100 + ")");

    d3.csv("csv/book2.csv").then( function(data) {
        xScale.domain(data.slice(0,50).map(function(d) { return d.Source; }));
        yScale.domain([0, d3.max(data, function(d) { return d.weight; })]);

        g.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xScale))
         .append("text")
         .attr("y", height - 250)
         .attr("x", width - 100)
         .attr("text-anchor", "end")
         .attr("stroke", "black")
         .text("Year");

        g.append("g")
        .call(d3.axisLeft(yScale).tickFormat(function(d) { return d; }).ticks(10))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 10)
        .attr('dy', '-5em')
        .attr('text-anchor', 'end')
        .attr('stroke', 'black')
        .text('Stock Price in USD')

        g.selectAll(".bar")
         .data(data)
         .enter().append("rect")
         .attr("class", "bar")
         .attr("x", function(d) { return xScale(d.Source); })
         .attr("y", function(d) { return yScale(d.weight); })
         .attr("width", xScale.bandwidth())
         .attr("height", function(d) { return height - yScale(d.weight); });
	})
}

function book3(){
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