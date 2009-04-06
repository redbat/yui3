YUI.add("node",function(C){var K="__::__";C.Array._diff=function(N,M){if(N.join&&M.join){return K+N.join(K+K)+K.replace(C.DOM._getRegExp("("+K+M.join(K+"|"+K)+K+")","g"),"").replace(C.DOM._getRegExp("^"+K),"").replace(C.DOM._getRegExp(K+"$"),"").split(K+K);}else{}};C.Array.diff=function(N,M){return{added:C.Array._diff(M,N),removed:C.Array._diff(N,M)};};var J=[],I=Array.prototype.slice,D="_yuid",A=function(M){A.superclass.constructor.apply(this,arguments);};A.NAME="NodeList";A.ATTRS={style:{value:{}}};A._instances=[];A.each=function(M,P,O){var N=J[M[D]];if(N&&N.length){C.Array.each(N,P,O||M);}else{}};A.DEFAULT_SETTER=function(M,O){var N=A._tmpNode=A._tmpNode||C.Node.create("<div>");A.each(this,function(Q){var P=C.Node._instances[Q[D]];if(!P){L[N[D]]=Q;P=N;}P.set(M,O);});};A.DEFAULT_GETTER=function(M){var O=A._tmpNode=A._tmpNode||C.Node.create("<div>"),N=[];A.each(this,function(Q){var P=C.Node._instances[Q[D]];if(!P){L[O[D]]=Q;P=O;}N[N.length]=P.get(M);});return N;};C.extend(A,C.Base);C.mix(A.prototype,{initializer:function(N){var O=N.doc||C.config.doc,M=N.nodes||[];if(typeof M==="string"){this._query=M;M=C.Selector.query(M,O);}A._instances[this[D]]=this;J[this[D]]=M;},hasAttr:function(M){return this._conf.get(M);},get:function(M){if(!this.hasAttr(M)){this._addDOMAttr(M);}return A.superclass.constructor.prototype.get.apply(this,arguments);},set:function(M,N){if(!this.hasAttr(M)){this._addDOMAttr(M);}A.superclass.constructor.prototype.set.apply(this,arguments);},on:function(R,Q,P,M){var O=I.call(arguments,0),N;O.splice(2,0,J[this[D]]);if(G.DOM_EVENTS[R]){C.Event.attach.apply(C.Event,O);}return A.superclass.constructor.prototype.on.apply(this,arguments);},destructor:function(){J[this[D]]=[];delete A._instances[this[D]];},refresh:function(){var M;if(this._query){if(J[this[D]]&&J[this[D]][0]&&J[this[D]][0].ownerDocument){M=J[this[D]][0].ownerDocument;}J[this[D]]=C.Selector.query(this._query,M||C.config.doc);}},size:function(){return J[this[D]].length;},toString:function(){var P="",O=this[D]+": not bound to any nodes",M=J[this[D]]||{};if(M){var N=M[0];P+=N[E];if(N.id){P+="#"+N.id;}if(N.className){P+="."+N.className.replace(" ",".");}if(M.length>1){P+="...["+M.length+" items]";}}return P||O;},_addDOMAttr:function(M){var N=J[this[D]]||[];if(N[0]&&N[0][M]!==undefined){this.addAttr(M,{getter:function(){return A.DEFAULT_GETTER.call(this,M);},setter:function(O){A.DEFAULT_SETTER.call(this,M,O);},});}}},true);C.NodeList=A;C.all=function(N,P,M){var O=new A({nodes:N,doc:P,restrict:M});return O.size()?O:null;};var L=[],I=Array.prototype.slice,H=".",E="nodeName",D="_yuid",G=function(M){this[D]=C.stamp(M.node);L[this[D]]=M.node;G._instances[this[D]]=this;F.apply(this,arguments);},F=C.Base,B=C.Base.prototype;G.NAME="Node";G.DOM_EVENTS={click:true};G._instances={};G.getDOMNode=function(M){return L[M[D]];};G.get=function(O,P,N){var M=null;O=(typeof O==="string")?C.Selector.query(O,P,true):O;if(O){M=G._instances[O[D]]||new G({node:O,restricted:N});}return M;};G.create=function(){return C.get(C.DOM.create.apply(C.DOM,arguments));};G.ATTRS={restricted:{writeOnce:true,value:false}};G.DEFAULT_SETTER=function(M,P){var N=L[this[D]],Q,O;if(M.indexOf(H)!==-1){Q=M;O=M.split(H);M=O.shift();if(O){P=C.Object.setValue(N[M],O,P);if(P===undefined){allowSet=false;}}}else{N[M]=P;}return P;};G.DEFAULT_GETTER=function(M){var N=L[this[D]];return N[M];};C.extend(G,C.Base);C.mix(G.prototype,{hasAttr:function(M){return !!this._conf.get(M);},toString:function(){var O="",N=this[D]+": not bound to a node",M=L[this[D]];if(M){O+=M[E];if(M.id){O+="#"+M.id;}if(M.className){O+="."+M.className.replace(" ",".");}O+=" "+this[D];}return O||N;},_addDOMAttr:function(M){var N=L[this[D]],O=M.split(".")[0];if(N&&N[O]!==undefined){this.addAttr(O,{getter:function(){return G.DEFAULT_GETTER.call(this,M);},setter:function(P){return G.DEFAULT_SETTER.call(this,M,P);}});}else{}},addNode:function(N,M){},on:function(Q,P,O,M){var N=I.call(arguments,0);N.splice(2,0,L[this[D]]);if(G.DOM_EVENTS[Q]){C.Event.attach.apply(C.Event,N);}return B.on.apply(this,arguments);},get:function(M){if(!this.hasAttr(M)){this._addDOMAttr(M);}return B.get.apply(this,arguments);},set:function(M,N){if(!this.hasAttr(M)){this._addDOMAttr(M);}B.set.apply(this,arguments);},destructor:function(){L[this[D]]=[];delete G._instances[this[D]];}},true);C.Node=G;C.get=C.Node.get;},"@VERSION@",{requires:["dom"]});