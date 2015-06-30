//TODO:code logic

    function callWidget(spi) {
        var xmlString ="<"+"?xml version='1.0' encoding='UTF-8'?>"+
        "<elements>"+
        "<actor>"+document.getElementById('thisActorCode').value+"</actor>"+
        "<unit>"+document.getElementById('unit').value+"</unit>"+
        "<component>PlatonAction</component>"+
        "<action>set value:s_tasksWidget</action>"+
        "<dataAction>s_tasksWidget</dataAction>"+
        "<value><![CDATA["+spi+"]]></value>"+
        "<dataComponent>s_flag:s_tasksWidget</dataComponent>"+
        "</elements>";
        xmlString=xmlString.replace(/&/g,'&');
        new net.sendThis("main",oncallWidget, null, null, null,"POST",xmlString,"text/xml");
        }
        
        function oncallWidget() {
            var doc=this.req.responseXML;
            var status = getXmlValue(doc, "status");
            var message = getXmlValue(doc, "message");
            var el = this.obj_reference;
            if (status == 0){
                var platonHtml = doc.getElementsByTagName("platonHtml")[0].firstChild.nodeValue;
                alert(platonHtml);
            }
        }
//Always end your javascript files with scriptLoaded();
scriptLoaded();