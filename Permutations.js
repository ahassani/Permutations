Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    this.push.apply(this, rest)
    return this;
};

function permutate(n, a) {
  if (a.length === 0) {
     all.push(n);
  }

  else {
     for(var i = 0; i < a.length; i++) {         
         var n_new = n.slice(0);
         n_new.push(a[i]);
         permutate(n_new, a.slice(0).remove(i,i));
     }
  }
}

var all = [];
permutate([], [1, 2, 3, 4]);

for(var i = 0; i < all.length; i++) {
    console.log(all[i]);
}
