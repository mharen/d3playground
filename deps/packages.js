var packages = {
 
  // Lazily construct the package hierarchy from class names.
  root: function(classes) {
	var map = {};
 
	function safeAttributeString(str) {
		return String(str).replace(/[^a-zA-Z]/g, '-');
	}

	function find(name, data) {
	  var node = map[name], i;
	  if (!node) {
		node = map[name] = data || {name: name, children: [] };
		if (name.length) {
		  node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
		  node.parent.children.push(node);
		  node.key = 'key-' + safeAttributeString(name);
		}
	  }
	  console.log(node);
	  return node;
	}
 
	classes.forEach(function(d) {
	  find(d.name, d);
	});
 
	return map[""];
  },
 
  // Return a list of imports for the given array of nodes.
  imports: function(nodes) {
	var map = {},
		imports = [];
 
	// Compute a map from name to node.
	nodes.forEach(function(d) {
	  map[d.name] = d;
	});
 
	// For each import, construct a link from the source to target node.
	nodes.forEach(function(d) {
	  if (d.imports) d.imports.forEach(function(i) {
		var target = map[i];
		if(target){
			imports.push({source: map[d.name], target: target});
		}
		else{
			console.log("Could not find node '"+ i + "'. Make sure it's defined on the left hand side");
		}
	  });
	});
 
	return imports;
  }
};