class choice{constructor(t,e){this.name=t;for(var c=new Array(54),n=0;n<54;n++)e[n]&&(c[n]=t);this.time=c}match(t){for(var e=0;e<54;e++)if(t.time[e]&&this.time[e])return!1;return!0}merge(t){for(var e=new choice(this.name,this.time),c=0;c<54;c++)t.time[c]&&(e.time[c]=t.time[c]);return e}}function group_choices(t,e){for(var c=new Array,n=t.length,h=new Array(e+1),r=0;r<e;r++)h[r]=r;h[e]=n;var o=0,l=0;do{for(var d=new choice(t[h[0]].name,t[h[0]].time),i=(r=1,!0);r<e;r++){if(!d.match(t[h[r]])){i=!1;break}(d=d.merge(t[h[r]])).name=d.name+"+"+t[h[r]].name}i&&c.push(d);for(r=l,o=1;r<e;r++){if(h[r]++,h[r]<h[r+1]){l=0==r?0:r-1,o=0;break}h[r]=r}}while(0==o);return c}function make_combos(t){for(var e=t[0].slice(),c=1;c<t.length;c++){for(var n=new Array,h=t[c],r=0;r<e.length;r++)for(var o=e[r],l=0;l<h.length;l++)if(o.match(h[l])){var d=o.merge(h[l]);d.name=o.name+"+"+h[l].name,n.push(d)}e=n}return e}var clusters=new Array,cluster_names=new Array,cluster_form='<form id="cluster_form"><label>Cluster Name :</label><input type="text" value=""><br><label>Total Number of Choices :</label><input type="number" onblur="new_choices(this.value);"><br><label>Number of Choices to select :</label><input type="number"></form>',choice_form='<form class="choice_form"></label>Choice Name:</label> <input type="text" name="name" value=""><br></label>Timings:</label> <table class="table border rounded"> <tr> <th>*</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th> </tr><tr> <th>8-9</th><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr><tr> <th>9-10</th><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr><tr> <th>10-11</th><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr><tr> <th>11-12</th><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr><tr> <th>12-1</th><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr><tr> <th>1-2</th><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr><tr> <th>2-3</th><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr><tr> <th>3-4</th><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr><tr> <th>4-5</th><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr></table></form>',create_button='<br><button type="submit" class="btn btn-secondary m-1" onclick="create_cluster();">Create Cluster</button>';function display_clusters(){var t=document.getElementById("clusters");htmltext='<ol class="list-group">';for(var e=0;e<clusters.length;e++){htmltext=htmltext.concat('<li class="list-group-item"><strong>',cluster_names[e],'</strong><br><ol class="list-group">');for(var c=0;c<clusters[e].length;c++)htmltext=htmltext.concat('<li class="list-group-item">',clusters[e][c].name,"</li>");htmltext=htmltext.concat("</ol>")}htmltext=htmltext.concat("</ol>"),t.innerHTML=htmltext}function new_cluster(){document.getElementById("iocluster").innerHTML="<h3>Creating Cluster "+(clusters.length+1)+"</h3>"+cluster_form,document.getElementById("iochoice").innerHTML=""}function new_choices(t){for(var e=document.getElementById("iochoice"),c="",n=0;n<t;n++)c=c.concat("<h4>Choice ",n+1," :</h4>",choice_form);e.innerHTML=c.concat(create_button)}function create_cluster(){var t=document.getElementById("cluster_form"),e=document.getElementsByClassName("choice_form"),c=t.elements[0].value,n=(t.elements[1].value,t.elements[2].value),h=new Array;cluster_names.push(c);for(var r=0;r<e.length;r++){for(var o=e[r].elements[0].value,l=new Array(54),d=0;d<54;d++)l[d]=e[r].elements[d+1].checked;h.push(new choice(o,l))}n>1&&(h=group_choices(h,n)),clusters.push(h),display_clusters(),document.getElementById("iocluster").innerHTML="",document.getElementById("iochoice").innerHTML=""}function make_pref(){var t=make_combos(clusters),e=document.getElementById("iopref");htmltext="<h4>Your Preference List</h4><ol>";for(var c=0;c<t.length;c++){htmltext=htmltext.concat("<li><strong>"+t[c].name+'</strong><br><table class="table table-dark border rounded"> <tr> <th>*</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th></tr>');for(var n=0;n<9;n++){htmltext=htmltext.concat("<tr><th>",(n+7)%12+1,"-",(n+8)%12+1,"</th>");for(var h=0;h<6;h++)htmltext=htmltext.concat("<td>"),t[c].time[6*n+h]?htmltext=htmltext.concat(t[c].time[6*n+h]):htmltext=htmltext.concat(""),htmltext=htmltext.concat("</td>");htmltext=htmltext.concat("</tr>")}htmltext=htmltext.concat("</table></li>")}htmltext=htmltext.concat("</ol>"),e.innerHTML=htmltext}