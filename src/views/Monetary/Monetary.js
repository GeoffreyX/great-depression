import React from 'react';
import Slideshow from '../../components/Slideshow/Slideshow';
import Date from '../../components/Date/Date';

import './Monetary.css';

import picture from './Monetary.jpg';

export default function Monetary() {
    const slides = [
        {
            linkType: 1,
            link: 'https://drive.google.com/file/d/1g70ftyF3r-3w11umUktT2p-Z6SMFR8Df/preview',
            linkBrief: 'Video Showing Aggregate Supply and Demand Graph',
            text: `\tThe Great Depression was a clear example of one of the largest failures of monetary policy in history. Throughout the crisis, the Federal Reserve repeatedly failed to reverse their generally contractionary monetary policy, largely deciding against buying government securities, and refusing to significantly increase the reserve ratio until the recession had already been wreaking havoc for years. While Monetary policy played a significant role in ending the Depression, for much of the 1930s, contractionary monetary policy actively strengthened the Depression.`,
        },
        {
            linkType: 0,
            link: 'https://vantagepointtrading.com/wp-content/uploads/2020/10/1930-crash-chart-3.jpg',
            text: `\tAs the graph shows, one of the events which propelled the Great Depression was the 1929 Stock Market Crash, in which, according to Economist Timothy Cogley of the Federal Reserve Bank of San Francisco, the Dow Jones lost hundreds of points, and consumer confidence fell almost vertically. Many economists believe that this crash was at least partially caused by the actions of the Federal Reserve in attempting to address a smaller crash which occurred from 1927-1928. In 1927, the New York Federal Reserve sold tens of thousands of treasury bonds, and convinced the other members of the Fed to raise discount rates from 3.5% to 6.0%, which resulted in a large decrease in the money supply. These changes resulted in a temporary reversal of the crash, but also set the stage for a larger economic fall once the Great Depression began.`,
        },
        {
            linkType: 3,
            links: [
                {
                    link:'https://images.squarespace-cdn.com/content/v1/52cdc300e4b012a81d31c03d/1415625255109-6LBCPQ3JC9KZZO85ZCM3/ke17ZwdGBToddI8pDm48kAuY86Hw9PfoJOj9N7gszFgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcPIL9geLof-EToOAAn-kVWC1XPIQf7uVPzCc6OE-KWLR-uoS0vfYvf2qy9Qq6CBAJ/image-asset.png?format=750w',
                    linkBrief: 'US Monetary Policy Through The Early 1930s',
                },
                {
                    link: 'https://www.sjsu.edu/faculty/watkins/depmon0.gif',
                    linkBrief: 'US Monetary Policy Through The Early 1930s',
                },
            ],
            
            text: `\tAs the graphs show, The Fed was extremely slow to reverse its contractionary monetary policy in the Great Depression, with the New York Branch being one of the few members to actively attempt to change monetary policy, buying treasury bonds and attempting to convince their fellow members to raise the reserve ratio rate and lower the discount rate. As a result, according to the National Bureau for Economic Research, contractionary monetary policy remained in place for the first half of the 1930s, leading to a decrease in the money supply, a rise in interest rates, and a continued fall in aggregate demand. Additionally, the refusal of most Branches of the Fed to buy treasury bonds or to raise the reserve ratio rate further decreased aggregate demand by keeping the money supply consistently low.`,
        },
        {
            linkType: 1,
            link: 'https://drive.google.com/file/d/1OPzE7tz--Aiu8vSRNHDyfbu78zt0aRf_/preview',
            text: `\tAccording to the National Bureau for Economic Research, the Fed began to shift out of their contractionary monetary policy stance in the late 1930s by buying large amounts of US Treasury bonds, in addition to raising the reserve ratio rate by 5%. This change led to a decrease in the interest rate and an increase in the money supply, which encouraged the Fed to continue to shift towards expansionary monetary policy. When the War began for the US in late 1941, the Great Depression was finally ended thanks to a large increase in Government Spending, which, along with the expansionary monetary policy, drove aggregate demand to soaring heights and vastly increased the GDP. `,
        },
        {
            linkType: 3,
            links: [
                {
                    link: 'http://4.bp.blogspot.com/_otfwl2zc6Qc/SpcfEsicudI/AAAAAAAALJ4/NIVVlgOz4OQ/s400/bank4.jpg',
                },
                {
                    link: picture,
                }
            ],
            text: `\tAccording to Daniel Sanches of Federal Reserve History, The Great Depression substantially changed the use of Monetary Policy for the Federal Reserve. The Fed’s refusal to shift away from contractionary monetary policy had been a flawed decision which had strengthened the economic crash and done little to accomplish its initial goal of keeping stock prices up. In future economic crises, the Fed would be more careful with applying monetary policy, to avoid strengthening future economic crises, with the results clearly being shown in these graphs in the form of thousands of less banks closing in the economic crises after The Great Depression. The Great Recession was a terrible economic recession, but The Federal Reserve was cautious and innovative in addressing the crisis, leading to far less bank closures and economic turmoil than the Great Recession. While the Great Depression was a clear failure for the Federal Reserves in many ways, especially in monetary policy, the Fed learned and improved from its mistakes, which is the ultimate legacy of the Fed’s role in the Great Depression.`,
        }
    ];

    const dates = [
        (<Date year='Overview' />),
        (<Date year='1929' />),
        (<Date year='Early 1930s' />),
        (<Date year='Late 1930s - 1940s' />),
        (<Date year='Future' />),
    ]

    return (
        <div className='Monetary'>
           <Slideshow slides={slides} dates={dates} />
        </div>
    );
};