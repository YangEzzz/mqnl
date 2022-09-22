// 明前奶绿主题
import React from 'react';
import { Theme } from '../interface';
import ea from '../mqnl/sounds/呃啊.mp3';
import e from '../mqnl/sounds/呃.mp3';
import damie from '../mqnl/sounds/打咩.mp3';
import nya from '../mqnl/sounds/nya.mp3';
import white from '../mqnl/sounds/白丝.mp3';
import guanzhu from '../mqnl/sounds/关注明前奶绿nya.mp3';
import maolei from '../mqnl/sounds/猫雷.mp3';
import fish from '../mqnl/sounds/鱼人语.mp3';
// import night from '../mqnl/sounds/早安午安晚安.mp3'

import soundTripleUrl from '../mqnl/sounds/sound-triple.mp3';

const imagesUrls = import.meta.glob('./images/*.png', {
    import: 'default',
    eager: true,
});

type SoundNames =
    | '呃啊'
    | '呃'
    | '打咩'
    | 'nya'
    | '白丝'
    | '猫雷'
    | '鱼人语'
    | '关注明前奶绿nya'
    | 'triple';

const pictureSoundMap: Record<string, SoundNames> = {
    ['olk']: '呃',
    ['不可以哦']: '打咩',
    ['可爱小奶绿']: '呃啊',
    ['明前奶绿']: 'nya',
    ['白丝']: '白丝',
    ['终极猎手']: '猫雷',
    ['坚果']: '鱼人语',
};

const sounds: { name: SoundNames; src: string }[] = [
    { name: '呃', src: e },
    { name: '打咩', src: damie },
    { name: '呃啊', src: ea },
    { name: 'nya', src: nya },
    { name: '白丝', src: white },
    { name: '猫雷', src: maolei },
    { name: '鱼人语', src: fish },
    { name: 'triple', src: soundTripleUrl },
    { name: '关注明前奶绿nya', src: guanzhu },
];

const mqnl = Object.entries(imagesUrls).map(([key, value]) => ({
    name: key.slice(9, -4),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    content: <img src={value} alt="" />,
}));

export const mqnlTheme: Theme<SoundNames> = {
    name: '明前奶绿',
    icons: mqnl.map(({ name, content }) => ({
        name,
        content,
        clickSound: pictureSoundMap[name],
        tripleSound: 'triple',
    })),
    sounds,
};
