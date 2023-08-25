<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ComputingTech</title>
      <link href="style.css" rel="stylesheet" type="text/css" />
  <script src="https://kit.fontawesome.com/d6098394de.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
      <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Acme&family=Alegreya+Sans&family=Belanosima&family=Heebo&family=Hind+Madurai:wght@500&family=Krub:wght@400;700&family=Marcellus&family=Orbitron:wght@600&family=PT+Mono&family=PT+Sans&family=Rowdies:wght@300&family=Sen&family=Signika:wght@600&family=Source+Code+Pro:ital,wght@1,500&display=swap"
    rel="stylesheet">
    <link rel="icon" type="image/jpg" href="imagenes/favicon.jpg" />
  </head>
  <body class="tienda">
  <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12 col-xxl-12">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-bg-secondary px-2 py-2 " id="navbarTogglerDemo01">
          <p class="titulo2">
            <a class="navbar-brand text-light" href="index.php"><i class="fa-solid fa-display"></i>
              ComputingTech</a>
          </p>
          <ul class="navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-light link1" aria-current="page" href="tienda.html">Tienda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-light link2" href="contacto.html">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-light link3" href="#">Novedades</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-light link4" href="#">Ayuda</a>
            </li>
          </ul>
          <form class="d-flex texto-busqueda" role="search">
            <input class="form-control me-2 caja-texto extender" type="search" placeholder="¿Qué estás buscando?"
              aria-label="Search">
            <button class="btn btn-outline-primary boton-buscar" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  </div>

<div class="container-fluid">
<div class="row">
<div class="fondo-importante-respuesta">  
<h1 class="text-light primer-texto">Gracias en breve responderemos a tus dudas o comentarios.</h1>
<h2 class="text-light segundo-texto">Los datos recibidos son:</h2>
<div class="border rounded-3 bg-light caja_de_texto_respuesta">  
<p class="text-start texto-asunto"><span>Asunto:</span> <?php echo $_POST["flexRadioDefault"]; ?></p>
<p class="text-start texto-nombre"><span>Nombre:</span> <?php echo $_POST["nombre"]; ?></p>
<p class="text-start texto-email"><span>Email:</span> <?php echo $_POST["email"]; ?></p>
<p class="text-start texto-mensaje"><span>Mensaje:</span> <?php echo $_POST["mensaje"]; ?></p>
</div> 
</div> 
</div>
</div>

<footer>
    <div class="container-fluid">
      <div class="footer-titulos">
        <div class="row">
          <div class="col-6 col-md-2 mb-3 clase-footer">
            <h5 class="primera-colmuna-footer">Acerca de</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white titulo-importante">Empresa</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white titulo-importante">Misión y
                  Valores</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white titulo-importante">Cuenta</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white titulo-importante">Blog</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white titulo-importante">Preguntas</a></li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3 clase-footer">
            <h5 class="primera-colmuna-footer2">Soporte</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white titulo-importante">Facturación</a>
              </li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white titulo-importante">Ayuda</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white titulo-importante">Mis Compras</a>
              </li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white titulo-importante">Garantias</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white titulo-importante">Promociones</a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3 clase-footer">
            <h5 class="primera-colmuna">Contacto</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white titulo-importante">Whatsapp</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white titulo-importante">Chat</a></li>
              <li class="nav-item mb-2">
                <p class="text-white hora-atencion">Hora de Atencion:
                <p class="text-white texto-lahora">Lunes a Domingo de 8:00 a 21:00 hrs.</p>
                </p>
              </li>
            </ul>
          </div>

          <div class="col-md-5 offset-md-1 mb-3 clase-footer-suscribirse">
            <form>
              <h5>Subscribirse a ComputingTech</h5>
              <p>Recibe grandes promociones en nuestra gran página de Tecnología</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Ingresa tu e-mail</label>
                <input id="newsletter1" type="text" class="form-control" placeholder="Ingresa tu e-mail">
                <button class="btn btn-outline-dark boton-buscar-footer" type="submit">Suscribirse</button>
              </div>
            </form>
          </div>
        </div>
      </div>


      <div class="footer-descripcion-empresa">
        <div class="d-flex flex-column flex-sm-row pt-4 my-2 border-top">
          <div class="col-sm-9 col-lg-9 col-md-9 col-xl-9">
            <p class="text-light palabra-compania">© 2023 ComputingTech Inc. All rights reserved.</p>
            <div class="pagos-formas">
              <div>
                <p class="PAGO">Formas de pago:</p>
              </div>
              <div class="empresas-pago">
                <ul class="list-unstyled d-flex pagos-lista">
                  <li class="pagos ms-4">
                    <img src="imagenes/2daPagina(TIENDA)/Pagos/Paypal_pago.jpg" alt="" width=125px height=28px>
                  </li>

                  <li class="pagos ms-4">
                    <img src="imagenes/2daPagina(TIENDA)/Pagos/visa_Pago.jpg" alt="" width=120px height=28px>
                  </li>
                  <li class="pagos ms-4">
                    <img src="imagenes/2daPagina(TIENDA)/Pagos/ma-bc_mastercard-logo_eq.png" alt="" width=72px
                      height=28px>
                  </li>
                  <li class="pagos ms-4">
                    <img src="imagenes/2daPagina(TIENDA)/Pagos/american.png" alt="" width=100px height=28px>
                  </li>
                  <li class="pagos ms-4">
                    <img src="imagenes/2daPagina(TIENDA)/Pagos/bitcoin.jpg" alt="" width=130px height=28px>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-3 col-lg-3 col-md-3 col-xl-3">
            <div class="marcas-empresas">
              <div>
                <p class="redes-sociales">Siguenos en:</p>
              </div>
              <ul class="list-unstyled d-flex">

                <li class="ms-4"><a class="logo-facebook" href="#"><i class="fa-brands fa-square-facebook "
                      style="color: #fafcff;">
                      <use xlink:href="#facebook"></use>
                    </i></a></li>

                <li class="ms-4"><a class="logo-youtube" href="#"><i class="fa-brands fa-youtube"
                      style="color: #fafcff;">
                      <use xlink:href="#youtube"></use>
                    </i></a></li>

                <li class="ms-4"><a class="logo-instagram" href="#"><i class="fa-brands fa-instagram"
                      style="color: #fafcff;">
                      <use xlink:href="#instagram"></use>
                    </i></a></li>

                <li class="ms-4"><a class="logo-twitter" href="#"><i class="fa-brands fa-twitter"
                      style="color: #fafcff;">
                      <use xlink:href="#twitter"></use>
                    </i></a></li>

                <li class="ms-4"><a class="logo-tiktok" href="#"><i class="fa-brands fa-tiktok" style="color: #fafcff;">
                      <use xlink:href="#tiktok"></use>
                    </i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </footer>
  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
  </body>
</html>