function openTabMenuAbertoLink(event, nomeTab) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontentLinkMenuAberto");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      tabcontent[i].style.opacity = "0";
      tabcontent[i].style.visibility = "visible";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(nomeTab).style.display = "flex";
    document.getElementById(nomeTab).style.opacity = "1";


}

function voltaMenuAberto(){
                
    var i, tabcontent;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontentLinkMenuAberto");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.opacity = "0";
      tabcontent[i].style.visibility = "hidden";
      tabcontent[i].style.display = "none";
    }
}