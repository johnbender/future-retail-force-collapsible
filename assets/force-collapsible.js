(function(d3) {
  var w = 1200,
      h = 900,
      node,
      link,
      label,
      root;

  var force = d3.layout.force()
        .on("tick", tick)
        .charge(function(d) {
          return d.r * -1200;
        })
        .gravity(0.1)
        .friction(0.05)
        .linkDistance(function(d) {
          return Math.sqrt(d.source.size / 2);
        })
        .size([w, h]);

  var vis = d3.select("body").append("svg:svg")
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .attr("width", w + "px")
        .attr("height", h + "px");

  var json = bubbleData;

  root = json;
  root.fixed = true;
  root.x = w / 2;
  root.y = h / 2 - 80;

  var nodes = vis.selectAll("g")
        .data(flatten(root));

  update();

  flatten(root).forEach(function( node ){
    toggleChildren(node);
  });

  update();

  function update() {
    var nodes = flatten(root),
        links = d3.layout.tree().links(nodes);

    // Restart the force layout.
    force
      .nodes(nodes)
      .links(links)
      .start();

    // Update the links…
    link = vis.selectAll("line.link")
      .data(links, function(d) { return d.target.id; });

    // Enter any new links.
    link.enter().insert("svg:line", ".node")
      .attr("class", "link")
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

    // Exit any old links.
    link.exit().remove();

    // Update the nodes…
    node = vis.selectAll("circle.node")
      .data(nodes, function(d) { return d.id; })
      .style("fill", color);

    var minWidth = 40;
    function r(d) {
      d.r = Math.log(d.size/900) * 20;
      d.r = d.r < minWidth ? minWidth : d.r;
      return d.r;
    }

    node.transition()
      .attr("r", r);

    // Enter any new nodes.
    node.enter().append("svg:circle")
      .attr("class", "node")
      .attr("cx", function(d) { return d.x + Math.random(); })
      .attr("cy", function(d) { return d.y + Math.random(); })
      .attr("r", r)
      .style("fill", color)
      .on("click", click)
      .call(force.drag);

    // Exit any old nodes.
    node.exit().remove();


    label = vis.selectAll("text")
      .data(nodes, function(d) { return d.id; });

    label
      .enter()
      .append("svg:text")
      // .attr("class", "label")
      .text(function(d) {
        return d.name;
      })
      .on("click", click);

    label.exit().remove();

    label.attr("font-size", function(d){
        d.fontSize = d.r / 2;
        return d.fontSize;
      })
      .attr("font-size", function(d){
        var bbox = this.getBBox();

        if( bbox.width >= (d.r * 2) ){
          d.fontSize = d.fontSize * 0.6;
        }

        return d.fontSize;
      });

  }

  function tick() {
    link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });

    label
      .attr( "x", function(d){
        var bbox = this.getBBox();
        var diameter = d.r * 2;
        var leftOffset = (diameter - bbox.width) / 2;

        return d.x - d.r + leftOffset;
      })
      .attr("y", function(d) {
        var bbox = this.getBBox();
        return d.y + (bbox.height/4);
      });
  }

  // Color leaf nodes orange, and packages white or blue.
  function color(d) {
    // TODO tag the element with a class so we can style it
    return d._children ? "#3182bd" : d.children ? "#c6dbef" : "#fd8d3c";
  }

  function toggleChildren(d){
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
  }

  // Toggle children on click.
  function click(d) {
    var desc;

    toggleChildren(d);

    var desc = document.querySelector("p.description");

    if( desc && d.desc ){
      desc.innerHTML = d.desc || "";
      desc.style.display = "block";
    } else {
      desc.style.display = "none";
    }

    update();
  }

  // Returns a list of all nodes under the root.
  function flatten(root) {
    var nodes = [], i = 0;

    function recurse(node) {
      if (node.children) node.size = node.children.reduce(function(p, v) {
        return p + recurse(v);
      }, 0);

      if (!node.id) node.id = ++i;
      nodes.push(node);
      return node.size;
    }

    root.size = recurse(root);
    return nodes;
  }

})(window.d3);
