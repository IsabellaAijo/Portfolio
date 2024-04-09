<script>
export default {
  props: {
    href: String,
    text: String
  }
}
</script>
<template>
    
    <li>
        <svg height="100%" width="100%" viewBox="0 0 100 100">
            <image :href="href"/>
        </svg>
        <p target="_blank" rel="noopener">{{ text }}</p>
    </li>
</template>