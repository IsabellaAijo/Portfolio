<script setup>
import Header from '../components/AppHeader.vue'
import Skills from '../components/AppSkills.vue'
import Projects from '../components/AppProjects.vue'
import Contact from '../components/AppContact.vue'
import Footer from '../components/AppFooter.vue'
</script>

<template>
  <body>
    <!-- AppHeader.vue -->
    <Header />

    <div class="main-view" id="home" style="height: 100%;">
      <div class="main-header">
        <h1>Hei.</h1>
        <h1>I'm Isabella Äijö.</h1>
        <hr class="col-2">
      </div>
      
      <div class="main-text">
        <p class="fs-4">
          Hello! Welcome to my site - it's still under construction, so I hope you 
          don't mind seeing my design evolve as I refine my ideas here. I'm a recent 
          computer science graduate who lives to create and push my skills to grow and 
          always be learning.
        </p>
      </div>

      <!-- Base mouse scroll written by Yurij Rightblog.ru-->
      <!-- TODO: MAKE THIS TRANSPARENT AND CICKABLE-->
      <!-- TODO: STYLING FOR HR CLASS-->
      <div class="mouse-scroll-button">
        <div class="mouse_scroll">
          <div class="mouse">
          </div>
          <div>
            <span class="m_scroll_arrows unu"></span>
            <span class="m_scroll_arrows doi"></span>
            <span class="m_scroll_arrows trei"></span>
          </div>
        </div>
      </div>
    </div>

    <!--<button type="blue-button" class="btn btn-primary me-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">Toggle offcanvas</button>
    <a id="example-popoverButton" class="text-success" href="#" role="button" data-bs-toggle="popover" title="Custom popover" data-bs-content="This is a Bootstrap popover.">Example popover</a>
    -->

    <!-- Off Canvas Menu-->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div>
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
        </div>
        <div class="dropdown mt-3">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
            Dropdown button
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End of Off Canvas Menu-->

    <!-- <hr class="col-1 my-5 mx-0">-->
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </body>
</template>