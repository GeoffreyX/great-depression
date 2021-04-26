import React from 'react';

import './Links.css';

export default function Links(props) {
    return (
        <div>
            <a 
                style={{display:'inline-block'}}
                href={'https://docs.google.com/document/d/12PLJ0MwoIlR4AkSDaKOPhowT-Jr5nV8jprJo7rT3MeY/edit'}
            >
                Our notes document
            </a>
            <div class='CitationBody'>
                <div>Works Cited </div>
                <div class='CitationSource'>
                <em>Cogley, Timothy</em>. “Monetary Policy and the Great Crash of 1929: A Bursting Bubble or Collapsing 
                Fundamentals?” Federal Reserve Bank of San Francisco, Federal Reserve Bank of San Francisco, 26 Mar. 1999, www.frbsf.org/economic-research/publications/economic-letter/1999/march/monetary-policy-and-the-great-crash-of-1929-a-bursting-bubble-or-collapsing-fundamentals/#:~:text=In%20any%20event%2C%20monetary%20policy,economic%20activity%20and%20share%20prices.
                </div>
                <div class='CitationSource'> 
                <em>“Herbert Hoover</em>.” Encyclopædia Britannica, Encyclopædia Britannica, Inc., 14 July 2018,
                www.britannica.com/biography/Herbert-Hoover. 
                </div>
                <div class='CitationSource'>
                <em>Horwitz, Steven</em>. “Hoover's Economic Policies.” Econlib, Econlib, 12 Apr. 2020, 
                www.econlib.org/library/Enc/HooversEconomicPolicies.html.
                </div>
                <div class='CitationSource'>
                <em>“Policy Interventions and the Great Depression</em>.” Saylor, Github, 17 July 2019, 
                saylordotorg.github.io/text_macroeconomics-theory-through-applications/s11-05-policy-interventions-and-the-g.html#:~:text=During%20the%20Great%20Depression%2C%20monetary,spending%20to%20stabilize%20the%20economy.
                </div>
                <div class='CitationSource'>
                <em>Sanches, Daniel</em>. “The Second World War and Its Aftermath.” Federal Reserve History, Federal 
                Reserve History, 22 Nov. 2013, www.federalreservehistory.org/essays/wwii-and-its-aftermath#:~:text=Monetary%20policy%20fundamentally%20changed%20from,Treasury%2DFed%20Accord%20in%201951.&text=The%20goal%20was%20to%20promote,the%20outset%20of%20the%20war. 
                </div>
                <div class='CitationSource'>
                <em>Smiley, Gene</em>. “The Great Depression.” Econlib, Econlib, 19 Sept. 2020, 
                www.econlib.org/library/Enc/GreatDepression.html. 
                </div>
            </div>
        </div>
    );
};