<template>
  <div class="home-header">
      <div class="home-logo osLight"><span class="fa icon-heart"></span> Rilen</div>
      <a href="#" class="home-navHandler visible-xs"><span class="fa fa-bars"></span></a>
      <div class="home-nav">
          <ul>
              <li><a href="#" data-toggle="modal" data-target="#signup">Entrar</a></li>
              <li><a href="#" data-toggle="modal" data-target="#signin">Cadastrar</a></li>
              <li><a href="add.html" class="btn btn-green">Sou Médico</a></li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: 'rl-home-header'
}
</script>
