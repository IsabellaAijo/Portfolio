<template>
    <div class="projects-body" id="projects">
        <h2>Projects</h2>
        <hr class="col-1">
        <p>As my skills and public repos grow, so will this section. </p>

        <!-- TODO: WHEN HOVER OVER PICTURE, BRING UP GITHUB LINK -->
        <div class="card">
            <div class="row no-gutters">
                <div class="col-md-4">
                <img src="../../assets/quantum-gradient.svg" class="card-img" alt="...">
                </div>
                <div class="col">
                <div class="card-body">
                    <h5 class="card-title">GitHub Pages Portfolio Website</h5>
                    <p class="card-text">It's what you're viewing right now! This is the accumulation of what 
                        I enjoy in front-end engineering: a simple, streamlined UI paired with responsive web design.
                        Developed purely in front end to be deployable through github pages, it's created in Vue.JS 
                        and Bootstrap for extremly readable code and easy accessibility for updates. 
                    </p>
                    <p class="card-text"><small class="text-muted">Developed with Vue.JS, Bootstrap, HTML5</small></p>
                </div>
                </div>
            </div>
        </div>

        <div class="card" id="mobile-card">
            <div class="row no-gutters">
                <div class="col-md-4">
                <img src="../../assets/quantum-gradient.svg" class="card-img" alt="...">
                </div>
                <div class="col">
                <div class="card-body">
                    <h5 class="card-title">Custom Search Engine</h5>
                    <p class="card-text">Medical Students' aid! Do yo have thousands of medical files you need 
                        to search for on your computer but want a result faster than what Windows can provide? This custom search engine 
                        is built from scratch based in C++. It parses through thousands of medical texts, 
                        providing users with the most relevant content based on the users' entered search term(s) and similar words  
                        based on its frequency training for which words are likely to appear in similar texts.
                    </p>
                    <p class="card-text"><small class="text-muted">Developed in C++ with CMake, Clion</small></p>
                </div>
                </div>
            </div>
        </div>
        <div class="card" id="desktop-card">
            <div class="row no-gutters">
                
                <div class="col">
                <div class="card-body">
                    <h5 class="card-title">Custom Search Engine</h5>
                    <p class="card-text">Medical Students' aid! Do yo have thousands of medical files you need 
                        to search for on your computer but want a result faster than what Windows can provide? This custom search engine 
                        is built from scratch based in C++. It parses through thousands of medical texts, 
                        providing users with the most relevant content based on the users' entered search term(s) and similar words  
                        based on its frequency training for which words are likely to appear in similar texts.</p>
                    <p class="card-text"><small class="text-muted">Developed in C++ with CMake, Clion</small></p>
                </div>
                </div>
                <div class="col-md-4">
                <img src="../../assets/quantum-gradient.svg" class="card-img" alt="...">
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="row no-gutters">
                <div class="col-md-4">
                <img src="../../assets/quantum-gradient.svg" class="card-img" alt="...">
                </div>
                <div class="col">
                <div class="card-body">
                    <h5 class="card-title">Full Stack Debate Website</h5>
                    <p class="card-text">Redditors rejoice! A website deticated to debating! Users are paired randomly to enguage 
                        in intense online chatroom debates, or take it easy and watch other keyboard warriors fight instead. Utilizing 
                        React.JS for a seamless front end, and Angular.JS and cloud technology for a powerful backend components, this site stores  
                        user PII, enabling users to create accounts, login with correct credentials, and access their  
                        profile accross multiple devices.
                    </p>
                    <p class="card-text"><small class="text-muted">Developed with React.JS, Angular.JS, Bootstrap, and Typescript</small></p>
                </div>
                </div>
            </div>
        </div>

        <!-- Projects: Portfolio, Search Engine, Full stack dev website-->
        <!--<table>
            <tr>
                <th>
                    <h3>Here's the first project</h3>
                    <p>
                        Gay ass explination about whatever
                        shit I created. Gay gay gay gay 
                        gay. Fuck that's pretty gay. I'll 
                        try not to - gay - FUCK. I can't help 
                        it. This is too gay. It must be terminated.
                    </p>
                    <div class="badge-table">
                        <div class="badge">Ploopy</div>
                        <div class="badge">Greg</div>
                        <div class="badge">Heffley</div>
                    </div>
                </th>
                <th><img src="https://placehold.jp/250x150.png"></th>
            </tr>
            <tr>
                <th><img src="https://placehold.jp/250x150.png"></th>
                <th>
                    <h3>Sarcastic Woow she did something</h3>
                    <p>
                        No matter what I do, I hope I do 
                        something that becomes worthy of 
                        someone else following me like Mr. 
                        Slave does for Mr. Garrison. Dude.
                    </p>
                    <div class="badge-table">
                        <div class="badge">Peter</div>
                        <div class="badge">Griffin</div>
                        <div class="badge">Turds</div>
                    </div>
                </th>
            </tr>
            <tr>
                <th>
                    <h3>Finally the last fucking project</h3>
                    <p>
                        Last night I puked in my bed after a bad 
                        dream so I went to my mom to confirm that 
                        she will clean my vomit up but learned I 
                        forgot to get a posterboard for my social 
                        studies presentation tomorrow. The Putin 
                        staged this this whole time then...
                    </p>
                    <div class="badge-table">
                        <div class="badge">Sloppy</div>
                        <div class="badge">Succ</div>
                        <div class="badge">Tiddies</div>
                    </div>
                </th>
                <th><img src="https://placehold.jp/250x150.png"></th>
            </tr>
        </table> -->
    </div>
</template>