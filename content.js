console.log("content script executed");
var button = document.createElement("button");

function exec() {
  document.querySelectorAll("._1sbsllb").length > 0 ? (
    document.querySelectorAll("._1sbsllb")[0].appendChild(button),
    document.querySelectorAll(".btn_ext")[0].addEventListener("click", click),
    document.querySelectorAll(".header > div")[1].addEventListener("click", click2),
    document.querySelectorAll(".header > div")[2].addEventListener("click", click2),
    document.addEventListener("keydown", keyP),
    document.addEventListener("wheel", wheel),
    document.addEventListener("click", click2)
  ) : setTimeout(() => {
    exec()
  }, 1000)
}

function click() {
  $("body").toggleClass("is-rtl"), setTimeout(() => {
    $("body").hasClass("is-rtl") ? click2() : click2r()
  }, 250)
}

function wheel() {
  $("body").hasClass("is-rtl") ? click2() : click2r()
}

function keyP(e) {
  console.log(e.which), 13 != e.which && 9 != e.which || ($("body").hasClass("is-rtl") ? click2() : click2r())
}

function click2() {
  console.log($("body").hasClass("is-rtl")), $("body").hasClass("is-rtl") && setTimeout(() => {
    if (console.log(document.querySelectorAll("._1wbge1a > div > div > ._1ntwfgk").length), document.querySelectorAll("._1wbge1a > div > div > ._1ntwfgk").length > 0)
      for (let e = 0; e < document.querySelectorAll("._1wbge1a > div > div > ._1ntwfgk").length; e++) document.querySelectorAll("._1wbge1a > div > div > ._1ntwfgk")[e].classList.contains("readjust") || (console.log("class added"), document.querySelectorAll("._1wbge1a > div > div > ._1ntwfgk")[e].classList.add("readjust"), console.log(document.querySelectorAll("._1wbge1a > div > div > ._1ntwfgk")[e]))
  }, 250)
}

function click2r() {
  console.log($("body").hasClass("is-rtl")), $("body").hasClass("is-rtl") || setTimeout(() => {
    if (console.log(document.querySelectorAll("._1wbge1a > div > div > ._1ntwfgk").length), document.querySelectorAll("._1wbge1a > div > div > ._1ntwfgk").length > 0)
      for (let e = 0; e < document.querySelectorAll("._1wbge1a > div > div > ._1ntwfgk").length; e++) document.querySelectorAll("._1wbge1a > div > div > ._1ntwfgk")[e].classList.contains("readjust") && (console.log("class removed"), document.querySelectorAll("._1wbge1a > div > div > ._1ntwfgk")[e].classList.remove("readjust"))
  }, 250)
}

button.className = "btn_ext"
button.innerHTML = "Toggle"
exec();