// 钓鱼佬主题
import React from 'react';
import { Theme } from '../interface';
import olk from '../fisherman/sounds/olk.mp3'
import sorry from '../fisherman/sounds/sorry.mp3'
import yddmyl from '../fisherman/sounds/一滴都没有了.mp3'
import bkyo from '../fisherman/sounds/不可以哦.mp3'
import nya from '../fisherman/sounds/关注明前奶绿nya.mp3'
import white from '../fisherman/sounds/喜欢白丝.mp3'
import maolei from '../fisherman/sounds/猫雷.mp3'
import chicken from '../fisherman/sounds/绿色肥鸡.mp3'

const imagesUrls = import.meta.glob('./images/*.png', {
    import: 'default',
    eager: true,
});

type SoundNames =
    | 'olk'
    | 'sorry'
    | '一滴都没有了'
    | '不可以哦'
    | '关注明前奶绿nya'
    | '喜欢白丝'
    | '猫雷'
    | '绿色肥鸡';

const pictureSoundMap: Record<string, SoundNames> = {
    ['olk']: 'olk',
    ['sorry']: 'sorry',
    ['不可以哦']: '不可以哦',
    ['明前奶绿']: '关注明前奶绿nya',
    ['白丝']: '喜欢白丝',
    ['终极猎手']: '猫雷',
    ['坚果']: '绿色肥鸡',
};

const sounds: { name: SoundNames; src: string }[] = [
    { name: 'olk', src: olk },
    { name: 'sorry', src: sorry },
    { name: '一滴都没有了', src: yddmyl },
    { name: '不可以哦', src: bkyo },
    { name: '关注明前奶绿nya', src: nya },
    { name: '喜欢白丝', src: white },
    { name: '猫雷', src: maolei },
    { name: '绿色肥鸡', src: chicken },
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
        tripleSound: '一滴都没有了',
    })),
    sounds,
};
