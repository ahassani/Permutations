Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    this.push.apply(this, rest)
    return this;
};

//var clone = myArray.slice(0);

var all = [];

function t(n, a) {
  if (a.length === 0) {
     all.push(n);
  }

  else {
     for(var i = 0; i < a.length; i++) {         
         var n_new = n.slice(0);
         n_new.push(a[i]);
         t(n_new, a.slice(0).remove(i,i));
     }
  }
}

t([], [1, 2, 3, 4]);

for(var i = 0; i < all.length; i++) {
    console.log(all[i]);
}
