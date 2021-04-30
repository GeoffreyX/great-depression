import React from 'react';

import './Links.css';

export default function Links(props) {

    const citations = [
        {
            start: `Amadeo, Kimberly. `,
            end: `“How FDR Beat the Great Depression.” The Balance, 11 Nov. 2020, thebalance.com/fdr-economic-policies-and-accomplishments-3305557.`,
        },
        {
            start: `Amadeo, Kimberly. `,
            end: `“What Happened During the Great Depression?” The Balance, The Balanace, 27 May 2020, www.thebalance.com/the-great-depression-of-1929-3306033.`,
        },
        {
            start: `Cogley, Timothy. `,
            end: `“Monetary Policy and the Great Crash of 1929: A Bursting Bubble or Collapsing Fundamentals?” Federal Reserve Bank of San Francisco, Federal Reserve Bank of San Francisco, 26 Mar. 1999, www.frbsf.org/economic-research/publications/economic-letter/1999/march/monetary-policy-and-the-great-crash-of-1929-a-bursting-bubble-or-collapsing-fundamentals/#:~:text=In%20any%20event%2C%20monetary%20policy,economic%20activity%20and%20share%20prices.`,
        },
        {
            start: `“Dow Jones - DJIA`,
            end: ` - 100 Year Historical Chart.” MacroTrends, MacroTrends, 27 Apr. 2021, www.macrotrends.net/1319/dow-jones-100-year-historical-chart. `,
        },
                {
            start: `“Fed Strategies`,
            end: `in the Great Depression and the Great Recession.” NBER, NBER, 11 Nov. 2016, www.nber.org/digest/nov16/fed-strategies-great-depression-and-great-recession#:~:text=That%20was%20U.S.%20monetary%20policy,brought%20down%20interest%20rates%20dramatically.&text=The%20U.S.%20was%20on%20the,2008%20exchange%20rates%20floated%20freely.`,
        },
        {
            start: `“Herbert Hoover.” `,
            end: `Encyclopædia Britannica, Encyclopædia Britannica, Inc., 14 July 2018, www.britannica.com/biography/Herbert-Hoover.`,
        },
        {
            start: `History.com Staff. `,
            end: `“Great Depression History.” HISTORY, A&E Television Networks, 30 Apr. 2021, history.com/topics/great-depression/great-depression-history.`,
        },
        {
            start: `Hoover, A. Herbert. `,
            end: `Herbert Hoover on the Great Depression and New Deal, 1931–1933 | Gilder Lehrman Institute of American History. gilderlehrman.org/history-resources/spotlight-primary-source/herbert-hoover-great-depression-and-new-deal-1931%E2%80%931933.`,
        },
        {
            start: `Horwitz, Steven. `,
            end: `“Hoover's Economic Policies.” Econlib, Econlib, 12 Apr. 2020, www.econlib.org/library/Enc/HooversEconomicPolicies.html.`,
        },
        {
            start: `Jordan, Stephanie.`,
            end: `“Similarities Between the 2008 Financial Crisis and the Coronavirus 
            Pandemic.” Consulting Services Group, Ceto and Associates, 5 Mar. 2018, www.ceto.com/blog/similarities-between-the-2008-financial-crisis-and-the-coronavirus-pandemic. `,
        },
        {
            start: `“Policy Interventions`,
            end: ` and the Great Depression.” Saylor, Github, 17 July 2019, saylordotorg.github.io/text_macroeconomics-theory-through-applications/s11-05-policy-interventions-and-the-g.html#:~:text=During%20the%20Great%20Depression%2C%20monetary,spending%20to%20stabilize%20the%20economy.`,
        },
        {
            start: `Sanches, Daniel. `,
            end: `“The Second World War and Its Aftermath.” Federal Reserve History, Federal Reserve History, 22 Nov. 2013, www.federalreservehistory.org/essays/wwii-and-its-aftermath#:~:text=Monetary%20policy%20fundamentally%20changed%20from,Treasury%2DFed%20Accord%20in%201951.&text=The%20goal%20was%20to%20promote,the%20outset%20of%20the%20war.`,
        },
        {
            start: `Smiley, Gene. `,
            end: `“The Great Depression.” Econlib, Econlib, 19 Sept. 2020, www.econlib.org/library/Enc/GreatDepression.html.`,
        },
        {
            start: `That Was History. `,
            end: `The Gold Standard's Impact on The Great Depression. Youtube, Youtube, 18 Sept. 2013, www.youtube.com/watch?v=Q4ycbrNMMig.`,
        },
        {
            start: `“What Caused the Great Depression?`,
            end: `: Economic Episodes in American History: The Great Depression: St. Louis Fed.” St. Louis Federal Reserve, St. Louis Federal Reserve, 3 Feb. 2020, www.stlouisfed.org/the-great-depression/curriculum/economic-episodes-in-american-history-part-5.`,
        },
    ];

    return (
        <div className='Links'>
            <a
                style={{ display: 'inline-block' }}
                href={'https://docs.google.com/document/d/12PLJ0MwoIlR4AkSDaKOPhowT-Jr5nV8jprJo7rT3MeY/edit'}
            >
                Our notes document
            </a>
            <div class='CitationBody'>
                <div>Works Cited </div>
                {citations.map(({start, end}) => (
                    <div class='CitationSource'>
                        <em>{start}</em> {end}
                    </div>
                ))}
            </div>
        </div>
    );
};