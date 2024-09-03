function onF(){
      var menu = document.getElementById("menu");
      if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            setTimeout(function(){
                  document.getElementById("bar2").classList.remove("d-none");
            },200);
            document.getElementById('myUl').classList.remove('d-block');
            document.getElementById('over-overlayer').classList.remove("fiexed-bg");
        } else {
            menu.classList.add("active");
            document.getElementById("bar2").classList.add("d-none");
            document.getElementById('myUl').classList.add('d-block');
            document.getElementById('over-overlayer').classList.add("fiexed-bg");
        }
}