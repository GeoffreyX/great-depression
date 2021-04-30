import React from 'react';
import Slideshow from '../../components/Slideshow/Slideshow';
import Date from '../../components/Date/Date';

import './Fiscal.css';

import fiscal1 from './Fiscal1.jpg';
import fiscal2 from './Fiscal2.jpg';

export default function Fiscal() {
    const slides = [
        {
            linkType: 0,
            link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Lange-MigrantMother02.jpg/691px-Lange-MigrantMother02.jpg',
            linkBrief: 'The Migrant Mother, a famous painting symbolizing hunger the hunger and poverty of the typical American crushed by the economic downturn',
            text: `\tFrom World War I and the previously ongoing economic boom in the 1920s, the US’s economy was undergoing an unprecedented economic boom. However, as the economy crashed suddenly in 1929, the government responded quickly, but not correctly. Similar to the approach towards monetary policy, fiscal policy remained contractionary. These contractionary policies forced the aggregate demand leftwards, far too fast for supply to readjust. A series of actions led by President Hoover during his 1929 - 1933 presidency stalled economic growth and delayed economic recovery. This was followed by Franklin D. Roosevelt, who then implemented several waves of “New Deals”. And while government policies were partially effective from 1933 onwards, another wave of recession hit the economy in the late 1930s, only eventually recovering with the onset of WWII.`,
        },
        {
            linkType: 1,
            link: 'https://www.youtube.com/embed/C4CvLu8HA7I',
            text: `\tUnlike the theories of Hoover not acting in the early signs of the Great Depression, the 31st president actually heavily used the government’s influence to try and correct for the onsetting depression. However, solutions implemented were founded upon fundamentally flawed classical economic theories, resulting in the opposite effect that Hoover desired. According to Britannica, one of the first steps in the development of the depression was fixing high wages during the depression, and urging businesses to not lay off workers. Despite the pressure, the fixed wages and the growing depression meant that  businesses weren’t able to keep afloat with their expenses, eventually causing unemployment to skyrocket. Controversially, the president also signed the Smoot-Hawley Tariff Act and kept high taxes throughout his presidential term`,
        },
        {
            linkType: 3,
            links: [
                {
                    link: 'https://depts.washington.edu/depress/images/hoovervilles/Hooverville%20Front%20Page.jpg',
                    linkBrief: 'The Great Depression got so dire that small settlements of homeless veterans began forming in abandoned areas. These camps were coined \'Hoovervilles\'.',
                },
                {
                    link: fiscal1,
                    linkBrief: 'The decrease in demand from contractionary fiscal policy and the expected downturn resulted in a decrease \n in GDP and dried prices',
                },
            ],
            
            text: `\tHoover, seeing that initial fiscal policy had not worked, drafted systems very similar to those that would be found in the New Deal - hints of a Works Public Administration, loans, and other financing plans. However, throughout all of his presidency, he refused to directly grant money to the public, fearing what he believed to be socialism, according to The Gilder Lehrman Institute of American History. In the end, Hoover implemented too many contractionary policies and didn’t take enough expansionary steps for the economy, and very likely increased the Great Depression’s duration.`,
        },
        {
            linkType: 1,
            link: 'https://www.youtube.com/embed/0rjtOWn5mj0',
            text: `\tUnlike Hoover, Roosevelt did not shy away from directly granting money. He began implementing the famously-known “New Deal” for the economy. Surprisingly, however, a large portion of his “alphabet soup” were actually sourced from Hoover’s later attempts for implementing expansionary fiscal policy. Two examples are the Works Public Administration  (WPA) and Reconstruction Finance Corporation (RFC). While these efforts were initially controversial, they proved to work well, decreasing unemployment year by year.`,
        },
        {
            linkType: 0,
            link: 'https://fred.stlouisfed.org/graph/fredgraph.png?g=rc6m',
            text: `\tHowever, FDR differed in that he saw the value in policies like Social Security, where money was directly granted to citizens. Looking from an economic view, unemployment had almost risen to 25% (FRED), and some of these policies stopped the steep progression of the Depression. 1934 showed immediate alleviation, as the U.S. Bureau of Labor Statistics estimated a 21.7% unemployment rate and 10.8% GDP growth that year. There was another 20.1% unemployment and 8.9% GDP growth in 1935, followed by 16.9% unemployment and 12.9% GDP growth in 1936.`,
        },
        {
            linkType: 3,
            links: [
                {
                    link: 'https://twt-thumbs.washtimes.com/media/image/2020/04/09/AP4502230131_c0-860-5000-3775_s885x516.jpg?5acecb7673096efdc929597b8dd2705e002fc652',
                },
                {
                    link: fiscal2,
                    linkBrief: 'Economic recovery and expasionary policy shifted demand rightwards, revitalizing GDP.',
                },
            ],
            text: `\tFDR implemented most of these policies in the first 100 days of his presidency. However, a second “New Deal” implemented in 1935 focused more on regulations and the restructuring of the law. These policies ultimately had mixed results, and did not have great success. Just after the 2nd New Deal, the recession at the end 1937 sent the economy back into a downturn, with unemployment rising again. It wouldn’t be until the hints of  WWII until economic progress was revitalized.`,
        },
    ];

    const dates = [
        (<Date year='Overview' />),
        (<Date year='1930' />),
        (<Date year='1932' />),
        (<Date year='1933' />),
        (<Date year='1933 cont.' />),
        (<Date year='1937+' />),
    ]

    return (
        <div className='Fiscal'>
           <Slideshow slides={slides} dates={dates} />
        </div>
    );
};