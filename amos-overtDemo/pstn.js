const _aot = require('amos-overt');

function render() {
    let canvas = document.getElementById('canvas');
    let stage = new _aot.Stage(canvas);

    let scene = new _aot.Scene(stage);
    scene.background = './img/bg/bg.png';

    function node(x, y, img, name) {
        let node = new _aot.Node(name);
        node.setImage('./img/pstn/' + img, true);
        node.setLocation(x, y);
        scene.add(node);
        return node;
    }

    function linkNode(nodeA, nodeZ) {
        let link = new _aot.FoldLink(nodeA, nodeZ);
        link.lineWidth = 3;
        link.strokeColor = '255,255,0';
        scene.add(link);
        return link;
    }

    let r1 = node(143, 43, 'router.png');
    let r2 = node(143, 63, 'router.png');
    r2.alarm = '2 W';
    let r3 = node(143, 83, 'router.png');
    let r4 = node(143, 103, 'router.png');
    let r5 = node(143, 123, 'router.png', 'Encoder');

    let r6 = node(243, 123, 'router.png', 'Scrambler');
    linkNode(r1, r6);
    linkNode(r2, r6);
    linkNode(r3, r6);
    linkNode(r4, r6);
    linkNode(r5, r6);

    let r7 = node(143, 180, 'router.png');
    let r8 = node(143, 200, 'router.png');
    linkNode(r7, r6);
    linkNode(r8, r6);

    let dataCloud = node(316, 113, 'cloud.png');
    scene.add(new _aot.Link(dataCloud, r6));

    let tw130 = node(436, 107, 'tw130.png');
    scene.add(new _aot.Link(tw130, dataCloud));

    let pstn = node(316, 176, 'cloud.png');
    linkNode(pstn, tw130);

    let wdm = node(525, 114, 'wdm.png', 'WDM');
    scene.add(new _aot.Link(wdm, tw130));

    let testing = node(568, 128, 'testing.png');
    testing.alarm = '1 M';
    scene.add(new _aot.Link(testing, wdm));

    let wdm2 = node(607, 114, 'wdm.png', 'WDM');
    scene.add(new _aot.Link(wdm2, testing));

    let mainframe = node(654, 152, 'mainframe.png');
    linkNode(mainframe, wdm2);

    let phone = node(738, 173, 'phone.png', 'Phone');
    linkNode(phone, mainframe);

    let host = node(730, 225, 'host.png', 'Pc');
    linkNode(host, mainframe);

    let router2 = node(706, 282, 'router2.png', 'STB');
    router2.alarm = "1 W";
    router2.alarmColor = '0,255,0';
    linkNode(router2, mainframe);

    let terminal = node(669, 326, 'terminal.png', 'IPTV/SDV');
    linkNode(terminal, router2);

    let modem = node(623, 49, 'modem.png', 'Modem');
    let pc = node(742, 7, 'host.png');
    let router3 = node(671, 73, 'router2.png');
    let terminal3 = node(736, 100, 'terminal.png');

    linkNode(pc, modem);
    linkNode(router3, modem);
    linkNode(terminal3, router3);

    stage.add(scene);
}

render();