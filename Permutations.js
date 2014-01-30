Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

//var clone = myArray.slice(0);

var all = [];

function t(n, a) {
  n.slice(0);
  if (a.length==0) {
     all.push(n);
  }

  else {
     for(var i = 0; i < a.length; i++) {
         var c = a.slice(0);
         c.remove(i,i);
         var n_new = n.slice(0);
         n_new.push(a[i]);
         t(n_new, c);
     }
  }
}

t([], [1,2,3,4]);

all;

var obj = {};
var total = 0;

for(var i=0; i<all.length; i++) {
    var arr = all[i];
    var cnt = 0;
    console.log(arr);
}