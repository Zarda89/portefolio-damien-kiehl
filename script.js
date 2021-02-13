function openNavbar()
{
  let open = document.getElementById("icon-menu-open");
  open.classList.add("hide");
  open.classList.remove("show");

  let close = document.getElementById("icon-menu-close");
  close.classList.add("show");
  close.classList.remove("hide");

  let navbar = document.getElementById("navbar");
  navbar.classList.add("display-flex");
}

function closeNavbar()
{
  let open = document.getElementById("icon-menu-open");
  open.classList.add("show");
  open.classList.remove("hide");

  let close = document.getElementById("icon-menu-close");
  close.classList.add("hide");
  close.classList.remove("show");

  let navbar = document.getElementById("navbar");
  navbar.classList.remove("display-flex");
}

