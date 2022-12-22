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
    const margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = 1200,
    height = 500;

    // append the svg object to the body of the page
    const svg = d3.select("#table-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform",
        `translate(${margin.left}, ${margin.top})`);
                
    d3.json("./book1.json").then( function( data) {
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
            .attr("r", 18)
            .style("fill", "#5c6664")

        const text = svg.append("g")
            .attr("class", "labels")
            .selectAll("text")
            .data(data.nodes)
            .enter().append("text")
            .style('fill', 'white')
            .style("font", "10px")
            .text(function(d) { return d.name });
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
                .attr("cx", function (d) { return d.x; })
                .attr("cy", function(d) { return d.y; });

            text    
                .attr("dx", function (d) { return d.x-50; })
                .attr("dy", function(d) { return d.y; });
        }
    });
}

function book2(){
    const margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = 1200,
    height = 600;

    // append the svg object to the body of the page
    const svg = d3.select("#table-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform",
        `translate(${margin.left}, ${margin.top})`);
                
    d3.json("./book2.json").then( function( data) {
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
            .attr("r", 18)
            .style("fill", "#5c6664")

        const text = svg.append("g")
            .attr("class", "labels")
            .selectAll("text")
            .data(data.nodes)
            .enter().append("text")
            .style('fill', 'white')
            .style("font", "10px")
            .text(function(d) { return d.name });
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
                .attr("cx", function (d) { return d.x; })
                .attr("cy", function(d) { return d.y; });

            text    
                .attr("dx", function (d) { return d.x-50; })
                .attr("dy", function(d) { return d.y; });
        }
    });
}

function book3(){
    const margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = 1200,
    height = 300;

    // append the svg object to the body of the page
    const svg = d3.select("#table-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform",
        `translate(${margin.left}, ${margin.top})`);
                
    d3.json("./book3.json").then( function( data) {
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
            .attr("r", 18)
            .style("fill", "#5c6664")

        const text = svg.append("g")
            .attr("class", "labels")
            .selectAll("text")
            .data(data.nodes)
            .enter().append("text")
            .style('fill', 'white')
            .style("font", "10px")
            .text(function(d) { return d.name });
            
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
                .attr("cx", function (d) { return d.x; })
                .attr("cy", function(d) { return d.y; });

            text    
                .attr("dx", function (d) { return d.x-50; })
                .attr("dy", function(d) { return d.y; });
        }
    });
}

function book4(){
    const margin = {top: 50, right: 0, bottom: 0, left: 0},
    width = 1200,
    height = 500;

    // append the svg object to the body of the page
    const svg = d3.select("#table-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform",
        `translate(${margin.left}, ${margin.top})`);
                
    d3.json("./book4.json").then( function( data) {
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
            .attr("r", 18)
            .style("fill", "#5c6664")

        const text = svg.append("g")
            .attr("class", "labels")
            .selectAll("text")
            .data(data.nodes)
            .enter().append("text")
            .style('fill', 'white')
            .style("font", "10px")
            .text(function(d) { return d.name });
            
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
                .attr("cx", function (d) { return d.x; })
                .attr("cy", function(d) { return d.y; });

            text    
                .attr("dx", function (d) { return d.x-50; })
                .attr("dy", function(d) { return d.y; });
        }
    });
}

function book5(){
    const margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = 1200,
    height = 500;

    // append the svg object to the body of the page
    const svg = d3.select("#table-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform",
        `translate(${margin.left}, ${margin.top})`);
                
    d3.json("./book5.json").then( function( data) {
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
            .attr("r", 18)
            .style("fill", "#5c6664")

        const text = svg.append("g")
            .attr("class", "labels")
            .selectAll("text")
            .data(data.nodes)
            .enter().append("text")
            .style('fill', 'white')
            .style("font", "10px")
            .text(function(d) { return d.name });
            
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
                .attr("cx", function (d) { return d.x; })
                .attr("cy", function(d) { return d.y; });

            text    
                .attr("dx", function (d) { return d.x-50; })
                .attr("dy", function(d) { return d.y; });
        }
    });
}