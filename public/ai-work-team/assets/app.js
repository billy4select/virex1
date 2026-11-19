(function(){
  // 下拉選單
  var drop=document.querySelector('.nav-drop');
  if(drop){
    var toggle=drop.querySelector('.nav-toggle');
    var menu=drop.querySelector('.nav-menu');
    if(toggle&&menu){
      toggle.addEventListener('click',function(e){
        e.preventDefault();e.stopPropagation();
        var open=drop.classList.toggle('open');
        toggle.setAttribute('aria-expanded',open?'true':'false');
      });
      document.addEventListener('click',function(e){
        if(!drop.contains(e.target)){drop.classList.remove('open');toggle.setAttribute('aria-expanded','false');}
      });
      document.addEventListener('keydown',function(e){if(e.key==='Escape'){drop.classList.remove('open');toggle.setAttribute('aria-expanded','false');}});
    }
  }

  // 複製 Prompt
  window.copyPrompt=function(id,btn){
    var pre=document.getElementById('prompt-text-'+id);
    if(!pre)return;
    var text=pre.textContent||'';
    var original='複製 Prompt';
    function done(){btn.textContent='已複製';clearTimeout(btn._t);btn._t=setTimeout(function(){btn.textContent=original;},1800);}
    function fallback(){
      var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.top='-9999px';
      document.body.appendChild(ta);ta.select();var ok=false;try{ok=document.execCommand('copy');}catch(e){}
      ta.remove();
      if(ok)done();else{btn.textContent='請手動選取';setTimeout(function(){btn.textContent=original;},2200);}
    }
    if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(text).then(done).catch(fallback);}
    else{fallback();}
  };

  // 檢查表
  function updateProgress(group){
    var boxes=document.querySelectorAll('[data-group="'+group+'"] input[type=checkbox]');
    if(!boxes.length)return;
    var done=0;boxes.forEach(function(b){if(b.checked)done++;});
    var label=document.querySelector('[data-progress="'+group+'"]');
    if(label)label.textContent='已完成 '+done+' / '+boxes.length;
  }
  document.querySelectorAll('[data-check]').forEach(function(box){
    var key='awt:'+box.getAttribute('data-check');
    try{if(localStorage.getItem(key)==='1')box.checked=true;}catch(e){}
    box.addEventListener('change',function(){
      try{if(box.checked)localStorage.setItem(key,'1');else localStorage.removeItem(key);}catch(e){}
      updateProgress(box.getAttribute('data-group'));
    });
    updateProgress(box.getAttribute('data-group'));
  });
  document.querySelectorAll('[data-reset]').forEach(function(btn){
    btn.addEventListener('click',function(){
      var group=btn.getAttribute('data-reset');
      document.querySelectorAll('[data-group="'+group+'"] input[type=checkbox]').forEach(function(b){
        b.checked=false;try{localStorage.removeItem('awt:'+b.getAttribute('data-check'));}catch(e){}
      });
      updateProgress(group);
    });
  });

  // 首頁六課進度
  var spText=document.getElementById('siteProgressText');
  if(spText){
    var totals={1:5,2:6,3:6,4:5,5:5,6:6};
    var done=0;
    for(var n=1;n<=6;n++){
      var count=0;
      try{
        for(var i=1;i<=totals[n];i++){if(localStorage.getItem('awt:l'+n+'-'+i)==='1')count++;}
      }catch(e){}
      var complete=count>=totals[n];
      if(complete)done++;
      var dot=document.querySelector('.sp-dot[data-lesson="'+n+'"]');
      if(dot)dot.classList.toggle('done',complete);
    }
    spText.textContent='已完成 '+done+' / 6 課';
    var bar=document.getElementById('siteProgressBar');
    if(bar)bar.style.width=(done/6*100)+'%';
  }

  // 工作盤點表
  var KEY='awt:worksheet:l1';
  var table=document.getElementById('wsTable');
  if(table){
    var rows=Array.prototype.slice.call(table.querySelectorAll('tbody tr'));
    var status=document.getElementById('wsStatus');
    function collect(){
      return rows.map(function(tr){var o={};tr.querySelectorAll('[data-ws]').forEach(function(el){o[el.getAttribute('data-ws')]=el.value;});return o;});
    }
    function fill(data){rows.forEach(function(tr,i){var o=data[i]||{};tr.querySelectorAll('[data-ws]').forEach(function(el){el.value=o[el.getAttribute('data-ws')]||'';});});}
    try{var raw=localStorage.getItem(KEY);if(raw){fill(JSON.parse(raw));if(status)status.textContent='已載入先前儲存的內容';}}catch(e){}
    document.getElementById('wsSave').addEventListener('click',function(){
      try{localStorage.setItem(KEY,JSON.stringify(collect()));if(status)status.textContent='已儲存（'+new Date().toLocaleTimeString('zh-TW',{hour:'2-digit',minute:'2-digit'})+'）';}
      catch(e){if(status)status.textContent='這個瀏覽器不允許儲存，請先匯出 CSV';}
    });
    document.getElementById('wsClear').addEventListener('click',function(){
      rows.forEach(function(tr){tr.querySelectorAll('[data-ws]').forEach(function(el){el.value='';});});
      try{localStorage.removeItem(KEY);}catch(e){}
      if(status)status.textContent='已清除';
    });
    document.getElementById('wsExport').addEventListener('click',function(){
      function cell(v){v=(v||'').replace(/"/g,'""');return '"'+v+'"';}
      var head=['工作項目','多久一次','一次多久','適合交給 AI','判斷理由／備註'];
      var lines=[head.map(cell).join(',')];
      collect().forEach(function(o){var v=[o.task,o.freq,o.time,o.type,o.note];if(v.join('')==='')return;lines.push(v.map(cell).join(','));});
      var blob=new Blob(['\ufeff'+lines.join('\r\n')],{type:'text/csv;charset=utf-8'});
      var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='工作盤點表.csv';
      document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},300);
      if(status)status.textContent='已匯出 CSV';
    });
  }

  // SOP 複製與下載
  window.copySop=function(btn){
    var pre=document.getElementById('sopText');if(!pre)return;
    var text=pre.textContent||'';
    var label=btn.textContent;
    function done(){btn.textContent='已複製';setTimeout(function(){btn.textContent=label;},1800);}
    function fallback(){
      var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.top='-9999px';
      document.body.appendChild(ta);ta.select();try{document.execCommand('copy');}catch(e){}
      ta.remove();done();
    }
    if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(text).then(done).catch(fallback);}
    else{fallback();}
  };
  window.downloadSop=function(){
    var pre=document.getElementById('sopText');if(!pre)return;
    var blob=new Blob([pre.textContent||''],{type:'text/markdown;charset=utf-8'});
    var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='工作流程SOP範本.md';
    document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},300);
  };
})();
