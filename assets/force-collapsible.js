(function(d3) {
  var w = 1200,
      h = 900,
      rootBound = 200,
      node,
      link,
      label,
      root;

  var docEl = document.documentElement;
  var initClientWidth = docEl.clientWidth;
  var initClientHeight = docEl.clientHeight;

  var force = d3.layout.force()
        .on("tick", tick)
        .charge(function(d) {
          if( isInternalNode(d) ){
            return d.r * -800;
          } else {
            return -50000;
          }
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

  // NOTE assumes that the svg is width/height 100%
  root.x = initClientWidth / 2;
  root.y = initClientHeight  / 2;

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
      .data(nodes, function(d) { return d.id; });

    var minWidth = 40;
    function r(d) {
      if( isInternalNode(d) ){
        d.r = Math.log(d.size/900) * 20;
        d.r = d.r < minWidth ? minWidth : d.r;
      } else {
        d.r = 10;
      }
      return d.r;
    }

    node.transition()
      .attr("r", r);

    // Enter any new nodes.
    node.enter().append("svg:circle")
      .attr("cx", function(d) {
        return d.x;
      })
      .attr("cy", function(d) {
        return d.y;
      })
      .attr("r", r)
      .call(force.drag)
      .on("click", click)
      .on("touchend", click);

    node
      .attr("class", function(d){
        return "node " + nodeType(d);
      });

    // Exit any old nodes.
    node.exit().remove();

    label = vis.selectAll("text")
      .data(nodes, function(d) { return d.id; });

    label
      .enter()
      .append("svg:text")
      .text(function(d) {
        return d.name;
      })
      .call(force.drag)
      .on("click", click)
      .on("touchend", click);

    label.exit().remove();

    // check the bounding box on the text a couple times
    // to make sure it fits into the associated circle
    label.attr("font-size", function(d){
        d.fontSize = d.r / 2;
        return d.fontSize;
      })
      .attr("font-size", function(d){
        var diameterThresh = d.r * 1.8;
        var bbox = this.getBBox();

        if( bbox.width >= diameterThresh ){
          d.fontSize = (diameterThresh / d.name.length) * 2;
        }

        return d.fontSize;
      })
      .attr("font-size", fontSize)
      .attr("font-size", fontSize)
      .attr("class", nodeType);
  }

  function tick() {
    link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

    node
      .attr("cx", function(d) {
        return d.x;
      })
      .attr("cy", function(d) {
        return d.y;
      });

    label
      .attr( "x", function(d){
        if( !isInternalNode(d) ){
          return d.x + 15;
        }

        this.bboxWidth = this.bboxWidth || this.getBBox().width;
        var diameter = d.r * 2;
        var leftOffset = (diameter - this.bboxWidth) / 2;

        return d.x - d.r + leftOffset;
      })
      .attr("y", function(d) {
        if( !isInternalNode(d) ){
          return d.y + 5;
        }
        this.bboxHeight = this.bboxHeight || this.getBBox().height;
        return d.y + (this.bboxHeight/4);
      });
  }

  function color(d){
    return d._children ? "#e23120" : d.children ? "#29292b" : "#222";
  }

  function nodeType(d){
    if( !isInternalNode(d) ){
      return "child";
    } else if (d._children){
      return "internal-closed";
    } else {
      return "internal-open";
    }
  }

  function openChildren(d){
    if( d._children ){
      d.children = d._children;
      d._children = null;
    }
  }

  function toggleChildren(d){
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      openChildren(d);
    }
  }

  function setFixed(d){
    // if its an internal node in it's children are visible, fix its place
    d.fixed = !!(isInternalNode(d) && d.children) || d == root;
  }


  function focusNode(d){
    var desc = document.querySelector(".description");

    if( desc && d.desc ){
      description(desc, d);

      desc.style.display = "block";
    } else {
      desc.style.display = "none";
    }
  }


  // Toggle children on click.
  function click(d) {
    var desc = document.querySelector(".description");

    desc.innerHTML = (d3.event.defaultPrevented);
    desc.style.display = "block";

    toggleChildren(d);
    setFixed(d);
    focusNode(d);
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

  var template = document.querySelector("#template").innerHTML;

  function description(element, node){
    var interp, html, desc = node.desc;

    // structured content
    if( desc && typeof desc !== "string"){
      desc.name = node.name;
      element.innerHTML = Mustache.render(template, desc);
    } else {
      // raw html
      element.innerHTML = desc || "";
    }

    element.innerHTML =
      "<a href='#' class='close'>&times</a>" + element.innerHTML;

    bindRelated(element);
    bindClose(element);
  }

  function bindClose(element){
    var close = element.querySelector( ".close" );

    var onEvent = function(e){
      e.preventDefault();
      element.style.display = "none";
    };

    close.addEventListener("click", onEvent);
    close.addEventListener("touchend", onEvent);
  }

  function bindRelated(element) {
    var anchors = [].slice.call(element.querySelectorAll( "[data-node-name]" ));

    anchors.forEach(function(a) {
      a.addEventListener("click", function( event ) {
        var name = a.getAttribute("data-node-name");

        openNode(name);

        event.preventDefault();
      });
    });
  }

  function openNode(name){
    var path = findPath(name, [], root);

    path.forEach(function(node){
      openChildren(node);
    });

    focusNode(path[path.length - 1]);
    update();
  }

  function findPath(name, path, node){
    path = [].slice.call(path);
    path.push(node);

    if( node.name === name ){
      return path;
    }

    var childPath;

    // NOTE could do a reduce here, meh.
    (node._children || node.children || []).forEach(function(child){
      if( childPath ){
        return;
      }

      childPath = findPath(name, path, child);
    });

    return childPath;
  }

  function fontSize(d){
    if( !isInternalNode(d) ){
      return d.fontSize = 12;
    }

    var diameterThresh = d.r * 1.7;
    var bbox = this.getBBox();

    if( bbox.width >= diameterThresh ){
      d.fontSize = d.fontSize * 0.9;
    }

    return d.fontSize;
  }

  function isInternalNode(d){
    return d.children || d._children;
  }
})(window.d3);
