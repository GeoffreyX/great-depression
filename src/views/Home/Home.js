import React from 'react';
import Slideshow from '../../components/Slideshow/Slideshow';
import Date from '../../components/Date/Date';

import './Home.css';

export default function Home() {
    const slides = [
        {
            linkType: 2,
            link: 'https://f1.media.brightcove.com/4/1543588752001/1543588752001_2586961927001_05-Why-did-it-happen--720.mp4#t=0,134',
            linkBrief: 'A youtube video about the Smoot-Hawley Tariff Act',
            text: `\tAs this video by The St. Louis Fed states, the Stock Market helped to fuel the Great Depression by drastically weakening consumer confidence in the economy, and by destroying large amounts of wealth. The weakened consumer confidence reduced aggregate demand and increased many consumer’s propensity to save, leading to a large drop in GDP. Additionally, the money quantity demanded fell rapidly, and the money multiplier effect was drastically reduced as consumers began to buy as little goods and services as possible. While the Stock Market Crash was not the only cause for the Great Depression, it was a significant amplifier.`,
        },
        {
            linkType: 1,
            link: 'https://www.youtube.com/embed/Q4ycbrNMMig',
            text: `\tThe Gold Standard played a major role in exacerbating the Great Depression. As the video mentions, expanding the money supply under the Gold Standard in a short period of time was very difficult, which limited the Fed’s available options in dealing with the Economic Recession. Additionally, the Gold Standard limited the trade which nations were willing to undergo, as nations under the Gold Standard generally did not feel secure enough in their limited money supplies to engage in large amounts of trade, further decreasing the GDPs of many nations, and especially the US, due to its status as a trader of many finished goods. Though the US would not shift away from the Gold Standard fully until 1971, the Great Depression did a great deal to lower the faith of many US consumers in the Gold Standard.`,
        },
        {
            linkType: 0,
            link: 'https://depts.washington.edu/depress/images/hoovervilles/Hooverville%20Front%20Page.jpg',
            linkBrief: 'The Great Depression got so dire that small settlements of homeless veterans began forming in abandoned areas. These camps were coined \'Hoovervilles\'.',
            text: `\tHoover, seeing that initial fiscal policy had not worked, drafted systems very similar to those that would be found in the New Deal - hints of a Works Public Administration, loans, and other financing plans. However, throughout all of his presidency, he refused to directly grant money to the public, fearing what he believed to be socialism (The Gilder Lehrman). In the end, Hoover implemented too many contractionary policies and didn’t take enough expansionary steps for the economy, and very likely increased the Great Depression’s duration.`,
        },
    ];

    const dates = [
        (<Date year='Stock Market' />),
        (<Date year='Gold Standard' />),
    ]

    return (
        <div className='Home'>
           <Slideshow slides={slides} dates={dates} />
        </div>
    );
};