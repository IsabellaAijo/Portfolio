<script setup>
import SkillsItem from './AppSkillItem.vue'
</script>

<script>
export default {
  data() {
    return {
      logos: [
        { 
            url: '../../assets/tech-logos/html5.svg',
          title: 'HTML5'
        },
        /**{ 
            url: '../../assets/tech-logos/typescript.svg',
          title: 'TypeScript'
        },**/
        { 
            url: '../../assets/tech-logos/javascript.svg',
          title: 'JavaScript'
        },
        { 
            url: '../../assets/tech-logos/angularjs.svg',
          title: 'Angular JS'
        },
        { 
            url: '../../assets/tech-logos/vuejs.svg',
          title: 'Vue JS'
        },
        { 
            url: '../../assets/tech-logos/reactjs.svg',
          title: 'React JS'
        },
        { 
            url: '../../assets/tech-logos/bootstrap.svg',
          title: 'Bootstrap'
        },
        { 
            url: '../../assets/tech-logos/sass.svg',
          title: 'SASS'
        },
        { 
            url: '../../assets/tech-logos/cpp.svg',
          title: 'C++'
        },
        { 
            url: '../../assets/tech-logos/java.svg',
          title: 'Java'
        },
        { 
            url: '../../assets/tech-logos/python.svg',
          title: 'Python'
        },
        { 
            url: '../../assets/tech-logos/mysql.svg',
          title: 'mySQL'
        },
        { 
            url: '../../assets/tech-logos/xml.svg',
          title: 'XML'
        },
      ]
    }
  }
}
</script>

<template>
    <div class="skills-body" id="skills">
        <div class="mobile" id="mobile-skills">
            <h2>Technical Skills</h2>
            <hr class="col-1">
        </div>         
        <!-- TODO: These pop up chronilogically from bottom on scroll-->
            <ul class="list-group list-group-horizontal">
                <SkillsItem
                    v-for="item in logos"
                    :href="item.url"
                    :text="item.title"
                />
            </ul>
    </div>
</template>