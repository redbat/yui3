YUI.add("editor-br",function(D){var E=function(){E.superclass.constructor.apply(this,arguments);},A="host",B="li";D.extend(E,D.Base,{_onKeyDown:function(I){if(I.keyCode==13){var F=this.get(A),H=F.getInstance(),G=new H.Selection();if(G){if(D.UA.ie){if(!G.anchorNode.test(B)&&!G.anchorNode.ancestor(B)){G._selection.pasteHTML("<br>");G._selection.collapse(false);G._selection.select();I.halt();}}if(D.UA.webkit){if(!G.anchorNode.test(B)&&!G.anchorNode.ancestor(B)){F.frame._execCommand("insertlinebreak",null);I.halt();}}}}},_afterEditorReady:function(){var F=this.get(A).getInstance();try{F.config.doc.execCommand("insertbronreturn",null,true);}catch(G){}if(D.UA.ie||D.UA.webkit){F.on("keydown",D.bind(this._onKeyDown,this),F.config.doc);}},initializer:function(){var F=this.get(A);if(F.editorPara){D.error("Can not plug EditorBR and EditorPara at the same time.");return;}F.after("ready",D.bind(this._afterEditorReady,this));}},{NAME:"editorBR",NS:"editorBR",ATTRS:{host:{value:false}}});D.namespace("Plugin");D.Plugin.EditorBR=E;if(D.UA.ie){var C=function(J,F){var I=this.getInstance(),G=this.get(A),H=new I.Selection();if(H.isCollapsed){G.exec.command("inserthtml","<"+F+' id="yui-ie-list"><li></li></'+F+">");I.on("available",function(){this.set("id","");this.one("li").append(this.get("nextSibling")).append(I.Selection.CURSOR);G.focus(true);H.focusCursor();},"#yui-ie-list");}else{G.exec._command(J,"");}};D.Plugin.ExecCommand.COMMANDS.insertunorderedlist=function(F,G){C.call(this,F,"ul");};D.Plugin.ExecCommand.COMMANDS.insertorderedlist=function(F,G){C.call(this,F,"ol");};D.Plugin.ExecCommand.COMMANDS.outdent=function(I,J){var H=this.getInstance(),F=this.get(A),G=new H.Selection();if(G.isCollapsed){F.exec.command("inserthtml",'<var id="yui-ie-bq"></var>');H.on("available",function(){var M=this.ancestor("blockquote"),L,K;this.set("id","");this.remove();if(!M){return;}L=M.ancestor("blockquote");if(L){L.replace(M);K=M;}else{K=H.Node.create("<span></span>");K.set("innerHTML",M.get("innerHTML"));M.replace(K);}K.append(H.Selection.CURSOR);F.focus(true);G.focusCursor();H.Selection.cleanCursor();},"#yui-ie-bq");}else{F.exec._command(I,"");}};D.Plugin.ExecCommand.COMMANDS.indent=function(I,J){var H=this.getInstance(),F=this.get(A),G=new H.Selection();if(G.isCollapsed){F.exec.command("inserthtml",'<blockquote id="yui-ie-bq"></blockquote>');H.on("available",function(){this.set("id","");var L=this.ancestor("blockquote"),K;if(!L){K=this.get("nextSibling");}if(L){this.remove();L.set("innerHTML","<blockquote>"+L.get("innerHTML")+H.Selection.CURSOR+"</blockquote>");}if(K){this.append(K).append(H.Selection.CURSOR);}F.focus(true);G.focusCursor();H.Selection.cleanCursor();},"#yui-ie-bq");}else{F.exec._command(I,"");}};}},"@VERSION@",{requires:["node"],skinnable:false});