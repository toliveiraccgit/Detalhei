function openTab(event, nomeTab) {
    // Declare all variables
    var i, tabcontent, tablinks;

  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks-testes");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-testes", "  ");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(nomeTab).style.display = "block";
    event.currentTarget.className += " active-testes";


}
document.getElementById("defaultOpen").click()