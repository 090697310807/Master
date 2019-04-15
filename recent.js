//<![CDATA[
//Script Recent by Label
function rcentbytag(e){document.write('<div class="recent-by-tag"><ul>');for(var t=0;t<numposts;t++){var n=e.feed.entry[t];var r=n.title.$t;var i;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++){if(n.link[o].rel=="replies"&&n.link[o].type=="text/html"){var u=n.link[o].title;var f=n.link[o].href}
if(n.link[o].rel=="alternate"){i=n.link[o].href;break}}
var l;try{l=n.media$thumbnail.url}catch(h){s=n.content.$t;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if(a!=-1&&b!=-1&&c!=-1&&d!=""){l=d}else l="//2.bp.blogspot.com/-uitX7ROPtTU/Tyv-G4NA_uI/AAAAAAAAFBY/NcWLPVnYEnU/s1600/no+image.jpg"}
var p=n.published.$t;var v=p.substring(0,4);var m=p.substring(5,7);var g=p.substring(8,10);var y=new Array;document.write('<li>');document.write('<a href="'+i+'" target ="_blank" title="'+r+'" rel="nofollow"><div class="item-thumbnail-only"><div class="item-thumbnail"><img class="label_thumb" alt="'+r+'" src="'+l+'"/></div><div class="item-title">'+r+'</div></div></a>');var x="";var T=0;if(t!=numposts-1)document.write("")}
document.write("</ul></div>")}

//Script Recent Download
function rcentbydownload(e){document.write('<ul class="recent-by-download">');for(var t=0;t<numposts;t++){var n=e.feed.entry[t];var r=n.title.$t;var i;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++){if(n.link[o].rel=="replies"&&n.link[o].type=="text/html"){var u=n.link[o].title;var f=n.link[o].href}
if(n.link[o].rel=="alternate"){i=n.link[o].href;break}}
var l;try{l=n.media$thumbnail.url}catch(h){s=n.content.$t;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if(a!=-1&&b!=-1&&c!=-1&&d!=""){l=d}else l="https://2.bp.blogspot.com/-giova1ZCh-A/Uzq6L8QTJNI/AAAAAAAAAJc/USXictTq_xs/s70-c/KM+Icon.png"}
var p=n.published.$t;var v=p.substring(0,4);var m=p.substring(5,7);var g=p.substring(8,10);var y=new Array;document.write('<li>');document.write('<strong><a href="'+i+'" target ="_blank" title="'+r+'" rel="nofollow"><img class="label_thumb_40" alt="'+r+'" src="'+l+'"/><div class="download-title">'+r+'</div></a></strong>');document.write('');var x="";var T=0;if(t!=numposts-1)document.write("")}
document.write("</ul>")}

//Script Image Resize
$(document).ready(function(){$('.label_thumb').attr('src',function(i,src){return src.replace('w300-h300-p-k-no-nu','w300-h300-p-k-no-nu')})})
$(document).ready(function(){$('.label_thumb_40').attr('src',function(i,src){return src.replace('s40-c','s40-c')})})
//]]>
